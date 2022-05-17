
#!/usr/bin/env python
# -*- coding: utf-8 -*-
#
#  request.py
#
#  Copyright 2017 Dominique Revuz <dr@univ-mlv.fr>
#
import json
import logging
import os
from typing import Optional

import requests
from django.conf import settings

from playexo.exceptions import SandboxUnavailable
from playexo.utils import tar_from_dic
from playexo.utils import make_data
from playexo.utils import get_sandboxerr_build
from playexo.utils import get_sandboxerr_eval
from playexo.utils import get_file_from_env
from .types import CommandList, SandboxRequest, SandboxResponse, SandboxUrl, Environment

logger = logging.getLogger(__name__)



class SandboxBuild:

    def __init__(self, dic: dict, sandbox: Optional[SandboxUrl], test: bool = False):
        self.sandbox: SandboxUrl = settings.SANDBOX if sandbox is None else sandbox
        self.dic: dict = dict(dic)
        self.test: bool = test

    def _build_env(self) -> Environment:
        env: Environment = dict(self.dic['__files'])
        tmp = self.dic
        del tmp['__files']

        env['pl.json'] = json.dumps(tmp)

        if 'grader' in self.dic and 'grader.py' not in env:
            env['grader.py'] = self.dic['grader']

        if 'builder' in self.dic and 'builder.py' not in env:
            env['builder.py'] = self.dic['builder']

        for item in os.listdir(settings.DOCKER_DEFAULT_FILES):
            s = os.path.join(settings.DOCKER_DEFAULT_FILES, item)
            with open(s, "r") as f:
                env[item] = f.read()
        return env

    def __buildSandboxResponse(self, url: SandboxUrl, data: SandboxRequest, files: dict, request_timeout: int) -> SandboxResponse:
        try:
            request_response: requests.Response = requests.post(url, data=data, files=files, timeout=request_timeout)
            response: SandboxResponse = json.loads(request_response.text)
            response["id"] = response["environment"]
            response['stderr'] = response['execution'][-1]['stderr']
            response['sandboxerr'] = get_sandboxerr_build(response['status'], request_timeout)
            stderr = get_file_from_env(self.sandbox, "stderr.log", response["id"])
            if stderr is not None:
                response["stderr"] = stderr
            if response['status'] != 0:
                if "JSONDecodeError" in response['stderr']:
                    response['status'] = -1
                return response
            context = get_file_from_env(self.sandbox, "processed.json", response["id"])
            if context is not None:
                response["context"] = json.loads(context)
            else:
                response['status'] = -1
            del response["environment"]
            del response['execution']
        except json.decoder.JSONDecodeError:  # pragma: no cover
            msg = "Sandbox '" + url + "' returned a non JSON response\n"
            logger.critical(msg)
            raise SandboxUnavailable(msg)
        except Exception:
            msg = "Could not join the sandbox '" + url + "'."
            logger.exception(msg)
            raise SandboxUnavailable(msg)
        return response

    def call(self, request_timeout: int = 10) -> SandboxResponse:
        env: Environment = self._build_env()
        files: dict = {'environment': tar_from_dic(env)}
        commands: CommandList = ['chmod +x clean.sh', './clean.sh', 'chmod +x builder.sh', './builder.sh']
        data: SandboxRequest = make_data(commands, True, )
        logger.info("Building on sandbox '" + self.sandbox + "'.")
        url: SandboxUrl = os.path.join(self.sandbox, "execute/")
        return self.__buildSandboxResponse(url, data, files, request_timeout)


class SandboxEval:

    def __init__(self, uuid, answers, sandbox: Optional[SandboxUrl]):
        self.uuid = uuid
        self.sandbox: SandboxUrl = settings.SANDBOX if sandbox is None else sandbox
        self.answers = answers

    def check(self) -> bool:
        url: SandboxUrl = os.path.join(self.sandbox, "environments/%s/")
        try:
            r: requests.Response = requests.head(url % str(self.uuid), timeout=1)
            return 200 <= r.status_code <= 299
        except Exception:
            msg = "Could not join the sandbox '" + url + "'."
            logger.exception(msg)
            raise SandboxUnavailable(msg)

    def __buildSandboxResponse(self, url: SandboxUrl, data: SandboxRequest, files: dict, request_timeout: int) -> SandboxResponse:
        try:
            request_response: requests.Response = requests.post(url, data=data, files=files, timeout=request_timeout)
            response: SandboxResponse = json.loads(request_response.text)
            response["id"] = response["environment"]
            command = response['execution'][-1]
            stderr = get_file_from_env(self.sandbox, "stderr.log", response["id"])
            if stderr is not None:
                response["stderr"] = stderr
            response["sandboxerr"] = get_sandboxerr_eval(response["status"], request_timeout)
            feedback = get_file_from_env(self.sandbox, "feedback.html", response["id"])
            if feedback is not None:
                if feedback == '\n':
                    feedback = ""
                response["feedback"] = feedback
            context = get_file_from_env(self.sandbox, "processed.json", response["id"])
            if context is not None:
                response["context"] = json.loads(context)
            else:
                response["context"] = {}
            try:
                if not command["exit_code"]:
                    stdout = int(command["stdout"])
                    response["grade"] = stdout
                else:
                    response["grade"] = -1
            except ValueError:
                response["grade"] = -1
                response['status'] = -4
                response["feedback"] = "Sandbox error:" + response["sandboxerr"]

            del response["environment"]
            del response['execution']
        except json.decoder.JSONDecodeError:  # pragma: no cover
            msg = "Sandbox '" + url + "' returned a non JSON response\n"
            logger.critical(msg)
            raise SandboxUnavailable(msg)
        except Exception:
            msg = "Could not join the sandbox '" + url + "'."
            logger.exception(msg)
            raise SandboxUnavailable(msg)
        return response

    def call(self, request_timeout: int = 10) -> SandboxResponse:
        logger.info("Evaluating on sandbox '" + self.sandbox + "'.")
        files: dict = {'environment': tar_from_dic({'answers.json': json.dumps(self.answers)})}
        commands: CommandList = ['chmod +x clean.sh', './clean.sh', 'chmod +x grader.sh', './grader.sh']
        data: dict = make_data(commands, True, environment=str(self.uuid))
        url: SandboxUrl = os.path.join(self.sandbox, "execute/")
        return self.__buildSandboxResponse(url, data, files, request_timeout)
