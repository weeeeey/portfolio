'use client';
import { useModalStore } from '@/lib/modal-store';
import { Dialog, DialogContent, DialogFooter, DialogHeader } from './ui/dialog';
import { useEffect, useState } from 'react';
import { CardType, cards } from '@/utils/data';
import Image from 'next/image';
import { Home } from 'lucide-react';
import { cn } from '@/lib/utils';

export const CardModal = () => {
    const { isOpen, onClose, initialValue } = useModalStore();
    const [card, setcard] = useState<CardType>();
    useEffect(() => {
        setcard(cards[initialValue]);
    }, [initialValue]);

    if (!card) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent
                style={{ backgroundColor: 'rgb(26, 21, 39)' }}
                className="max-w-4xl  border-none"
            >
                <div className="grid grid-cols-2">
                    <iframe
                        src={card.videoUrl}
                        allowFullScreen
                        width="300"
                        height="300"
                    />
                    <div className="space-y-4">
                        <div className="text-white text-3xl">{card.title}</div>
                        <p className="text-slate-400">{card.description}</p>
                        <div className="grid grid-cols-3">
                            <div>
                                <h2 className="text-white text-2xl">Skills</h2>
                                <ul className="text-slate-400">
                                    {card.skills.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-span-2">
                                <h2 className="text-white text-2xl">
                                    Features
                                </h2>
                                <div className="text-slate-400">
                                    {card.features.map((feature, index) => (
                                        <div key={index}>{feature}</div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <div className="flex justify-start items-center space-x-2">
                        <a
                            href={card.gitUrl}
                            target="_blank"
                            className=" bg-violet-900 hover:bg-violet-700 rounded-lg px-4 py-1"
                        >
                            <Image
                                alt="git"
                                src="/git.png"
                                width={30}
                                height={30}
                                className="rounded-full bg-violet-500 "
                            />
                        </a>
                        <a
                            href={card.siteUrl}
                            target="_blank"
                            className=" bg-violet-900 hover:bg-violet-700 text-black/80 rounded-lg px-4 py-1"
                        >
                            <Home className="w-7 h-7 bg-violet-600 rounded-full p-1" />
                        </a>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
