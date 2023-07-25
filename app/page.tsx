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

const getBlogs = async () => {
	const blogs = await prisma.post.findMany({});
	return blogs;
};
const Home = async () => {
	const blogs = await getBlogs();
	console.log(blogs);
	return (
		<div>
			<h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight md:text-5xl pt-6 text-center underline '>
				My Coding Journey{' '}
			</h1>

			{blogs.map((blog) => (
				<div key={blog.id} className='py-14'>
					<Card className='border-4 border-stone-700'>
						<CardHeader>
							<CardTitle className='text-4xl md:text-7xl'>
								{blog.title}
							</CardTitle>
							<CardDescription className='text-xl md:text-3xl'>
								{blog.description}
							</CardDescription>
						</CardHeader>
						<CardContent className='text-sm flex flex-col items-center align-center'>
							<div className='w-5/6 pb-4 md:pb-0 h-full mx-auto md:pl-20'>
								<AspectRatio ratio={16 / 9}>
									<Image
										width={500}
										height={500}
										src={`${blog.image?.url}`}
										alt='blog image'
										className='rounded-md object-cover'
									/>
								</AspectRatio>
							</div>
							<div className='text-center max-w-lg h-full md:text-2xl'>
								<p>
									Publish Date:{' '}
									{blog.createdAt.toDateString()}
								</p>
								<p>
									Technologies: {blog.technologies.join(', ')}
								</p>
								<p>Stack: {blog.stack}</p>
								<p>Project: {blog.project}</p>
								<p>Category: {blog.category}</p>
							</div>
						</CardContent>
						<CardFooter>
							<Link href={`/${blog.id}`}>Read More</Link>
						</CardFooter>
					</Card>
				</div>
			))}
		</div>
	);
};

export default Home;
