import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/structure/Header';
import Footer from '@/structure/Footer';

const poppins = Poppins({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
});

export const metadata = {
	title: 'Travel Now',
	description: 'Find last minute flight options.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
