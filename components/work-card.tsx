'use client';
import React, { useEffect, useState } from 'react';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useModalStore } from '@/lib/modal-store';
import { CardType, cards } from '@/utils/data';

interface WorkBodyProps {
    idx: number;
}

const containerClassName = ['ml-20 justify-start', 'mr-20 justify-end'];

export const WorkCard = ({ idx }: WorkBodyProps) => {
    const { onOpen } = useModalStore();
    const [card, setcard] = useState<CardType>();

    useEffect(() => {
        setcard(cards[idx]);
    }, [idx]);

    const handleClick = () => {
        onOpen(idx);
    };

    if (!card) return null;

    return (
        <CardContainer containerClassName={containerClassName[idx % 2]}>
            <CardBody className="bg-transparent group/card h-52 ">
                <CardItem
                    translateZ="40"
                    className="text-xl font-bold  relative w-full h-full "
                >
                    <div className="cursor-pointer" onClick={handleClick}>
                        <Image
                            src={card.image}
                            alt="work"
                            fill
                            className="opacity-70 hover:opacity-90 transition-all duration-500"
                        />
                        <CardItem translateZ="70">
                            <div className="absolute top-1/2 -left-20 space-y-3 ">
                                <div className="text-white text-3xl">
                                    {card.title}
                                </div>
                                <div className="w-32 h-1 bg-white" />
                                <div className="text-slate-400 text-sm">
                                    <div>{(idx + 1 + '').padStart(2, '0')}</div>
                                    <ArrowRight className="w-3 h-3" />
                                </div>
                            </div>
                        </CardItem>
                    </div>
                </CardItem>
            </CardBody>
        </CardContainer>
    );
};
