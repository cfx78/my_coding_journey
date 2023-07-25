import { prisma } from '@/prisma';

export async function GET() {
	const main = async () => {
		const blogs = await prisma.post.findMany({
			where: { title: 'test' },
			orderBy: {
				createdAt: 'desc',
			},
			include: {
				image: true,
			},
		});
		return blogs;
	};

	const blogs = main()
		.catch((err) => {
			throw err;
		})
		.finally(async () => {
			await prisma.$disconnect();
		});
}
