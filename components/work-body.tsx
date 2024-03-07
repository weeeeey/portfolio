'use cilent';
import React, { forwardRef, useEffect, useRef } from 'react';
import { WorkCard } from './work-card';
import { useInView } from 'framer-motion';

interface WorkBodyProps {
    works: number[];
    head?: boolean;
}

export const WorkBody = forwardRef(
    ({ works, head }: WorkBodyProps, ref: React.Ref<HTMLDivElement>) => {
        const cRef = useRef<HTMLDivElement>(null);
        const inview = useInView(cRef, {
            amount: 0.5,
            once: true,
        });

        return (
            <div
                ref={ref}
                style={{ backgroundColor: 'rgb(26, 21, 39)' }}
                className="snap-start h-full  pl-72 py-10 "
            >
                {head && <div className="text-slate-400 ">Work/{`>`}</div>}

                <div ref={cRef} className="overflow-x-hidden pl-10">
                    {works.map((work, idx) => (
                        <WorkCard key={idx} idx={work} inview={inview} />
                    ))}
                </div>
            </div>
        );
    }
);

WorkBody.displayName = 'WorkBody';
