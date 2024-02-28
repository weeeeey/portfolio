import { ArrowUp, MoveUp } from 'lucide-react';
import React from 'react';

export const TopButton = () => {
    return (
        <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex justify-center items-center w-10 h-10 rounded-full bg-white fixed bottom-5 right-5 cursor-pointer"
        >
            <ArrowUp className="text-violet-600 " />
        </div>
    );
};
