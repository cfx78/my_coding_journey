'use client';
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import CategoryLink from './NavLinks/CategoryLink';
import ProjectLink from './NavLinks/ProjectLink';
import StackLink from './NavLinks/StackLink';
import TechnologyLink from './NavLinks/TechnologyLink';

const MobileNavbar = () => {
	return (
		<header className='w-full pt-6 text-black flex items-center justify-center'>
			<Sheet>
				<SheetTrigger>
					<HamburgerMenuIcon />
				</SheetTrigger>
				<SheetContent>
					<SheetHeader>
						<SheetTitle>Navigation</SheetTitle>
						<SheetDescription></SheetDescription>
					</SheetHeader>
					<div className='flex flex-col items-center justify-center space-y-28 pt-12'>
						<Link href='/'>Home</Link>
						<CategoryLink />
						<ProjectLink />
						<StackLink />
						<TechnologyLink />
					</div>
				</SheetContent>
			</Sheet>
		</header>
	);
};

export default MobileNavbar;
