export interface RadioGroupItem {
    css?: string;
    content: string;
}

export interface RadioGroupForm {
    items: RadioGroupItem[];
    disabled: boolean;
    horizontal: boolean;
}
