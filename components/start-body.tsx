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
                    <div className="animate-block-hidden-small w-full h-full " />

                    <div className="animate-block-reveal-text">
                        Start /{`>`}
                    </div>
                </div>
                <div>
                    Hi, my name is{' '}
                    <span className="text-violet-500">Youngjin We</span>
                </div>
                <div className="text-white overflow-hidden relative">
                    <div className="animate-block-hidden bg-violet-500 w-full h-full" />
                    <div className="animate-block-reveal-text-main ">
                        <span>I am a</span>
                        <span className="text-violet-500">
                            {' '}
                            Frontend developer
                        </span>
                    </div>
                </div>
                <div className="flex space-x-2 ">
                    <span>
                        I <span className="italic">design </span> and develop{' '}
                    </span>
                    <span className="text-violet-500">
                        <Typewriter
                            options={{
                                strings: [
                                    'Web',
                                    'ux/ui',
                                    'HTML/CSS',
                                    'Javascript',
                                    'React',
                                    'Next.js',
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 20,
                                delay: 50,
                            }}
                        />
                    </span>
                </div>
                <div className="text-sm pt-5 text-slate-400 relative overflow-hidden ">
                    <div className="animate-block-hidden-small w-full h-full " />
                    <div className="animate-block-reveal-text">
                        I am a software engineer based in Seoul, South Korea.
                    </div>
                </div>
            </div>
        </div>
    );
});

StartBody.displayName = 'StartBody';
