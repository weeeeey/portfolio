'use client';
import { useModalStore } from '@/lib/modal-store';
import { Dialog, DialogContent, DialogFooter, DialogHeader } from './ui/dialog';
import { useEffect, useState } from 'react';
import { CardType, cards } from '@/utils/data';
import { Github, Home } from 'lucide-react';
import { MyVideo } from './my-Video';

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
                className="max-w-5xl  border-none"
            >
                <div className="grid grid-cols-2">
                    <div className="flex justify-center items-center">
                        <iframe
                            src={card.videoUrl}
                            allowFullScreen
                            width="450"
                            height="400"
                        />
                        {/* <MyVideo src={card.videoUrl!} /> */}
                        {/* < */}
                    </div>
                    <div className="flex flex-col space-y-4">
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
                        <div className="flex justify-start items-center space-x-2">
                            <a
                                href={card.gitUrl}
                                target="_blank"
                                className=" bg-violet-800 hover:bg-violet-900 rounded-lg px-4 py-1"
                            >
                                <Github className="w-6 h-6 text-black/50" />
                            </a>
                            <a
                                href={card.siteUrl}
                                target="_blank"
                                className=" bg-violet-800 hover:bg-violet-900  rounded-lg px-4 py-1"
                            >
                                <Home className="w-6 h-6  text-black/50" />
                            </a>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
