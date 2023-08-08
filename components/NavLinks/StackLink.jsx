import Link from 'next/link';
import { stacks } from '@/lib/arrays';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const StackLink = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>Blogs By Stack</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Stacks</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{stacks.map((stack) => {
					return (
						<Link href={`/tags/stacks/${stack}`} key={stack}>
							<DropdownMenuItem>{stack}</DropdownMenuItem>
						</Link>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default StackLink;
