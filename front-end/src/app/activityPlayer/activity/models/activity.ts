import { exercice } from "../../exercice/models/exercice";
import { ProviderActivityTemplateKeys } from "./providers/activityTemplate";
import { ProviderExerciceListTemplateKeys } from "./providers/exercice-list";

export interface exerciceLoadingData {
    uri: string;
    title: string;
    param?: {
        difficulty?: 1|2|3|4|5|6|7|8|9|10;
        barem?: string;
    }
}

type Dictionary<K extends string, T> = Partial<Record<K, T>>
export const PRESENTATIONKEY = "__presentation__"

export interface activity {
    title: string;
    desc: string;
    author: string;
    version: string;
    exercices: Dictionary<string, exerciceLoadingData>;
    currentExercice?: string;
    entryExercice: string;
    template: {
        template: ProviderActivityTemplateKeys;
        exerciceList: ProviderExerciceListTemplateKeys;
    };
}

