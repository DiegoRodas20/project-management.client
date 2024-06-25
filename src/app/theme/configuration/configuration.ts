import { Roboto } from "next/font/google";
import { ThemeMode } from "../enums/theme-mode.enum";
import { ThemeCustomization } from "../types/theme.type";

export const APP_DEFAULT_PATH = '/admin/dashboard';
export const HORIZONTAL_MAX_ITEM = 6;
export const DRAWER_WIDTH = 280;
export const MINI_DRAWER_WIDTH = 90;
export const HEADER_HEIGHT = 74;

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["300", "400", "500", "700"],
});

const configuration: ThemeCustomization = {
    fontFamily: roboto.style.fontFamily,
    i18n: "en",
    mode: ThemeMode.DARK
}

export default configuration;
