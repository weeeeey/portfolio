import { Antic_Slab } from 'next/font/google';
import React, { forwardRef } from 'react';

const font = Antic_Slab({
    weight: '400',
    subsets: ['latin'],
});

export const AboutBody = forwardRef((props, ref: React.Ref<HTMLDivElement>) => {
    return (
        <div
            ref={ref}
            style={{ backgroundColor: 'rgb(26, 21, 39)' }}
            className="snap-start h-full pl-72 py-10 space-y-4"
        >
            <div className="text-slate-400">About {`/>`}</div>
            <div
                className={`text-green-400 text-lg ${font.className} cursor-pointer `}
            >
                <div className="hover:bg-slate-800">
                    <span className="text-violet-500 ">class</span> Youngjin We{' '}
                    <span className="text-white">{`{`}</span>
                </div>
                <div className="indent-10 ">
                    <div className="hover:bg-slate-800">
                        <span className="text-violet-500">constructor </span>
                        <span className="text-white">( )</span>{' '}
                        <span className="text-white">{`{`}</span>
                    </div>
                    <div className="indent-20 hover:bg-slate-800">
                        <span className="text-red-500">this</span>.name ={' '}
                        {`'Youngjin We'`}
                    </div>
                    <div className="indent-20 hover:bg-slate-800">
                        <span className="text-red-500">this</span>.birthDay ={' '}
                        {`'1993-02-23'`}
                    </div>
                    <div className="indent-20 hover:bg-slate-800">
                        <span className="text-red-500">this</span>.email ={' '}
                        {`'qser155@naver.com'`}
                    </div>
                    <div className="text-white hover:bg-slate-800">{`}`}</div>
                </div>
                <div className="indent-10">
                    <div className="hover:bg-slate-800">
                        <span className="text-yellow-400">certificate </span>
                        <span className="text-white">( )</span>{' '}
                        <span className="text-white">{`{`}</span>
                    </div>
                    <div className="indent-20 hover:bg-slate-800">
                        <span className="text-violet-500 ">return</span>{' '}
                        <span className="text-white">{`[`}</span>
                    </div>
                    <div className="indent-24 hover:bg-slate-800">
                        <span className="text-white">{`{`}</span>
                        {`'2020-06-24': '정보처리기사 /한국산업인력공단'`}
                        <span className="text-white">{`}`}</span>
                    </div>
                    <div className="indent-24 hover:bg-slate-800">
                        <span className="text-white">{`{`}</span>
                        {`'2022-06-26': 'SQLD /한국데이터산업진흥원'`}
                        <span className="text-white">{`}`}</span>
                    </div>
                    <div className="indent-20 text-white hover:bg-slate-800">{`]`}</div>
                    <div className="text-white hover:bg-slate-800">{`}`}</div>
                </div>
                <div className="indent-10">
                    <div className="hover:bg-slate-800">
                        <span className="text-yellow-400">education </span>
                        <span className="text-white">( )</span>{' '}
                        <span className="text-white">{`{`}</span>
                    </div>
                    <div className="indent-20 hover:bg-slate-800">
                        <span className="text-violet-500">return</span>{' '}
                        <span className="text-white">{`[`}</span>
                    </div>
                    <div className="indent-24 hover:bg-slate-800">
                        <span className="text-white">{`{`}</span>
                        {`'2013-2022': '연세대학교 미래컴퍼스 /컴퓨터공학과'`}
                        <span className="text-white">{'}'}</span>
                    </div>
                    <div className=" hover:bg-slate-800 indent-20 text-white">{`]`}</div>
                    <div className=" hover:bg-slate-800 indent-10 text-white">{`}`}</div>
                </div>
                <div className=" indent-10">
                    <div className="hover:bg-slate-800 ">
                        <span className="text-yellow-400">skills </span>
                        <span className="text-white">( )</span>{' '}
                        <span className="text-white">{`{`}</span>
                    </div>
                    <div className=" hover:bg-slate-800 indent-20">
                        <span className="text-violet-500">return</span>{' '}
                        <span className="text-white">{`[`}</span>
                    </div>
                    <div className="pl-20 pr-52 hover:bg-slate-800">
                        {`'HTML/CSS'`} , {`' Javascript'`} , {`' Typescript'`},
                        {`'React'`} , {`' Next.js'`} , {`' Tailwind'`} ,{' '}
                        {`' Prisma'`} , {`'MongoDB'`} , {`' ConvexDB'`} ,{' '}
                        {`' Webpack/vite'`},{`'React Query'`} , {`' Zustand'`} ,{' '}
                        {`' npm/pnpm/yarn'`} , {`' CSR/SSR'`} , {`' SPA/MPA'`} ,{' '}
                        {`' AWS'`}
                        {`'Git'`} , {`' Notion'`} , {`' Slack'`}
                    </div>
                    <div className="indent-20 text-white hover:bg-slate-800">{`]`}</div>
                    <div className="text-white hover:bg-slate-800">{`}`}</div>
                </div>
                <div className="text-white hover:bg-slate-800">{`}`}</div>
            </div>
        </div>
    );
});

AboutBody.displayName = 'AboutBody';
