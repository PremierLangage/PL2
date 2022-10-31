import { formState } from "src/app/activity/exercice/models/exercice";
import { formSuperClassInterface } from "../../form-superclass";
import { FormlyForm } from "../formlyform/formlyform";

export interface ExerciceReviewerForm extends formSuperClassInterface {
    exerciceForm: formState;
    statement?: string;
    answerForm: FormlyForm;
}