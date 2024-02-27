import React, { forwardRef } from 'react';

export const AboutBody = forwardRef((props, ref: React.Ref<HTMLDivElement>) => {
    return (
        <div ref={ref} className="snap-start h-full bg-violet-600 pl-72">
            AboutBody
        </div>
    );
});

AboutBody.displayName = 'AboutBody';
