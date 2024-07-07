import Image from 'next/image';
import { useState } from 'react';
import Button from './ui/Button';
import { formatDateTime, getAirline } from './../utils/helpers';
import downArrow from '../assets/icons/down-arrow.svg';

export default function FlightItinerary({ data, segments }) {
	const [showOptions, setShowOptions] = useState(false);

	function optionsHandler() {
		setShowOptions(!showOptions);
	}

	return (
		<>
			{segments.map((segment, i) => (
				<div key={`segment-${segment.id}`} className='mb-4'>
					{segment.numberOfStops === 0 && i === 0 && <p>Non-stop</p>}
					{segment.numberOfStops > 0 && (
						<p>
							{segment.numberOfStops} stop
							{segment.numberOfStops > 1 && 's'}
						</p>
					)}

					<div
						className={` justify-between py-2 ${
							i === 0 && !showOptions && 'flex'
						} ${!showOptions && i !== 0 && 'hidden'} ${
							showOptions && 'flex'
						}`}
					>
						<div>
							<h3 className='font-medium'>Departure</h3>
							<p>{getAirline(data, segment.carrierCode)}</p>
							<p>Terminal {segment.departure.terminal}</p>
							<p>{segment.departure.iataCode}</p>
							<p>{formatDateTime(segment.departure.at)}</p>
						</div>
						<div>
							<h3 className='font-medium'>Arrival</h3>
							<p>{getAirline(data, segment.carrierCode)}</p>
							<p>Terminal {segment.arrival.terminal}</p>
							<p>{segment.arrival.iataCode}</p>
							<p>{formatDateTime(segment.arrival.at)}</p>
						</div>
					</div>
					{i === 0 && (
						<Button onClick={optionsHandler}>
							<span className='flex items-center justify-center'>
								{showOptions ? 'Less' : 'More'} Flight Options
								<Image
									className={`ml-2 transition-transform group-hover:rotate-180 ${
										showOptions ? 'rotate-180' : ''
									}`}
									src={downArrow}
									alt={`${
										showOptions
											? 'click for less options'
											: 'click for more options'
									}`}
								/>
							</span>
						</Button>
					)}
				</div>
			))}
		</>
	);
}
