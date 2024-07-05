export default function Notifications(props) {
	const toastStyles =
		props.status === 'success'
			? 'bg-teal-800'
			: props.status === 'error'
			? 'bg-red-600 '
			: 'bg-teal-400';

	return (
		<div
			className={`absolute bottom-2 right-auto left-6 p-3 text-white rounded-2xl ${toastStyles}`}
		>
			<p className='font-semibold'>{props.message}</p>
		</div>
	);
}
