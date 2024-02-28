import { Mail } from 'lucide-react';
import Image from 'next/image';
import React, { forwardRef } from 'react';

export const ContactBody = forwardRef(
    (props, ref: React.Ref<HTMLDivElement>) => {
        return (
            <div
                ref={ref}
                className="snap-start h-full  pl-72 flex flex-col justify-between py-10 text-slate-400"
                style={{ backgroundColor: 'rgb(26, 21, 39)' }}
            >
                <div>Contact {`/>`}</div>
                <div className="flex flex-col justify-center items-start text-violet-600 text-xl space-y-2">
                    <a
                        href="https://github.com/weeeeey"
                        target="_blank"
                        className="flex justify-center items-center space-x-2"
                    >
                        <Image
                            alt="git"
                            src="/git.png"
                            width={30}
                            height={30}
                            className="bg-violet-500 rounded-full "
                        />
                        <div>github.com/Zerojin</div>
                    </a>
                    <a
                        href="https://weeeeey.tistory.com/"
                        target="_blank"
                        className="flex justify-center items-center space-x-2"
                    >
                        <Image
                            alt="blog"
                            src="/tis.svg"
                            width={30}
                            height={30}
                            className=" rounded-full "
                        />

                        <div>tistory/Zerojin</div>
                    </a>
                    <a
                        target="_blank"
                        className="flex justify-center items-center space-x-2"
                        href="https://www.notion.so/weeeeey/34b38b12a57f42868f9ba03c4ac3defd"
                    >
                        <Image
                            alt="notion"
                            src="/notion.svg"
                            width={30}
                            height={30}
                            className="bg-violet-500 rounded-full"
                        />
                        <div>notion/Zerojin</div>
                    </a>

                    <div className="flex justify-center items-center space-x-2  ">
                        <Mail className="w-[28px] h-[28px]" />
                        <div>zerojin@mail</div>
                    </div>
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
