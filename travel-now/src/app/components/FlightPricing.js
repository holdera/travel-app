export default function FlightPricing({ travelerPricingData }) {
	return (
		<>
			{travelerPricingData.map((ticket) => {
				if (ticket.travelerId === '1') {
					return (
						<p key={`traveler-${ticket.travelerId}`}>
							${ticket.price.base}
						</p>
					);
				}
			})}
		</>
	);
}
