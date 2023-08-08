import Link from 'next/link';
import { ModeToggle } from './ui/dark-toggle';
import CategoryLink from './NavLinks/CategoryLink';
import ProjectLink from './NavLinks/ProjectLink';
import StackLink from './NavLinks/StackLink';
import TechnologyLink from './NavLinks/TechnologyLink';

const MainNavbar = () => {
	return (
		<nav
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				width: '100%',
			}}>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					width: '90%',
					paddingLeft: '3rem',
				}}>
				<Link href='/'>Home</Link>
				<CategoryLink />
				<ProjectLink />
				<StackLink />
				<TechnologyLink />
			</div>
			<div
				style={{
					paddingRight: '.5rem',
				}}>
				<ModeToggle />
			</div>
		</nav>
	);
};

export default MainNavbar;
