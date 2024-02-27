'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface UseScrollIntoViewProps {
    startRef: React.RefObject<HTMLDivElement>;
    workRef: React.RefObject<HTMLDivElement>;
    contacttRef: React.RefObject<HTMLDivElement>;
    aboutRef: React.RefObject<HTMLDivElement>;
}
export const useScrollIntoView = ({
    aboutRef,
    contacttRef,
    workRef,
    startRef,
}: UseScrollIntoViewProps) => {
    const param = useParams();

    return useEffect(() => {
        const hash = window.location.hash;
        if (hash === '#Work') {
            workRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (hash === '#About') {
            aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (hash === '#Contact') {
            contacttRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else {
            startRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [aboutRef, contacttRef, workRef, startRef, param]);
};
