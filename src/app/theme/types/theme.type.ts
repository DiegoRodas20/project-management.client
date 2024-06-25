import { ThemeMode } from "../enums/theme-mode.enum";
import { FontFamily } from "./font-family.type";
import { I18n } from "./i18n.type";

export type ThemeCustomization = {
    fontFamily: FontFamily;
    i18n: I18n;
    mode: ThemeMode
}