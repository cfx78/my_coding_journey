'use client';
import { get } from 'http';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [content, setContent] = useState('');
	const [technologies, setTechnologies] = useState(['NEXT']);
	const [stack, setStack] = useState('');
	const [project, setProject] = useState('');
	const [category, setCategory] = useState('');
	const [image, setImage] = useState('');

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		const blog = {
			title,
			description,
			content,
			technologies,
			stack,
			project,
			category,
			image,
		};

		console.log(blog);

		fetch('http://localhost:3000/api/submitForm', {
			method: 'POST',

			body: JSON.stringify(blog),
		}).then((res) => console.log(res));
	};

	return (
		<div className='flex-col'>
			<div>
				<h1 className='text-4xl text-center'>Blogs</h1>
			</div>

			<div className=' grid place-content-center gap-10 '>
				<h1 className='text-4xl text-center'>Create a blog</h1>{' '}
				<form className='space-y-8' onSubmit={handleSubmit}>
					<div>
						<label htmlFor='title'>Title</label>
						<br />
						<input
							type='text'
							name='title'
							id='title'
							className='form-input'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor='description'>
							Description
							<br />
							<textarea
								name='description'
								id='description'
								className='form-textarea'
								rows={10}
								cols={50}
								value={description}
								onChange={(e) => setDescription(e.target.value)}
							/>
						</label>
					</div>
					<div>
						<label htmlFor='content'>
							Content
							<br />
							<textarea
								name='content'
								id='content'
								className='form-textarea'
								rows={10}
								cols={50}
								value={content}
								onChange={(e) => setContent(e.target.value)}
							/>
						</label>
					</div>
					<div>
						<select
							name='technologies'
							id='technologies'
							multiple
							value={technologies}
							onChange={(e) => {
								const options = [...e.target.selectedOptions];
								const values = options.map(
									(option) => option.value,
								);
								setTechnologies(values);
							}}>
							<option value='NEXT'>Next</option>
							<option value='PRISMA'>Prisma</option>
							<option value='MONGODB'>Mongodb</option>
							<option value='REACT'>React</option>
							<option value='TYPESCRIPT'>Typescript</option>
							<option value='TAILWIND'>Tailwind</option>
						</select>
					</div>
					<div>
						<label htmlFor='stack'>
							Stack
							<br />
							<select
								name='stack'
								id='stack'
								className='form-select'
								value={stack}
								onChange={(e) => setStack(e.target.value)}>
								<option value='FRONTEND'>Frontend</option>
								<option value='BACKEND'>Backend</option>
								<option value='FULLSTACK'>Fullstack</option>
							</select>
						</label>
					</div>
					<div>
						<label htmlFor='project'>
							Project
							<br />
							<select
								name='project'
								id='project'
								className='form-select'
								value={project}
								onChange={(e) => setProject(e.target.value)}>
								<option value='BUGTRACKER'>Bugtracker</option>
								<option value='BLOG'>Blog</option>
								<option value='ECOMMERCE'>E-commerce</option>
								<option value='SOCIALMEDIA'>
									Social Media
								</option>
								<option value='PORTFOLIO'>Portfolio</option>
							</select>
						</label>
					</div>
					<div>
						<label htmlFor='category'>
							Category
							<br />
							<select
								name='category'
								id='category'
								className='form-select'
								value={category}
								onChange={(e) => setCategory(e.target.value)}>
								<option value='PERSONAL'>Personal</option>
								<option value='PROJECT'>Project</option>
							</select>
						</label>
					</div>
					<div>
						<label htmlFor='image'>
							Image
							<br />
							<input
								type='text'
								name='image'
								id='image'
								className='form-input'
								onChange={(e) => setImage(e.target.value)}
								value={image}
							/>
						</label>
					</div>
					<br />
					<button className='rounded-md border-4'>Make blog</button>
				</form>
				<p>title: {title}</p>
				<p>description: {description}</p>
				<p>content: {content}</p>
				<p>technologies: {technologies.join(', ')}</p>
				<p>stack: {stack}</p>
				<p>project: {project}</p>
				<p>category: {category}</p>
				<Image
					src={image}
					alt='test image'
					width={500}
					height={500}
					className='pb-24'
				/>
			</div>
		</div>
	);
}
