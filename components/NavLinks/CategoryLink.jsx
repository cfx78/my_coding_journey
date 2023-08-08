import Link from 'next/link';
import { categories } from '@/lib/arrays';

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const CategoryLink = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>Blogs By Category</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Categories</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{categories.map((category) => {
					return (
						<Link
							href={`/tags/categories/${category}`}
							key={category}>
							<DropdownMenuItem>{category}</DropdownMenuItem>
						</Link>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default CategoryLink;
