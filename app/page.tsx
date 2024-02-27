'use client';
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { StartBody } from '@/components/start-body';
import { WorkBody } from '@/components/work-body';
import { AboutBody } from '@/components/about-body';
import { ContactBody } from '@/components/contact-body';
import { useParams } from 'next/navigation';

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
            <div
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-10 h-10 rounded-full bg-white fixed bottom-10 right-10 cursor-pointer"
            />
        </motion.div>
    );
};

export default MainPage;
