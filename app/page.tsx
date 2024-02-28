'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { StartBody } from '@/components/start-body';
import { WorkBody } from '@/components/work-body';
import { AboutBody } from '@/components/about-body';
import { ContactBody } from '@/components/contact-body';
import { useParams } from 'next/navigation';
import { TopButton } from '@/components/top-button';

const MainPage = () => {
    const startRef = useRef<HTMLDivElement>(null);
    const workRef = useRef<HTMLDivElement>(null);
    const contacttRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);

    const params = useParams();

    useEffect(() => {
        const hash = window.location.hash;
        switch (hash) {
            case '#Work':
                workRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case '#About':
                aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            case '#Contact':
                contacttRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
            default:
                startRef.current?.scrollIntoView({ behavior: 'smooth' });
                break;
        }
    }, [params]);

    return (
        <motion.div
            style={{ backgroundColor: 'rgb(26, 21, 39)' }}
            className=" h-full w-full  "
        >
            <StartBody ref={startRef} />
            <WorkBody ref={workRef} />
            <AboutBody ref={aboutRef} />
            <ContactBody ref={contacttRef} />
            <TopButton />
        </motion.div>
    );
};

export default MainPage;
