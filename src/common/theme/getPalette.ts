import {PaletteMode} from "@mui/material";
import {DARK_MODE_BACKGROUND, DARK_MODE_COLORS, FONT_STYLE_THEME, LIGHT_MODE_BACKGROUND, LIGHT_MODE_COLORS} from "./constants.ts";

export const tokens = (mode: PaletteMode) => ({
    ...(mode === "dark"
        ? DARK_MODE_COLORS : LIGHT_MODE_COLORS),
});

const getPalette = (mode: PaletteMode) => {
    const colors = tokens(mode)
    const modeState = mode === "dark"

    return {
        palette: {
            mode: mode,
            primary: {
                main: modeState ? colors.primary[500] : colors.primary[100]
            },
            secondary: {
                main: colors.greenAccent[500],
            },
            background: {
                default: modeState ? DARK_MODE_BACKGROUND : LIGHT_MODE_BACKGROUND,
            }
        },
        typography: {
            ...FONT_STYLE_THEME
    }}
};

export default getPalette;