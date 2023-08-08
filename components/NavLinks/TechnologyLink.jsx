import Link from 'next/link';
import { technologies } from '@/lib/arrays';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const TechnologyLink = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>Blogs By Technology</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Technologies</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{technologies.map((tech) => {
					return (
						<Link href={`/tags/technologies/${tech}`} key={tech}>
							<DropdownMenuItem>{tech}</DropdownMenuItem>
						</Link>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default TechnologyLink;
