import { prisma } from '@/prisma';
import Image from 'next/image';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Link from 'next/link';
import { Category } from '@prisma/client';

type Params = {
	params: {
		category: Category;
	};
};

export async function generateStaticParams() {
	const blogs = await [Category.PERSONAL, Category.PROJECT];

	return blogs.map((category) => {
		return {
			category: category,
		};
	});
}

const CategoryPage = async ({ params }: Params) => {
	const blogs = await prisma.post.findMany({
		where: { category: params.category },
		orderBy: { createdAt: 'desc' },
	});

	return (
		<div>
			<h2 className='text-center pt-8 text-3xl'>{`"${params.category}"`}</h2>
			{blogs.map((blog) => (
				<div
					key={blog.id}
					className='py-14 flex justify-center items-center'>
					<Card className='border'>
						<CardHeader className='text-center'>
							<CardTitle className='text-4xl md:text-5xl'>
								{blog.title}
							</CardTitle>
							<CardDescription className='text-xl md:text-3xl'>
								{blog.createdAt.toDateString()}
							</CardDescription>
						</CardHeader>
						<CardContent className='text-sm flex flex-col  items-center align-center'>
							<div className='w-5/6 pb-6  h-full mx-auto '>
								<Image
									width={500}
									height={500}
									src={`${blog.image?.url}`}
									alt='blog image'
									className='rounded-md object-cover mx-auto'
								/>
							</div>
							<div className='text-center max-w-lg h-full md:text-lg'>
								<p>{blog.description}</p>
							</div>
						</CardContent>
						<CardFooter>
							<Link
								className='text-center w-full'
								href={`/${blog.id}`}>
								Read More
							</Link>
						</CardFooter>
					</Card>
				</div>
			))}
		</div>
	);
};

export default CategoryPage;
