import React from 'react';

export const Line = () => {
    return (
        <div className="w-[1px] h-[360%] bg-violet-500 absolute top-[300px] left-[250px] z-10  ">
            <div className="absolute w-2 h-2 bg-white  top-0 -left-[3.5px] rounded-full" />
            <div className="absolute top-[350px] -left-[5px] w-3 h-5 rounded-full bg-white" />
            <div className="absolute w-2 h-2 bg-white  top-[700px] -left-[3.5px] rounded-full" />
            <div className="absolute top-[1000px] -left-[5px] w-3 h-5 rounded-full bg-white" />
            <div className="absolute w-2 h-2 bg-white  top-[1700px] -left-[3.5px] rounded-full" />
            <div className="absolute top-[2000px] -left-[5px] w-3 h-5 rounded-full bg-white" />
            <div className="absolute w-2 h-2 bg-white  bottom-0 -left-[3.5px] rounded-full" />
            <div className="absolute bottom-[350px] -left-[5px] w-3 h-5 rounded-full bg-white" />
        </div>
    );
};
