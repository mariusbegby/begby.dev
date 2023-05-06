import './globals.css';
import { Inter } from 'next/font/google';
import { Mulish } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal'],
    variable: '--font-inter'
});

const mulish = Mulish({
    subsets: ['latin'],
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    variable: '--font-mulish'
});

export const metadata = {
    title: 'begby.dev',
    description: 'Marius Begby personal portfolio website'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${mulish.variable}`}>
                {children}
            </body>
        </html>
    );
}
