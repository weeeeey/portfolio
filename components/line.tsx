import React from 'react';

export const Line = () => {
    return (
        <div className="w-[1px] h-[360%] bg-violet-500 absolute top-[300px] left-[250px]  ">
            <div className="absolute w-2 h-2 bg-white  top-0 -left-[3.5px] rounded-full" />
            <div className="absolute w-2 h-2 bg-white  top-[700px] -left-[3.5px] rounded-full" />
            <div className="absolute w-2 h-2 bg-white  top-[1400px] -left-[3.5px] rounded-full" />
            <div className="absolute w-2 h-2 bg-white  bottom-0 -left-[3.5px] rounded-full" />
        </div>
    );
};
