'use cilent';
import React, { forwardRef, useEffect } from 'react';
import { WorkCard } from './work-card';

interface WorkBodyProps {
    works: number[];
    head?: boolean;
}

export const WorkBody = forwardRef(
    ({ works, head }: WorkBodyProps, ref: React.Ref<HTMLDivElement>) => {
        return (
            <div
                ref={ref}
                style={{ backgroundColor: 'rgb(26, 21, 39)' }}
                className="snap-start h-full  pl-72 py-10 "
            >
                {head && <div className="text-slate-400 ">Work/{`>`}</div>}

                {works.map((work, idx) => (
                    <WorkCard key={idx} idx={work} />
                ))}
            </div>
        );
    }
);

WorkBody.displayName = 'WorkBody';
