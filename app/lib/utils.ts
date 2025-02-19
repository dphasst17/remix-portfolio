import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
export const formatDate = (date: string) => {
    return date.split("T")[0].split("-").reverse().join("/");
}
export const convertLanguage = (language: string) => {
    switch (language?.toLocaleUpperCase()) {
        case "JAVASCRIPT":
            return "JavaScript"
        case "TYPESCRIPT":
            return "TypeScript"
        case "HTML":
            return "Angular"
        case "PHP":
            return "php"
        case "HACK":
            return "php"
        default:
            return "JavaScript"
    }
}

