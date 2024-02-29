import React, { Suspense } from 'react';
import { ClipLoader } from 'react-spinners';

export const Video = ({ src }: { src: string }) => {
    return (
        <video
            width="100%"
            height="100%"
            controls
            preload="none"
            autoPlay
            muted
            playsInline
            className="border-none"
        >
            <source src={`/video/${src}.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export const Loading = () => {
    return (
        <div className="w-full h-full">
            <ClipLoader size={200} />
        </div>
    );
};

export const MyVideo = ({ src }: { src: string }) => {
    return (
        <div className="pr-5 border-none">
            <Suspense fallback={<Loading />}>
                <Video src={src} />
            </Suspense>
        </div>
    );
};
