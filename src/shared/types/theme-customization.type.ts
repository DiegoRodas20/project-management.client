import { ThemeMode } from "../enums/theme-mode.enum";

export type FontFamily = string;
export type I18n = 'en' | 'fr' | 'ro' | 'zh';

export type ThemeCustomization = {
    fontFamily: FontFamily;
    i18n: I18n;
    mode: ThemeMode
}