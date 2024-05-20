import {create} from "zustand";
import {useMemo} from "react";
import {createTheme, PaletteMode} from "@mui/material";
import getPalette, {tokens} from "../getPalette.ts";
interface StoreColorMode {
    mode: PaletteMode,
    toggleMode: () => void
}

export const useColorMode = create<StoreColorMode>((set) => ({
    mode: 'dark',
    toggleMode: () => set((state) => state.mode === 'dark' ? {...state, mode: 'light'} : {...state, mode: 'dark'})
}))

export const useMode = () => {
    const {mode} = useColorMode()
    const theme = useMemo(() => createTheme(getPalette(mode)), [mode])
    return [theme]
}

export const useColors = () => {
    const {mode} = useColorMode()
    return tokens(mode)
}
