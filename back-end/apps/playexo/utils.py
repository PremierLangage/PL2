# coding: utf-8
import time
import json
import os
import tarfile
import tempfile
from typing import Optional
import uuid
import requests

from django.conf import settings
from .types import SandboxRequest, SandboxUrl
# from django_jinja.backend import Jinja2


def tar_from_dic(files: dict[str, str]) -> bytes:
    """Returns binaries of a tar gz file with the given file dictionnary
    Each entry of files is: "file_name": "file_content"
    """
    with tempfile.TemporaryDirectory() as tmp_dir, tempfile.TemporaryDirectory() as env_dir:
        env_uuid = uuid.uuid4()
        tar_name = tmp_dir + "/" + str(env_uuid) + ".tgz"
        with tarfile.open(tar_name, "w:gz") as tar:
            for key in files:
                with open(os.path.join(env_dir, key), "w") as f:
                    print(files[key], file=f)

            tar.add(env_dir, arcname=os.path.sep)

        with open(tar_name, 'rb') as tar:
            tar_stream = tar.read()

    return tar_stream


def make_data(list_commands: list[str], save: bool, environment=None, result_path=None) -> SandboxRequest:
    commands = {
        "commands": list_commands,
        "save": save,
        "environment": environment,
    }
    if result_path is not None:
        commands["result_path"] = result_path
    return {
        "config": json.dumps(commands),
    }


def get_file_from_env(sandbox: SandboxUrl, file_name: str, env: str) -> Optional[str]:
    if requests.head(
            os.path.join(
                sandbox,
                "files/%s/" + file_name + "/"
            ) % env):
        file = requests.get(os.path.join(
            sandbox,
            "files/%s/" + file_name + "/") % env)
        return file.text
    return None


def get_sandboxerr_build(status: int, timeout: int) -> str:
    match status:
        case 0:
            return ""
        case -2:
            return "Execution of the script build/before timed out after " + \
            str(timeout) + " seconds."
        case -3:
            return "File 'processed.json' and 'pl.json' were not found in the environment " \
            "after the execution of the " \
            "build/before script. "
        case _:
            return "An unknown error occured."
  


def get_sandboxerr_eval(status: int, timeout: int) -> str:
    match status:
        case 0:
            return ""
        case -1:
            return "Execution of the evaluating script failed " \
               "due to an unkwown error. Please contact your teacher."
        case -2:
            return "Execution of the grader timed out after " + str(timeout) + \
               "seconds.\nThe RAM of the sandbox is currently limited to " + \
               settings.DOCKER_MEM_LIMIT + ", using more will considerably " \
                                           "slow the execution of \
               your grader.\nDo not forget to close every open file " \
                                           "or to use 'with' statement. "
        case _:
            return "Execution of the evaluating script returned an invalid value. " \
            "Please contact your teacher."


# def render_feedback(feedback):
#     """Returns the given markdown string as an html string
#     """
#     env = Jinja2.get_default()
#     return env.from_string(
#         "{% with fh=f|markdown %}{{fh|safe}}{% endwith %}"
#     ).render(context={'f': feedback})
    
def create_seed() -> int:
    return int(time.time() % 100)    
