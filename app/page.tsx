import Image from 'next/image';

export default function Home() {
	return (
		<div className='w-screen h-screen grid place-content-center '>
			{' '}
			<form action='' method='post'>
				<div>
					<label htmlFor='title'>Title</label>
					<br />
					<input
						type='text'
						name='title'
						id='title'
						className='form-input'
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
						/>
					</label>
				</div>
				<div>
					<select
						name='technologies'
						id='technologies'
						className='form-multiselect'
						multiple>
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
						<select name='stack' id='stack' className='form-select'>
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
							className='form-select'>
							<option value='BUGTRACKER'>Bugtracker</option>
							<option value='BLOG'>Blog</option>
							<option value='ECOMMERCE'>E-commerce</option>
							<option value='SOCIALMEDIA'>Social Media</option>
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
							className='form-select'>
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
						/>
					</label>
				</div>
			</form>{' '}
		</div>
	);
}
