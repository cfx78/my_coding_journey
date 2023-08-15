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
import { projects } from '@/lib/arrays';
import Link from 'next/link';
import { Project } from '@prisma/client';

type Params = {
	params: {
		project: Project;
	};
};

export async function generateStaticParams() {
	const blogs = await projects;

	return blogs.map((project) => {
		return {
			project: project,
		};
	});
}

const ProjectPage = async ({ params }: Params) => {
	const blogs = await prisma.post.findMany({
		where: { project: params.project },
		orderBy: { createdAt: 'desc' },
	});

	return (
		<div>
			<h2 className='text-center pt-8 text-3xl'>{`"${params.project}"`}</h2>
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

export default ProjectPage;
