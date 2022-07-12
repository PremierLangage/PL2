export interface InputBoxForm {
    type: 'number' | 'text' | 'textarea';
    hint: string;
    prefix: string;
    suffix: string;
    appearance: 'legacy' | 'standard' | 'fill' | 'outline';
    placeholder: string;
    disabled: boolean;
    completion: string[];
    numberProperties?: numberProperties;
    textProperties?: textProperties;
    textareaProperties?: textareaProperties;
}

export interface numberProperties {
    min: number;
    max: number;
    step: number;
}

export interface textProperties {
    maxChar?: number;
}

export interface textareaProperties {
    minLine?: number;
    maxLine?: number;
    maxChar?: number;
}