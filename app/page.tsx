'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { StartBody } from '@/components/start-body';
import { WorkBody } from '@/components/work-body';
import { AboutBody } from '@/components/about-body';
import { ContactBody } from '@/components/contact-body';
import { useParams, useRouter } from 'next/navigation';
import { TopButton } from '@/components/top-button';
import { Line } from '@/components/line';

const MainPage = () => {
    const startRef = useRef<HTMLDivElement>(null);

    const workRef = useRef<HTMLDivElement>(null);

    const contacttRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);

    const params = useParams();
    const router = useRouter();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash === '') {
            router.push('/#Start');
        }
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
    }, [params, router]);

    return (
        <motion.div
            style={{ backgroundColor: 'rgb(26, 21, 39)' }}
            className=" h-full w-full snap-y snap-mandatory  "
        >
            <Line />
            <StartBody ref={startRef} />
            <WorkBody ref={workRef} works={[0, 1]} head />
            <WorkBody works={[2, 3]} />
            <WorkBody works={[4]} />
            <AboutBody ref={aboutRef} />
            <ContactBody ref={contacttRef} />
            <TopButton />
        </motion.div>
    );
};

export default MainPage;
