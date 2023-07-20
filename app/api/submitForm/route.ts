import { prisma } from '@/prisma';

export async function POST(request: Request) {
	const body = await request.json();
	const {
		title,
		description,
		content,
		technologies,
		stack,
		project,
		category,
		image,
	} = body;

	const imageData = {
		set: {
			url: image,
		},
	};

	const main = async () => {
		await prisma.post.create({
			data: {
				title,
				description,
				content,
				technologies,
				stack,
				project,
				category,
				image: imageData,
			},
		});
	};

	await main()
		.catch((err) => {
			throw err;
		})
		.finally(async () => {
			await prisma.$disconnect();
		});
}
