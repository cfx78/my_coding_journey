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

import Link from 'next/link';

const getFirstBlog = async () => {
	const blog = await prisma.post.findUnique({
		where: { id: '64d29ab9dc08e5940f386f61' },
	});

	return blog;
};

const getBlogs = async () => {
	const blogs = await prisma.post.findMany({
		orderBy: { createdAt: 'desc' },
		where: {
			id: {
				not: '64d29ab9dc08e5940f386f61',
			},
		},
	});
	return blogs;
};
const Home = async () => {
	const blogs = await getBlogs();
	const firstBlog = await getFirstBlog();

	return (
		<div>
			<div className='py-14 flex justify-center items-center'>
				<Card className='border'>
					<CardHeader className='text-center'>
						<CardTitle className='text-4xl md:text-5xl'>
							{firstBlog?.title}
						</CardTitle>
						<CardDescription className='text-xl md:text-3xl'>
							{firstBlog?.createdAt.toDateString()}
						</CardDescription>
					</CardHeader>
					<CardContent className='text-sm flex flex-col  items-center align-center'>
						<div className='w-5/6 pb-6  h-full mx-auto '>
							<Image
								width={500}
								height={500}
								src={`${firstBlog?.image?.url}`}
								alt='blog image'
								className='rounded-md object-cover mx-auto'
							/>
						</div>
						<div className='text-center max-w-lg h-full md:text-lg'>
							<p>{firstBlog?.description}</p>
						</div>
					</CardContent>
					<CardFooter>
						<Link
							className='text-center w-full'
							href={`/${firstBlog?.id}`}>
							Read More
						</Link>
					</CardFooter>
				</Card>
			</div>

			{blogs.map((blog) => (
				<div
					key={blog.id}
					className='py-14 flex justify-center items-center'>
					<Card className='border'>
						<CardHeader className='text-center'>
							<CardTitle className='text-4xl md:text-5xl max-w-lg'>
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
									className='rounded-md object-cover max-h-80 mx-auto'
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

export default Home;
