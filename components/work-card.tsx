'use client';
import React, { useEffect, useState } from 'react';
import { CardBody, CardContainer, CardItem } from './ui/3d-card';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { useModalStore } from '@/lib/modal-store';
import { CardType, cards } from '@/utils/data';
import { motion } from 'framer-motion';

interface WorkBodyProps {
    idx: number;
    inview: boolean;
}

const containerClassName = ['ml-20 justify-start', 'mr-20 justify-end'];

export const WorkCard = ({ idx, inview }: WorkBodyProps) => {
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
        <motion.div
            initial={{ opacity: 0, x: idx % 2 === 0 ? '-100%' : '100%' }}
            animate={{ opacity: inview ? 1 : 0, x: inview ? 0 : '' }}
            transition={{ duration: 1.5 }}
        >
            <CardContainer containerClassName={containerClassName[idx % 2]}>
                <CardBody className="bg-transparent group h-52  ">
                    <CardItem
                        translateZ="40"
                        className="text-xl font-bold  relative w-full h-full "
                    >
                        <div className="cursor-pointer" onClick={handleClick}>
                            <Image
                                src={card.image}
                                alt="work"
                                fill
                                className="opacity-85 group-hover:opacity-100 transition-all duration-500"
                            />
                            <CardItem translateZ="70">
                                <div className="absolute top-1/2 -left-20 space-y-3 ">
                                    <div className="text-white text-3xl duration-300 group-hover:text-violet-500">
                                        {card.title}
                                    </div>
                                    <div className="w-32 h-1 bg-white duration-300 group-hover:bg-violet-500" />
                                    <div className="text-slate-400 text-sm">
                                        <div>
                                            {(idx + 1 + '').padStart(2, '0')}
                                        </div>
                                        <ArrowRight className="w-3 h-3" />
                                    </div>
                                </div>
                            </CardItem>
                        </div>
                    </CardItem>
                </CardBody>
            </CardContainer>
        </motion.div>
    );
};
