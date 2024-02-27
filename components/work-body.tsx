import React, { forwardRef } from 'react';

export const WorkBody = forwardRef((props, ref: React.Ref<HTMLDivElement>) => {
    return (
        <div ref={ref} className="snap-start h-full bg-violet-700 pl-72"></div>
    );
});

WorkBody.displayName = 'WorkBody';
