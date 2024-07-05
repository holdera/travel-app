export default function Button({ children, ...props }) {
	return (
		<button
			className='bg-teal-500 font-semibold py-2.5 px-4 rounded-lg text-white'
			{...props}
		>
			{children}
		</button>
	);
}
