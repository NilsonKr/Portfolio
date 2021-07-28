import Image from 'next/image';

const ContactFigure = ({ image }: { image: string }) => {
	return (
		<div className='contact__social'>
			<Image
				width='500'
				height='570'
				src={image}
				blurDataURL={image}
				placeholder='blur'
				alt='Social Media'
				className='contact--figure'
			/>
			<div className='contact--socialMedia '>
				<a
					target='_blank'
					href='https://co.linkedin.com/'
					className='glass--wrapper contact--linkedin'
				>
					<img
						className='contact--icon '
						src='/images/linkedin.svg'
						alt='Linkedin Profile'
						title='Linkedin Profile'
					/>
				</a>
				<a
					target='_blank'
					href='https://github.com/NilsonKr'
					className='glass--wrapper contact--github'
				>
					<img
						src='/images/github.svg'
						alt='Github Profile'
						title='Github Profile'
						className='contact--icon '
					/>
				</a>
				<a
					href='https://twitter.com/Nilson_Kr'
					target='_blank'
					className='glass--wrapper contact--twitter'
				>
					<img
						src='/images/twitter.svg'
						alt='Twitter Account'
						title='Twitter Account'
						className='contact--icon '
					/>
				</a>
			</div>
		</div>
	);
};

export default ContactFigure;
