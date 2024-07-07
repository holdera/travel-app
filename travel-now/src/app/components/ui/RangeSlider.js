export default function RangeSlider({ label, id, ...props }) {
	return (
		<div className='flex flex-col mb-3'>
			<label className='font-medium block mb-2.5' htmlFor={id}>
				{label}
			</label>
			<input
				className='appearance-none w-full h-1 bg-teal-500 outline-none rounded-3xl time-range-slider'
				{...props}
			/>
		</div>
	);
}
