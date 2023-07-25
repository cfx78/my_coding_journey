import './globals.css';
import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';

const space_mono = Space_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-spcmno',
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${space_mono.variable}`}>
				<h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl pt-6 text-center underline '>
					My Coding Journey{' '}
				</h1>
				{children}
			</body>
		</html>
	);
}
