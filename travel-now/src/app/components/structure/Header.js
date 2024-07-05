import Link from 'next/link';
import Container from '@/structure/Container';

export default function Header() {
	return (
		<header className='p-6'>
			<Container>
				<Link
					href='/'
					className='text-teal-500 font-semibold text-lg md:text-2xl'
				>
					Travel Now
				</Link>
			</Container>
		</header>
	);
}
