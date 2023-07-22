import { prisma } from '@/prisma';
import Image from 'next/image';

const getBlogs = async () => {
	const blogs = await prisma.post.findMany({});
	return blogs;
};
const page = async () => {
	const blogs = await getBlogs();
	console.log(blogs);
	return (
		<div>
			Enter
			{blogs.map((blog) => (
				<div key={blog.id}>
					<p>{blog.title}</p>
					<p>{blog.content}</p>
					<p>{blog.description}</p>
					<p>{blog.createdAt.getDate()}</p>
					<p>{blog.updatedAt.getDate()}</p>
					<p>{blog.technologies.join(', ')}</p>
					<p>{blog.stack}</p>
					<p>{blog.project}</p>
					<p>{blog.category}</p>
					<Image
						src={`${blog.image?.url}`}
						alt='test image'
						width={500}
						height={500}
					/>
				</div>
			))}
		</div>
	);
};

export default page;
