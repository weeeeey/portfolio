import React, { forwardRef } from 'react';

export const ContactBody = forwardRef(
    (props, ref: React.Ref<HTMLDivElement>) => {
        return (
            <div ref={ref} className="snap-start h-full bg-violet-800 pl-72">
                ContactBody
            </div>
        );
    }
);

ContactBody.displayName = 'ContactBody';
