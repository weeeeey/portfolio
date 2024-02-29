import { Mail } from 'lucide-react';
import Image from 'next/image';
import React, { forwardRef } from 'react';
import toast from 'react-hot-toast';
import { Hint } from './hint';

export const ContactBody = forwardRef(
    (props, ref: React.Ref<HTMLDivElement>) => {
        const copyEmail = () => {
            navigator.clipboard.writeText('qser155@naver.com').then(() => {
                toast.success('Copied email to clipboard');
            });
        };

        return (
            <div
                ref={ref}
                className="snap-start h-full  pl-72 flex flex-col justify-between py-10 text-slate-400"
                style={{ backgroundColor: 'rgb(26, 21, 39)' }}
            >
                <div>Contact {`/>`}</div>
                <div className="flex flex-col justify-center items-start text-violet-600 text-xl space-y-2">
                    <Hint label="github.com/weeeeey">
                        <a
                            href="https://github.com/weeeeey"
                            target="_blank"
                            className="flex justify-center items-center space-x-2 group"
                        >
                            <Image
                                alt="git"
                                src="/git.png"
                                width={30}
                                height={30}
                                className="bg-violet-500 rounded-full "
                            />
                            <div className="group-hover:underline underline-offset-4">
                                github.com/Zerojin
                            </div>
                        </a>
                    </Hint>
                    <Hint label="weeeeey.tistory.com">
                        <a
                            href="https://weeeeey.tistory.com/"
                            target="_blank"
                            className="flex justify-center items-center space-x-2 group"
                        >
                            <Image
                                alt="blog"
                                src="/tis.svg"
                                width={30}
                                height={30}
                                className=" rounded-full "
                            />

                            <div className="group-hover:underline underline-offset-4">
                                tistory/Zerojin
                            </div>
                        </a>
                    </Hint>
                    <Hint label="notion.so/weeeeey">
                        <a
                            target="_blank"
                            className="flex justify-center items-center space-x-2 group"
                            href="https://www.notion.so/weeeeey/34b38b12a57f42868f9ba03c4ac3defd"
                        >
                            <Image
                                alt="notion"
                                src="/notion.svg"
                                width={30}
                                height={30}
                                className="bg-violet-500 rounded-full"
                            />
                            <div className="group-hover:underline underline-offset-4">
                                notion/Zerojin
                            </div>
                        </a>
                    </Hint>

                    <Hint label="Copy email">
                        <div
                            className="flex justify-center items-center space-x-2 group "
                            onClick={copyEmail}
                        >
                            <Mail className="w-7 h-7 bg-violet-500 rounded-full text-black p-1" />
                            <div className="group-hover:underline underline-offset-4 cursor-pointer">
                                qser155@naver.com
                            </div>
                        </div>
                    </Hint>
                </div>
                <div>
                    <div>Made by Zerojin. 2024.</div>{' '}
                    <div>Contact me. qser155@naver.com</div>
                </div>
            </div>
        );
    }
);

ContactBody.displayName = 'ContactBody';
