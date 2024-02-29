'use cilent';
import { useModalStore } from '@/lib/modal-store';
import React, { forwardRef } from 'react';
import { WorkCard } from './work-card';
import { CardContainer } from './ui/3d-card';

export const WorkBody = forwardRef((props, ref: React.Ref<HTMLDivElement>) => {
    const { onOpen } = useModalStore();

    const handleClick = (n: number) => {
        onOpen(n);
    };

    return (
        <div
            ref={ref}
            style={{ backgroundColor: 'rgb(26, 21, 39)' }}
            className="snap-start h-full  pl-72 py-10 "
        >
            <div className="text-slate-400 ">Work/{`>`}</div>
            <div>
                <button
                    className="bg-white px-10"
                    onClick={() => handleClick(0)}
                >
                    0
                </button>
                <button
                    className="bg-white px-10"
                    onClick={() => handleClick(1)}
                >
                    1
                </button>
                <button
                    className="bg-white px-10"
                    onClick={() => handleClick(2)}
                >
                    2
                </button>
                <button
                    className="bg-white px-10"
                    onClick={() => handleClick(3)}
                >
                    3
                </button>
                <button
                    className="bg-white px-10"
                    onClick={() => handleClick(4)}
                >
                    4
                </button>
            </div>
            <WorkCard title="" imageUrl="" idx={0} />
        </div>
    );
});

WorkBody.displayName = 'WorkBody';
