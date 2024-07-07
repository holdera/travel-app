import { useState } from 'react';
import Button from '@/ui/Button';
import Input from '@/ui/Input';

export default function Sidebar({ filters }) {
	const [filterOpen, setFilterOpen] = useState(false);

	function showFilterHandler(e) {
		setFilterOpen(!filterOpen);
	}

	const h2Style = 'text-lg font-semibold pb-2';
	const sectionStyle = 'border-t border-teal-900 py-4';
	return (
		<>
			<Button
				addedClasses='block w-full md:hidden'
				onClick={showFilterHandler}
			>
				Filter
			</Button>
			<aside
				className={`fixed h-screen bg-white w-[300px] top-0 p-6 transition-all shadow-2xl ${
					filterOpen
						? 'left-0 md:left-[inherit]'
						: '-left-full md:left-[inherit]'
				} md:static md:w-1/3 md:top-[inherit] md:left-[inherit] md:shadow-none`}
			>
				<h2 className='text-xl font-semibold'>Filters</h2>

				<div className='pt-8 pb-4' id='stops'>
					<h2 className={h2Style}>Stops</h2>
					<fieldset>
						<Input
							type='checkbox'
							label='Direct'
							id='direct'
							name='direct'
						/>
						<Input
							type='checkbox'
							label='One Stop'
							id='oneStop'
							name='oneStop'
						/>
						<Input
							type='checkbox'
							label='Multiple Stops'
							id='multipleStops'
							name='multipleStops'
						/>
					</fieldset>
				</div>

				<div id='departure-times' className={sectionStyle}>
					<h2 className={h2Style}>Departure Times</h2>
				</div>

				<div id='airlines' className={sectionStyle}>
					<h2 className={h2Style}>Airlines</h2>
				</div>
			</aside>
		</>
	);
}
