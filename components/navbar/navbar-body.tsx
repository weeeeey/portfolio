'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { NavItem } from './nav-item';

import { cn } from '@/utils/cn';

const contents = ['Start', 'Work', 'About', 'Contact'];

export const NavbarBody = () => {
    const [selectedHash, setselectedHash] = useState('Start');
    const param = useParams();

    useEffect(() => {
        setselectedHash(window.location.hash.slice(1));
    }, [param]);

    return (
        <div
            className={cn(
                'fixed text-white top-0 w-full px-10 bg-transparent py-3  flex justify-between items-center'
            )}
        >
            <Link
                href={`/#Start`}
                className="text-xl flex items-center space-x-2 text-violet-600 hover:scale-110 transition-all"
            >
                <span>{`<`}</span>
                <span className="text-4xl text-white">ZEROJIN</span>
                <span>{`/>`}</span>
            </Link>
            <div className="flex justify-between items-center space-x-5 ">
                {contents.map((content, index) => (
                    <NavItem
                        selectedHash={selectedHash}
                        text={content}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};
