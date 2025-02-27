export default function Button({ addedClasses, children, ...props }) {
	return (
		<button
			className={`bg-teal-500 font-semibold group py-2.5 px-4 rounded-lg text-white transition-all hover:bg-teal-700 focus:bg-teal-700 ${addedClasses}`}
			{...props}
		>
			{children}
		</button>
	);
}
