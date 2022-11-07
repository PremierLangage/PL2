import { CodeEditorForm } from "../../resources/forms/components/code-editor/code-editor";
import { FormlyForm } from "../../resources/forms/components/formlyform/formlyform";
import { InputBoxForm } from "../../resources/forms/components/input-box/input-box";
import { RadioGroupForm } from "../../resources/forms/components/radio-group/radio-group";


export declare type ProviderFormTypes = RadioGroupForm | InputBoxForm | CodeEditorForm | FormlyForm;

export declare type ProviderFormKeys = 'radioGroup' | 'inputBox' | 'codeEditor' | 'form';