import {create} from "zustand";

interface StoreSnackbar {
    setOpen: (isOpen: boolean) => void,
    open: boolean
}

const UseSnackbar = create<StoreSnackbar>((set) => ({
    open: false,
    setOpen: (isOpen) => set(() => ({open: isOpen}))
}))


export default UseSnackbar;