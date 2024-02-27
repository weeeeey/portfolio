'use client';
import Link from 'next/link';

interface NavItemProps {
    selectedHash: string;
    text: string;
}

export const NavItem = ({ text, selectedHash }: NavItemProps) => {
    return (
        <Link
            href={`/#${text}`}
            scroll={false}
            className="text-xl font-semibold text-slate-400 flex items-center space-x-1 "
            style={{ transition: 'opacity 2s' }}
        >
            <span
                className={` duration-500 ${
                    selectedHash === text
                        ? 'text-white'
                        : 'hover:text-slate-200'
                }`}
            >
                {text}
            </span>
            <span>{`/>`}</span>
        </Link>
    );
};
