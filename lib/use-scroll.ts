'use client';
import React, { useCallback, useEffect, useState } from 'react';

export const useScroll = (mainRef: React.RefObject<HTMLDivElement>) => {
    const [scroll, setScroll] = useState('');
    const onScroll = useCallback(() => {
        console.log('asd');
        // const { scrollY } = window;
        // console.log('scrollY', scrollY);
        // if (scrollY >= 48) {
        //     setScroll('header-fixed');
        // } else setScroll('');
    }, []);

    useEffect(() => {
        console.log(mainRef);
        window.addEventListener('scroll', onScroll);
        if (mainRef.current === null) return;

        mainRef.current?.addEventListener('scroll', onScroll, {
            passive: true,
        });
        // remove event on unmount to prevent a memory leak with the cleanup
        return () => {
            document.body.removeEventListener('scroll', onScroll);
        };
    }, [mainRef, onScroll]);

    return scroll;
};
