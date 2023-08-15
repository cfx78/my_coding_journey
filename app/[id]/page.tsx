import { prisma } from '@/prisma';
import Image from 'next/image';
import Link from 'next/link';
import { badgeVariants } from '@/components/ui/badge';
import { MDXRemote } from 'next-mdx-remote/rsc';

type Params = {
	params: {
		id: string;
	};
};

export async function generateStaticParams() {
	const blogs = await prisma.post.findMany({
		select: {
			id: true,
		},
	});

	return blogs.map((blog) => {
		return {
			id: blog.id,
		};
	});
}

const blog = async ({ params }: Params) => {
	const blog = await prisma.post.findUnique({ where: { id: params.id } });

	return (
		<div className='pt-10 mx-auto max-w-3xl'>
			{blog && (
				<>
					<p className='text-4xl text-center pb-4'>{blog?.title}</p>
					<div className='flex items-center justify-center'>
						<Image
							width={500}
							height={500}
							src={`${blog.image?.url}`}
							alt='blog image'
							className='rounded-md object-fill '
						/>
					</div>
					<article className='py-10 text-2xl px-5 leading-loose tracking-wide prose prose-invert'>
						<MDXRemote source={blog.content} />
					</article>
					<div>
						<p className='font-bold '>Technologies:</p>{' '}
						{blog.technologies?.map((tech) => {
							return (
								<Link
									key={tech}
									href={`tags/technologies/${tech}`}
									className={badgeVariants({
										variant: 'outline',
									})}>
									{tech}
								</Link>
							);
						})}
						<p className='font-bold'>Stack:</p>
						<Link
							href={`tags/stacks/${blog.stack}`}
							className={badgeVariants({ variant: 'outline' })}>
							{blog.stack}
						</Link>
						<p className='font-bold'>Project:</p>
						<Link
							href={`tags/projects/${blog.project}`}
							className={badgeVariants({ variant: 'outline' })}>
							{blog.project}
						</Link>
						<p className='font-bold'>Category:</p>
						<Link
							href={`tags/categories/${blog.category}`}
							className={badgeVariants({ variant: 'outline' })}>
							{blog.category}
						</Link>
					</div>
					<div className='w-full text-center pt-6'>
						<Link href='/'>Back Home</Link>
					</div>
				</>
			)}
		</div>
	);
};

export default blog;
