import Image from 'next/image';

export default function Home() {
	return (
		<div className='w-screen h-screen grid '>
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
						/>
					</label>
				</div>
			</form>{' '}
		</div>
	);
}
