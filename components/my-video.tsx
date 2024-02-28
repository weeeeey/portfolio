import React, { Suspense } from 'react';
import { ClipLoader } from 'react-spinners';

export const Video = ({ src }: { src: string }) => {
    return (
        <video
            width="320"
            height="240"
            controls
            preload="none"
            autoPlay
            muted
            playsInline
        >
            <source src={`@/public/video/${src}.mp4`} type="video/mp4" />
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
        <Suspense fallback={<Loading />}>
            <Video src={src} />
        </Suspense>
    );
};
