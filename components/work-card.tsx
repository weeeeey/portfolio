'use client';
import React from 'react';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useModalStore } from '@/lib/modal-store';

interface WorkBodyProps {
    imageUrl: string;
    title: string;
    idx: number;
}

export const WorkCard = ({ imageUrl, title, idx }: WorkBodyProps) => {
    const { onOpen } = useModalStore();
    const handleClick = () => {
        onOpen(idx);
    };
    return (
        <CardContainer>
            <CardBody className="bg-gray-50  group/card h-52 ">
                <CardItem
                    translateZ="70"
                    className="text-xl font-bold  relative w-full h-full bg-red-300 "
                >
                    <div className="cursor-pointer" onClick={handleClick}>
                        <Image
                            src="/git.png"
                            alt="work"
                            fill
                            className="opacity-70"
                        />
                        <div className="absolute top-1/2 -left-20 space-y-3 ">
                            <div className="text-white text-3xl">Title</div>
                            <div className="w-32 h-1 bg-white" />
                            <div className="text-slate-400 text-sm">
                                <div>{(idx + 1 + '').padStart(2, '0')}</div>
                                <ArrowRight className="w-3 h-3" />
                            </div>
                        </div>
                    </div>
                </CardItem>
            </CardBody>
        </CardContainer>
    );
};
