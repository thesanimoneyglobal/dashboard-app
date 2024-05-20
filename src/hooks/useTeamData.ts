import { create } from "zustand";
import { mockDataTeam } from "../data/mockData.ts";

interface User {
    id: number;
    name: string;
    email: string;
    age: number;
    phone: string;
    access: string;
}

interface StoreUser {
    teamMembers: User[];
    addUser: (user: User) => void;
}

const useStoreUser = create<StoreUser>((set) => ({
    teamMembers: mockDataTeam,
    addUser: (user) => set((state) => ({ ...state, teamMembers: [...state.teamMembers, user] })),
}));

export default useStoreUser;
