import FlightItinerary from '@/FlightItinerary';
import FlightPricing from '@/FlightPricing';
import { formatTravelTime } from './../utils/helpers';

export default function FlightResults({ data }) {
	const flightData = data.data;
	const dictionaries = data.dictionaries;

	return (
		<>
			<div className='py-5 md:py-8 md:w-2/3'>
				<h2 className='font-semibold text-lg mb-2.5'>
					Search Results ({data.meta.count})
				</h2>
				{flightData.map((item) => (
					<div
						key={`${item.id}`}
						className='border border-teal-500 mb-3 px-4 py-6 rounded-md'
					>
						{item.itineraries.map((itinerary) => (
							<>
								<p>{formatTravelTime(itinerary.duration)}</p>
								<FlightItinerary
									data={dictionaries.carriers}
									segments={itinerary.segments}
								/>
							</>
						))}

						<FlightPricing
							travelerPricingData={item.travelerPricings}
						/>
					</div>
				))}
			</div>
		</>
	);
}
