import { CardType } from '@/utils/data';
import { create } from 'zustand';

interface ModalType {
    isOpen: boolean;
    initialValue: number;
    onOpen: (value: number) => void;
    onClose: () => void;
}

export const useModalStore = create<ModalType>((set) => ({
    isOpen: false,
    initialValue: 0,
    onOpen: (value: number) => set({ isOpen: true, initialValue: value }),
    onClose: () => set({ isOpen: false }),
}));
