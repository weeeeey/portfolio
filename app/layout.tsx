import type { Metadata } from 'next';
import './globals.css';
import { NavbarBody } from '@/components/navbar/navbar-body';

import { Oswald } from 'next/font/google';
import { Line } from '@/components/line';
import { CardModal } from '@/components/card-modal';

const font = Oswald({
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: '<Zerojin/> Portfolio',
    description: 'youngjin we portfolio',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={font.className}>
                <CardModal />
                <NavbarBody />
                <Line />
                <main className="h-full w-full">{children}</main>
            </body>
        </html>
    );
}
