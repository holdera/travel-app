export default function FlightResults({ data }) {
	console.log(data);
	const flightData = data.data;
	const dictionaries = data.dictionaries;

	function getAirline(code) {
		return dictionaries.carriers[code];
	}

	return (
		<div className='py-5 md:py-8'>
			<h2 className='font-semibold text-lg mb-2.5'>
				Search Results ({data.meta.count})
			</h2>
			{flightData.map((item) => (
				<div
					className='border border-teal-500 mb-3 p-2.5 rounded-md'
					key={`item-${item.id}`}
				>
					{item.itineraries.map((itinerary) => (
						<>
							<p>{itinerary.duration}</p>
							{itinerary.segments.map((segment) => (
								<div key={`segment-${segment.id}`}>
									{segment.numberOfStops === 0 && (
										<p>Non-stop</p>
									)}
									{segment.numberOfStops > 0 && (
										<p>{segment.numberOfStops} stops</p>
									)}
									<div className='flex justify-between py-2'>
										<div>
											<h3>Departure</h3>
											<p className='font-medium'>
												{getAirline(
													segment.carrierCode
												)}
											</p>
											<p>
												Terminal{' '}
												{segment.departure.terminal}
											</p>
											<p>{segment.departure.iataCode}</p>
											<p>{segment.departure.at}</p>
										</div>
										<div>
											<h3>Arrival</h3>
											<p>
												Terminal{' '}
												{segment.arrival.terminal}
											</p>
											<p>{segment.arrival.iataCode}</p>
											<p>{segment.arrival.at}</p>
										</div>
									</div>
								</div>
							))}
						</>
					))}

					{item.travelerPricings.map((ticket) => {
						if (ticket.travelerId === '1') {
							return (
								<p key={`traveler-${ticket.travelerId}`}>
									${ticket.price.base}
								</p>
							);
						}
					})}
				</div>
			))}
		</div>
	);
}
