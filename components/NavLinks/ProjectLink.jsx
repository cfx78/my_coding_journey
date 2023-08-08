import Link from 'next/link';
import { projects } from '@/lib/arrays';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const ProjectLink = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>Blogs By Project</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Projects</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{projects.map((project) => {
					return (
						<Link href={`/tags/projects/${project}`} key={project}>
							<DropdownMenuItem>{project}</DropdownMenuItem>
						</Link>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ProjectLink;
