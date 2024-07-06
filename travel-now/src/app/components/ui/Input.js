export default function Input({ label, ...props }) {
	return (
		<>
			{props.type === 'checkbox' || props.type === 'radio' ? (
				<div className='flex mb-3 items-center'>
					<input
						className='border border-teal-500 p-2.5 rounded-lg'
						{...props}
					/>
					<label
						className='font-semibold block pl-2'
						htmlFor={label.toLowerCase().replace(' ', '')}
					>
						{label}
					</label>
				</div>
			) : (
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
			)}
		</>
	);
}
