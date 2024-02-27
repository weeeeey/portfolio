'use client';
import Typewriter from 'typewriter-effect';
import React, { forwardRef } from 'react';

export const StartBody = forwardRef((props, ref: React.Ref<HTMLDivElement>) => {
    return (
        <div
            ref={ref}
            className="snap-start h-full flex  justify-start items-center text-4xl text-white pl-72"
        >
            <div className="flex flex-col  items-start space-y-4">
                <div className="text-sm pb-5 text-slate-400 relative overflow-hidden ">
                    <div className="animate-block-hidden w-20 h-5" />

                    <div className="animate-block-reveal-text">
                        Start /{`>`}
                    </div>
                </div>
                <div>
                    Hi, my name is{' '}
                    <span className="text-violet-500">Youngjin We</span>
                </div>
                <div className="flex space-x-2 ">
                    <span>
                        I <span className="italic">design </span> and develop{' '}
                    </span>
                    <Typewriter
                        options={{
                            strings: [
                                'Web',
                                'ux/ui',
                                'Frontend',
                                'Backend',
                                'Fullstack',
                            ],
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 20,
                            delay: 50,
                        }}
                    />
                </div>
                <div className="text-sm pt-5 text-slate-400">
                    I am a software engineer based in Seoul, South Korea.
                </div>
            </div>
        </div>
    );
});

StartBody.displayName = 'StartBody';
