import Container from '@/structure/Container';

export default function Footer() {
	const theDate = new Date();
	const year = theDate.getFullYear();
	return (
		<footer className='bg-teal-500 py-6 text-white w-full'>
			<Container>
				<p className='text-center'>{year} &copy; Alannah Holder Inc</p>
			</Container>
		</footer>
	);
}
