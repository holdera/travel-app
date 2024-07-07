import { useState } from 'react';
import Button from '@/ui/Button';
import Input from '@/ui/Input';
import RangeSlider from '@/ui/RangeSlider';

import { minutesToTime, timeToMinutes } from '../../utils/helpers';

export default function Sidebar({ airlines }) {
	const [filterOpen, setFilterOpen] = useState(false);
	const [departTime, setDepartTime] = useState(timeToMinutes('12:00'));
	const [returnTime, setReturnTime] = useState(timeToMinutes('12:00'));

	function closeSidebar() {
		setFilterOpen(false);
	}

	function showFilterHandler(e) {
		setFilterOpen(!filterOpen);
	}

	function sidebarCloseHandler() {
		closeSidebar();
	}

	function departTimeHandler(e) {
		setDepartTime(e.target.value);
	}

	function returnTimeHandler(e) {
		setReturnTime(e.target.value);
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
				className={`fixed h-screen bg-white w-[300px] top-0 pt-5 px-5 pr-0 transition-all shadow-2xl ${
					filterOpen
						? 'right-0 md:right-[inherit]'
						: '-right-full md:right-[inherit]'
				} md:static md:w-1/4 md:top-[inherit] md:right-[inherit] md:shadow-none`}
			>
				<div className='overflow-y-auto h-[98%] md:h-auto'>
					<div className='flex justify-end md:hidden'>
						<Button onClick={sidebarCloseHandler}>Close</Button>
					</div>
					<h2 className='pt-2 text-xl font-semibold'>Filters</h2>

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

						<RangeSlider
							label={
								<>
									Depart
									<p>{minutesToTime(departTime)}</p>
								</>
							}
							type='range'
							id='departTime'
							name='departTime'
							min='0'
							max='1439'
							vale={departTime}
							onChange={departTimeHandler}
						/>

						<RangeSlider
							label={
								<>
									Return
									<p>{minutesToTime(returnTime)}</p>
								</>
							}
							type='range'
							id='returnTime'
							name='returnTime'
							min='0'
							max='1439'
							vale={returnTime}
							onChange={returnTimeHandler}
						/>
					</div>

					<div id='airlines' className={sectionStyle}>
						<h2 className={h2Style}>Airlines</h2>

						{airlines &&
							airlines.map((flight) => (
								<Input
									type='checkbox'
									label={flight.validatingAirlineCodes.toString()}
									id={flight.validatingAirlineCodes.toString()}
									name={flight.validatingAirlineCodes.toString()}
								/>
							))}
					</div>
				</div>
			</aside>
		</>
	);
}
