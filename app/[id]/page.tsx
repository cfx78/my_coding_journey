import { prisma } from '@/prisma';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
type Params = {
	params: {
		id: string;
	};
};

const blog = async ({ params }: Params) => {
	const blog = await prisma.post.findUnique({ where: { id: params.id } });

	return (
		<div>
			<p>{blog?.title}</p>
			<p>{blog?.description}</p>
			<p>{blog?.content}</p>
			<p>{blog?.technologies}</p>
			<p>{blog?.stack}</p>
			<p>{blog?.project}</p>
			<p>{blog?.category}</p>
			<AspectRatio ratio={16 / 9}>
				<Image
					width={500}
					height={500}
					src={`${blog?.image?.url}`}
					alt='blog image'
					className='rounded-md object-cover'
				/>
			</AspectRatio>
		</div>
	);
};

export default blog;
