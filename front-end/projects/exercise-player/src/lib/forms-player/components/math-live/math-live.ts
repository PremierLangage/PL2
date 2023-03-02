import { FormSuperInterface } from "../../../models/exercise";


export interface MathLiveForm extends FormSuperInterface {
    prefix?: string;
    suffix?: string;
    config : any;
}