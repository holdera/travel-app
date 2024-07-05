export default function Input({ label, ...props }) {
	return (
		<div className='flex flex-col mb-3'>
			<label
				className='font-semibold block'
				htmlFor={label.toLowerCase()}
			>
				{label}
			</label>
			<input
				className='border border-teal-500 p-2.5 rounded-lg'
				{...props}
			/>
		</div>
	);
}
