import { prisma } from '@/prisma';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Link from 'next/link';
type Params = {
	params: {
		id: string;
	};
};

const blog = async ({ params }: Params) => {
	const blog = await prisma.post.findUnique({ where: { id: params.id } });

	return (
		<div className='pt-10'>
			<p className='text-4xl text-center pb-4'>{blog?.title}</p>
			<AspectRatio ratio={16 / 9}>
				<Image
					width={500}
					height={500}
					src={`${blog?.image?.url}`}
					alt='blog image'
					className='rounded-md object-cover'
				/>
			</AspectRatio>
			<div className='py-10 text-2xl px-5'>
				<p>{blog?.content}</p>
			</div>
			<div>
				<p className='font-bold'>Technologies:</p>{' '}
				<p> {blog?.technologies.join(', ')}</p>
				<p className='font-bold'>Stack:</p>
				<p>{blog?.stack}</p>
				<p className='font-bold'>Project:</p>
				<p>{blog?.project}</p>
				<p className='font-bold'>Category:</p>
				<p>{blog?.category}</p>
			</div>
			<div className='w-full text-center pt-6'>
				<Link href='/'>Back Home</Link>
			</div>
		</div>
	);
};

export default blog;
