import './globals.css';
import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/ui/dark-toggle';
import MobileNavbar from '@/components/MobileNavbar';
import MainNavbar from '@/components/MainNavbar';

const space_mono = Space_Mono({
	subsets: ['latin'],
	weight: ['400', '700'],
	variable: '--font-spcmno',
});

export const metadata: Metadata = {
	title: 'My Coding Journey',
	description:
		"Welcome to My Coding Journey, where you'll find a treasure trove of personally crafted coding blogs. As a passionate coder, I share a collection of insightful articles, tutorials, and guides that delve into various programming languages, development techniques, and industry trends. Whether you're taking your first steps into coding or you're a seasoned developer like me, these blogs provide valuable insights to expand your knowledge and keep you in the loop with the ever-evolving coding landscape. Immerse yourself in my blog posts now and elevate your coding expertise. Embark on the journey by visiting https://my-coding-journey-mu.vercel.app.",
};

export const revalidate = 86400; // 24 hours

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${space_mono.variable}`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem>
					<div className='hidden sm:flex w-full'>
						<MainNavbar />
					</div>
					<div className='flex sm:hidden w-full'>
						<MobileNavbar />
					</div>

					<h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl pt-6 text-center underline pb-4 '>
						My Coding Journey{' '}
					</h1>
					<div className=' sm:hidden w-full flex justify-center items-center'>
						<ModeToggle />
					</div>

					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
