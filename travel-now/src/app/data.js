export const SEARCHED_DATA = {
	meta: {
		count: 43,
		links: {
			self: 'https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=YYZ&destinationLocationCode=SYD&departureDate=2024-07-25&adults=2&travelClass=ECONOMY&nonStop=false&max=250',
		},
	},
	data: [
		{
			type: 'flight-offer',
			id: '1',
			source: 'GDS',
			instantTicketingRequired: false,
			nonHomogeneous: false,
			oneWay: false,
			isUpsellOffer: false,
			lastTicketingDate: '2024-07-25',
			lastTicketingDateTime: '2024-07-25',
			numberOfBookableSeats: 9,
			itineraries: [
				{
					duration: 'PT28H55M',
					segments: [
						{
							departure: {
								iataCode: 'YYZ',
								terminal: '1',
								at: '2024-07-25T12:15:00',
							},
							arrival: {
								iataCode: 'DEL',
								terminal: '3',
								at: '2024-07-26T11:30:00',
							},
							carrierCode: 'AI',
							number: '188',
							aircraft: {
								code: '77W',
							},
							operating: {
								carrierCode: 'AI',
							},
							duration: 'PT13H45M',
							id: '80',
							numberOfStops: 0,
							blacklistedInEU: false,
						},
						{
							departure: {
								iataCode: 'DEL',
								terminal: '3',
								at: '2024-07-26T14:20:00',
							},
							arrival: {
								iataCode: 'SYD',
								terminal: '1',
								at: '2024-07-27T07:10:00',
							},
							carrierCode: 'AI',
							number: '302',
							aircraft: {
								code: '788',
							},
							operating: {
								carrierCode: 'AI',
							},
							duration: 'PT12H20M',
							id: '81',
							numberOfStops: 0,
							blacklistedInEU: false,
						},
					],
				},
			],
			price: {
				currency: 'EUR',
				total: '2306.02',
				base: '1760.00',
				fees: [
					{
						amount: '0.00',
						type: 'SUPPLIER',
					},
					{
						amount: '0.00',
						type: 'TICKETING',
					},
				],
				grandTotal: '2306.02',
			},
			pricingOptions: {
				fareType: ['PUBLISHED'],
				includedCheckedBagsOnly: true,
			},
			validatingAirlineCodes: ['AI'],
			travelerPricings: [
				{
					travelerId: '1',
					fareOption: 'STANDARD',
					travelerType: 'ADULT',
					price: {
						currency: 'EUR',
						total: '1153.01',
						base: '880.00',
					},
					fareDetailsBySegment: [
						{
							segmentId: '80',
							cabin: 'ECONOMY',
							fareBasis: 'TLRT3YTC',
							class: 'T',
							includedCheckedBags: {
								quantity: 2,
							},
						},
						{
							segmentId: '81',
							cabin: 'ECONOMY',
							fareBasis: 'TLRT3YTC',
							class: 'T',
							includedCheckedBags: {
								quantity: 2,
							},
						},
					],
				},
				{
					travelerId: '2',
					fareOption: 'STANDARD',
					travelerType: 'ADULT',
					price: {
						currency: 'EUR',
						total: '1153.01',
						base: '880.00',
					},
					fareDetailsBySegment: [
						{
							segmentId: '80',
							cabin: 'ECONOMY',
							fareBasis: 'TLRT3YTC',
							class: 'T',
							includedCheckedBags: {
								quantity: 2,
							},
						},
						{
							segmentId: '81',
							cabin: 'ECONOMY',
							fareBasis: 'TLRT3YTC',
							class: 'T',
							includedCheckedBags: {
								quantity: 2,
							},
						},
					],
				},
			],
		},
		{
			type: 'flight-offer',
			id: '2',
			source: 'GDS',
			instantTicketingRequired: false,
			nonHomogeneous: false,
			oneWay: false,
			isUpsellOffer: false,
			lastTicketingDate: '2024-07-25',
			lastTicketingDateTime: '2024-07-25',
			numberOfBookableSeats: 3,
			itineraries: [
				{
					duration: 'PT50H45M',
					segments: [
						{
							departure: {
								iataCode: 'YYZ',
								terminal: '3',
								at: '2024-07-25T16:00:00',
							},
							arrival: {
								iataCode: 'YVR',
								terminal: 'M',
								at: '2024-07-25T18:14:00',
							},
							carrierCode: 'PR',
							number: '3035',
							aircraft: {
								code: '7M8',
							},
							operating: {
								carrierCode: 'WS',
							},
							duration: 'PT5H14M',
							id: '58',
							numberOfStops: 0,
							blacklistedInEU: false,
						},
						{
							departure: {
								iataCode: 'YVR',
								terminal: 'M',
								at: '2024-07-26T01:00:00',
							},
							arrival: {
								iataCode: 'MNL',
								terminal: '1',
								at: '2024-07-27T05:45:00',
							},
							carrierCode: 'PR',
							number: '117',
							aircraft: {
								code: '773',
							},
							operating: {
								carrierCode: 'PR',
							},
							duration: 'PT13H45M',
							id: '59',
							numberOfStops: 0,
							blacklistedInEU: false,
						},
						{
							departure: {
								iataCode: 'MNL',
								terminal: '1',
								at: '2024-07-27T22:30:00',
							},
							arrival: {
								iataCode: 'SYD',
								terminal: '1',
								at: '2024-07-28T08:45:00',
							},
							carrierCode: 'PR',
							number: '211',
							aircraft: {
								code: '333',
							},
							operating: {
								carrierCode: 'PR',
							},
							duration: 'PT8H15M',
							id: '60',
							numberOfStops: 0,
							blacklistedInEU: false,
						},
					],
				},
			],
			price: {
				currency: 'EUR',
				total: '2326.74',
				base: '1872.00',
				fees: [
					{
						amount: '0.00',
						type: 'SUPPLIER',
					},
					{
						amount: '0.00',
						type: 'TICKETING',
					},
				],
				grandTotal: '2326.74',
			},
			pricingOptions: {
				fareType: ['PUBLISHED'],
				includedCheckedBagsOnly: true,
			},
			validatingAirlineCodes: ['PR'],
			travelerPricings: [
				{
					travelerId: '1',
					fareOption: 'STANDARD',
					travelerType: 'ADULT',
					price: {
						currency: 'EUR',
						total: '1163.37',
						base: '936.00',
					},
					fareDetailsBySegment: [
						{
							segmentId: '58',
							cabin: 'ECONOMY',
							fareBasis: 'XKOWBCAW',
							class: 'X',
							includedCheckedBags: {
								quantity: 2,
							},
						},
						{
							segmentId: '59',
							cabin: 'ECONOMY',
							fareBasis: 'XKOWBCAW',
							class: 'X',
							includedCheckedBags: {
								quantity: 2,
							},
						},
						{
							segmentId: '60',
							cabin: 'ECONOMY',
							fareBasis: 'XKOWBCAW',
							class: 'X',
							includedCheckedBags: {
								quantity: 2,
							},
						},
					],
				},
				{
					travelerId: '2',
					fareOption: 'STANDARD',
					travelerType: 'ADULT',
					price: {
						currency: 'EUR',
						total: '1163.37',
						base: '936.00',
					},
					fareDetailsBySegment: [
						{
							segmentId: '58',
							cabin: 'ECONOMY',
							fareBasis: 'XKOWBCAW',
							class: 'X',
							includedCheckedBags: {
								quantity: 2,
							},
						},
						{
							segmentId: '59',
							cabin: 'ECONOMY',
							fareBasis: 'XKOWBCAW',
							class: 'X',
							includedCheckedBags: {
								quantity: 2,
							},
						},
						{
							segmentId: '60',
							cabin: 'ECONOMY',
							fareBasis: 'XKOWBCAW',
							class: 'X',
							includedCheckedBags: {
								quantity: 2,
							},
						},
					],
				},
			],
		},
		{
			type: 'flight-offer',
			id: '3',
			source: 'GDS',
			instantTicketingRequired: false,
			nonHomogeneous: false,
			oneWay: false,
			isUpsellOffer: false,
			lastTicketingDate: '2024-07-08',
			lastTicketingDateTime: '2024-07-08',
			numberOfBookableSeats: 4,
			itineraries: [
				{
					duration: 'PT38H35M',
					segments: [
						{
							departure: {
								iataCode: 'YYZ',
								terminal: '3',
								at: '2024-07-25T01:40:00',
							},
							arrival: {
								iataCode: 'HKG',
								terminal: '1',
								at: '2024-07-26T05:00:00',
							},
							carrierCode: 'CX',
							number: '829',
							aircraft: {
								code: '359',
							},
							operating: {
								carrierCode: 'CX',
							},
							duration: 'PT15H20M',
							id: '40',
							numberOfStops: 0,
							blacklistedInEU: false,
						},
						{
							departure: {
								iataCode: 'HKG',
								terminal: '1',
								at: '2024-07-26T19:10:00',
							},
							arrival: {
								iataCode: 'SYD',
								terminal: '1',
								at: '2024-07-27T06:15:00',
							},
							carrierCode: 'CX',
							number: '111',
							aircraft: {
								code: '359',
							},
							operating: {
								carrierCode: 'CX',
							},
							duration: 'PT9H5M',
							id: '41',
							numberOfStops: 0,
							blacklistedInEU: false,
						},
					],
				},
			],
			price: {
				currency: 'EUR',
				total: '2391.12',
				base: '1840.00',
				fees: [
					{
						amount: '0.00',
						type: 'SUPPLIER',
					},
					{
						amount: '0.00',
						type: 'TICKETING',
					},
				],
				grandTotal: '2391.12',
			},
			pricingOptions: {
				fareType: ['PUBLISHED'],
				includedCheckedBagsOnly: true,
			},
			validatingAirlineCodes: ['CX'],
			travelerPricings: [
				{
					travelerId: '1',
					fareOption: 'STANDARD',
					travelerType: 'ADULT',
					price: {
						currency: 'EUR',
						total: '1195.56',
						base: '920.00',
					},
					fareDetailsBySegment: [
						{
							segmentId: '40',
							cabin: 'ECONOMY',
							fareBasis: 'SK21CANO',
							brandedFare: 'ECONLIGHT',
							brandedFareLabel: 'ECONOMY LIGHT',
							class: 'S',
							includedCheckedBags: {
								quantity: 1,
							},
							amenities: [
								{
									description: '1PC MAX 23KG 158LCM EACH',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: '1PC MAX 15LB 7KG 115LCM',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'SEAT ASSIGNMENT',
									isChargeable: true,
									amenityType: 'PRE_RESERVED_SEAT',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'REFUNDABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'MILEAGE ACCRUAL',
									isChargeable: false,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'CHANGEABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
							],
						},
						{
							segmentId: '41',
							cabin: 'ECONOMY',
							fareBasis: 'SK21CANO',
							brandedFare: 'ECONLIGHT',
							brandedFareLabel: 'ECONOMY LIGHT',
							class: 'S',
							includedCheckedBags: {
								quantity: 1,
							},
							amenities: [
								{
									description: '1PC MAX 23KG 158LCM EACH',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: '1PC MAX 15LB 7KG 115LCM',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'SEAT ASSIGNMENT',
									isChargeable: true,
									amenityType: 'PRE_RESERVED_SEAT',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'REFUNDABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'MILEAGE ACCRUAL',
									isChargeable: false,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'CHANGEABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
							],
						},
					],
				},
				{
					travelerId: '2',
					fareOption: 'STANDARD',
					travelerType: 'ADULT',
					price: {
						currency: 'EUR',
						total: '1195.56',
						base: '920.00',
					},
					fareDetailsBySegment: [
						{
							segmentId: '40',
							cabin: 'ECONOMY',
							fareBasis: 'SK21CANO',
							brandedFare: 'ECONLIGHT',
							brandedFareLabel: 'ECONOMY LIGHT',
							class: 'S',
							includedCheckedBags: {
								quantity: 1,
							},
							amenities: [
								{
									description: '1PC MAX 23KG 158LCM EACH',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: '1PC MAX 15LB 7KG 115LCM',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'SEAT ASSIGNMENT',
									isChargeable: true,
									amenityType: 'PRE_RESERVED_SEAT',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'REFUNDABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'MILEAGE ACCRUAL',
									isChargeable: false,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'CHANGEABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
							],
						},
						{
							segmentId: '41',
							cabin: 'ECONOMY',
							fareBasis: 'SK21CANO',
							brandedFare: 'ECONLIGHT',
							brandedFareLabel: 'ECONOMY LIGHT',
							class: 'S',
							includedCheckedBags: {
								quantity: 1,
							},
							amenities: [
								{
									description: '1PC MAX 23KG 158LCM EACH',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: '1PC MAX 15LB 7KG 115LCM',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'SEAT ASSIGNMENT',
									isChargeable: true,
									amenityType: 'PRE_RESERVED_SEAT',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'REFUNDABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'MILEAGE ACCRUAL',
									isChargeable: false,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'CHANGEABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
							],
						},
					],
				},
			],
		},
		{
			type: 'flight-offer',
			id: '4',
			source: 'GDS',
			instantTicketingRequired: false,
			nonHomogeneous: false,
			oneWay: false,
			isUpsellOffer: false,
			lastTicketingDate: '2024-07-25',
			lastTicketingDateTime: '2024-07-25',
			numberOfBookableSeats: 9,
			itineraries: [
				{
					duration: 'PT27H55M',
					segments: [
						{
							departure: {
								iataCode: 'YYZ',
								terminal: '1',
								at: '2024-07-25T13:35:00',
							},
							arrival: {
								iataCode: 'ICN',
								terminal: '1',
								at: '2024-07-26T17:30:00',
							},
							carrierCode: 'OZ',
							number: '6113',
							aircraft: {
								code: '789',
							},
							operating: {
								carrierCode: 'AC',
							},
							duration: 'PT14H55M',
							id: '76',
							numberOfStops: 0,
							blacklistedInEU: false,
						},
						{
							departure: {
								iataCode: 'ICN',
								terminal: '1',
								at: '2024-07-26T20:00:00',
							},
							arrival: {
								iataCode: 'SYD',
								terminal: '1',
								at: '2024-07-27T07:30:00',
							},
							carrierCode: 'OZ',
							number: '601',
							aircraft: {
								code: '359',
							},
							operating: {
								carrierCode: 'OZ',
							},
							duration: 'PT10H30M',
							id: '77',
							numberOfStops: 0,
							blacklistedInEU: false,
						},
					],
				},
			],
			price: {
				currency: 'EUR',
				total: '2521.38',
				base: '1998.00',
				fees: [
					{
						amount: '0.00',
						type: 'SUPPLIER',
					},
					{
						amount: '0.00',
						type: 'TICKETING',
					},
				],
				grandTotal: '2521.38',
			},
			pricingOptions: {
				fareType: ['PUBLISHED'],
				includedCheckedBagsOnly: true,
			},
			validatingAirlineCodes: ['OZ'],
			travelerPricings: [
				{
					travelerId: '1',
					fareOption: 'STANDARD',
					travelerType: 'ADULT',
					price: {
						currency: 'EUR',
						total: '1260.69',
						base: '999.00',
					},
					fareDetailsBySegment: [
						{
							segmentId: '76',
							cabin: 'ECONOMY',
							fareBasis: 'EHONO',
							class: 'E',
							includedCheckedBags: {
								quantity: 2,
							},
						},
						{
							segmentId: '77',
							cabin: 'ECONOMY',
							fareBasis: 'EHONO',
							class: 'E',
							includedCheckedBags: {
								quantity: 2,
							},
						},
					],
				},
				{
					travelerId: '2',
					fareOption: 'STANDARD',
					travelerType: 'ADULT',
					price: {
						currency: 'EUR',
						total: '1260.69',
						base: '999.00',
					},
					fareDetailsBySegment: [
						{
							segmentId: '76',
							cabin: 'ECONOMY',
							fareBasis: 'EHONO',
							class: 'E',
							includedCheckedBags: {
								quantity: 2,
							},
						},
						{
							segmentId: '77',
							cabin: 'ECONOMY',
							fareBasis: 'EHONO',
							class: 'E',
							includedCheckedBags: {
								quantity: 2,
							},
						},
					],
				},
			],
		},
		{
			type: 'flight-offer',
			id: '5',
			source: 'GDS',
			instantTicketingRequired: false,
			nonHomogeneous: false,
			oneWay: false,
			isUpsellOffer: false,
			lastTicketingDate: '2024-07-25',
			lastTicketingDateTime: '2024-07-25',
			numberOfBookableSeats: 9,
			itineraries: [
				{
					duration: 'PT27H25M',
					segments: [
						{
							departure: {
								iataCode: 'YYZ',
								terminal: '3',
								at: '2024-07-25T12:55:00',
							},
							arrival: {
								iataCode: 'ICN',
								terminal: '2',
								at: '2024-07-26T16:30:00',
							},
							carrierCode: 'KE',
							number: '74',
							aircraft: {
								code: '789',
							},
							operating: {
								carrierCode: 'KE',
							},
							duration: 'PT14H35M',
							id: '21',
							numberOfStops: 0,
							blacklistedInEU: false,
						},
						{
							departure: {
								iataCode: 'ICN',
								terminal: '2',
								at: '2024-07-26T18:55:00',
							},
							arrival: {
								iataCode: 'SYD',
								terminal: '1',
								at: '2024-07-27T06:20:00',
							},
							carrierCode: 'KE',
							number: '401',
							aircraft: {
								code: '789',
							},
							operating: {
								carrierCode: 'KE',
							},
							duration: 'PT10H25M',
							id: '22',
							numberOfStops: 0,
							blacklistedInEU: false,
						},
					],
				},
			],
			price: {
				currency: 'EUR',
				total: '2781.34',
				base: '2264.00',
				fees: [
					{
						amount: '0.00',
						type: 'SUPPLIER',
					},
					{
						amount: '0.00',
						type: 'TICKETING',
					},
				],
				grandTotal: '2781.34',
			},
			pricingOptions: {
				fareType: ['PUBLISHED'],
				includedCheckedBagsOnly: true,
			},
			validatingAirlineCodes: ['KE'],
			travelerPricings: [
				{
					travelerId: '1',
					fareOption: 'STANDARD',
					travelerType: 'ADULT',
					price: {
						currency: 'EUR',
						total: '1390.67',
						base: '1132.00',
					},
					fareDetailsBySegment: [
						{
							segmentId: '21',
							cabin: 'ECONOMY',
							fareBasis: 'EHE00RCK',
							class: 'E',
							includedCheckedBags: {
								quantity: 2,
							},
						},
						{
							segmentId: '22',
							cabin: 'ECONOMY',
							fareBasis: 'EHE00RCK',
							class: 'E',
							includedCheckedBags: {
								quantity: 2,
							},
						},
					],
				},
				{
					travelerId: '2',
					fareOption: 'STANDARD',
					travelerType: 'ADULT',
					price: {
						currency: 'EUR',
						total: '1390.67',
						base: '1132.00',
					},
					fareDetailsBySegment: [
						{
							segmentId: '21',
							cabin: 'ECONOMY',
							fareBasis: 'EHE00RCK',
							class: 'E',
							includedCheckedBags: {
								quantity: 2,
							},
						},
						{
							segmentId: '22',
							cabin: 'ECONOMY',
							fareBasis: 'EHE00RCK',
							class: 'E',
							includedCheckedBags: {
								quantity: 2,
							},
						},
					],
				},
			],
		},
		{
			type: 'flight-offer',
			id: '6',
			source: 'GDS',
			instantTicketingRequired: false,
			nonHomogeneous: false,
			oneWay: false,
			isUpsellOffer: false,
			lastTicketingDate: '2024-07-25',
			lastTicketingDateTime: '2024-07-25',
			numberOfBookableSeats: 9,
			itineraries: [
				{
					duration: 'PT27H10M',
					segments: [
						{
							departure: {
								iataCode: 'YYZ',
								terminal: '3',
								at: '2024-07-25T15:35:00',
							},
							arrival: {
								iataCode: 'HKG',
								terminal: '1',
								at: '2024-07-26T19:00:00',
							},
							carrierCode: 'CX',
							number: '825',
							aircraft: {
								code: '359',
							},
							operating: {
								carrierCode: 'CX',
							},
							duration: 'PT15H25M',
							id: '12',
							numberOfStops: 0,
							blacklistedInEU: false,
						},
						{
							departure: {
								iataCode: 'HKG',
								terminal: '1',
								at: '2024-07-26T21:35:00',
							},
							arrival: {
								iataCode: 'SYD',
								terminal: '1',
								at: '2024-07-27T08:45:00',
							},
							carrierCode: 'CX',
							number: '161',
							aircraft: {
								code: '359',
							},
							operating: {
								carrierCode: 'CX',
							},
							duration: 'PT9H10M',
							id: '13',
							numberOfStops: 0,
							blacklistedInEU: false,
						},
					],
				},
			],
			price: {
				currency: 'EUR',
				total: '2857.12',
				base: '2306.00',
				fees: [
					{
						amount: '0.00',
						type: 'SUPPLIER',
					},
					{
						amount: '0.00',
						type: 'TICKETING',
					},
				],
				grandTotal: '2857.12',
			},
			pricingOptions: {
				fareType: ['PUBLISHED'],
				includedCheckedBagsOnly: true,
			},
			validatingAirlineCodes: ['CX'],
			travelerPricings: [
				{
					travelerId: '1',
					fareOption: 'STANDARD',
					travelerType: 'ADULT',
					price: {
						currency: 'EUR',
						total: '1428.56',
						base: '1153.00',
					},
					fareDetailsBySegment: [
						{
							segmentId: '12',
							cabin: 'ECONOMY',
							fareBasis: 'VR21CANO',
							brandedFare: 'ECONLIGHT',
							brandedFareLabel: 'ECONOMY LIGHT',
							class: 'V',
							includedCheckedBags: {
								quantity: 1,
							},
							amenities: [
								{
									description: '1PC MAX 23KG 158LCM EACH',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: '1PC MAX 15LB 7KG 115LCM',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'SEAT ASSIGNMENT',
									isChargeable: true,
									amenityType: 'PRE_RESERVED_SEAT',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'REFUNDABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'MILEAGE ACCRUAL',
									isChargeable: false,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'CHANGEABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
							],
						},
						{
							segmentId: '13',
							cabin: 'ECONOMY',
							fareBasis: 'VR21CANO',
							brandedFare: 'ECONLIGHT',
							brandedFareLabel: 'ECONOMY LIGHT',
							class: 'V',
							includedCheckedBags: {
								quantity: 1,
							},
							amenities: [
								{
									description: '1PC MAX 23KG 158LCM EACH',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: '1PC MAX 15LB 7KG 115LCM',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'SEAT ASSIGNMENT',
									isChargeable: true,
									amenityType: 'PRE_RESERVED_SEAT',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'REFUNDABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'MILEAGE ACCRUAL',
									isChargeable: false,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'CHANGEABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
							],
						},
					],
				},
				{
					travelerId: '2',
					fareOption: 'STANDARD',
					travelerType: 'ADULT',
					price: {
						currency: 'EUR',
						total: '1428.56',
						base: '1153.00',
					},
					fareDetailsBySegment: [
						{
							segmentId: '12',
							cabin: 'ECONOMY',
							fareBasis: 'VR21CANO',
							brandedFare: 'ECONLIGHT',
							brandedFareLabel: 'ECONOMY LIGHT',
							class: 'V',
							includedCheckedBags: {
								quantity: 1,
							},
							amenities: [
								{
									description: '1PC MAX 23KG 158LCM EACH',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: '1PC MAX 15LB 7KG 115LCM',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'SEAT ASSIGNMENT',
									isChargeable: true,
									amenityType: 'PRE_RESERVED_SEAT',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'REFUNDABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'MILEAGE ACCRUAL',
									isChargeable: false,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'CHANGEABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
							],
						},
						{
							segmentId: '13',
							cabin: 'ECONOMY',
							fareBasis: 'VR21CANO',
							brandedFare: 'ECONLIGHT',
							brandedFareLabel: 'ECONOMY LIGHT',
							class: 'V',
							includedCheckedBags: {
								quantity: 1,
							},
							amenities: [
								{
									description: '1PC MAX 23KG 158LCM EACH',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: '1PC MAX 15LB 7KG 115LCM',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'SEAT ASSIGNMENT',
									isChargeable: true,
									amenityType: 'PRE_RESERVED_SEAT',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'REFUNDABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'MILEAGE ACCRUAL',
									isChargeable: false,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'CHANGEABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
							],
						},
					],
				},
			],
		},
		{
			type: 'flight-offer',
			id: '7',
			source: 'GDS',
			instantTicketingRequired: false,
			nonHomogeneous: false,
			oneWay: false,
			isUpsellOffer: false,
			lastTicketingDate: '2024-07-25',
			lastTicketingDateTime: '2024-07-25',
			numberOfBookableSeats: 9,
			itineraries: [
				{
					duration: 'PT28H35M',
					segments: [
						{
							departure: {
								iataCode: 'YYZ',
								terminal: '3',
								at: '2024-07-25T01:40:00',
							},
							arrival: {
								iataCode: 'HKG',
								terminal: '1',
								at: '2024-07-26T05:00:00',
							},
							carrierCode: 'CX',
							number: '829',
							aircraft: {
								code: '359',
							},
							operating: {
								carrierCode: 'CX',
							},
							duration: 'PT15H20M',
							id: '34',
							numberOfStops: 0,
							blacklistedInEU: false,
						},
						{
							departure: {
								iataCode: 'HKG',
								terminal: '1',
								at: '2024-07-26T09:10:00',
							},
							arrival: {
								iataCode: 'SYD',
								terminal: '1',
								at: '2024-07-26T20:15:00',
							},
							carrierCode: 'CX',
							number: '139',
							aircraft: {
								code: '359',
							},
							operating: {
								carrierCode: 'CX',
							},
							duration: 'PT9H5M',
							id: '35',
							numberOfStops: 0,
							blacklistedInEU: false,
						},
					],
				},
			],
			price: {
				currency: 'EUR',
				total: '2857.12',
				base: '2306.00',
				fees: [
					{
						amount: '0.00',
						type: 'SUPPLIER',
					},
					{
						amount: '0.00',
						type: 'TICKETING',
					},
				],
				grandTotal: '2857.12',
			},
			pricingOptions: {
				fareType: ['PUBLISHED'],
				includedCheckedBagsOnly: true,
			},
			validatingAirlineCodes: ['CX'],
			travelerPricings: [
				{
					travelerId: '1',
					fareOption: 'STANDARD',
					travelerType: 'ADULT',
					price: {
						currency: 'EUR',
						total: '1428.56',
						base: '1153.00',
					},
					fareDetailsBySegment: [
						{
							segmentId: '34',
							cabin: 'ECONOMY',
							fareBasis: 'VR21CANO',
							brandedFare: 'ECONLIGHT',
							brandedFareLabel: 'ECONOMY LIGHT',
							class: 'V',
							includedCheckedBags: {
								quantity: 1,
							},
							amenities: [
								{
									description: '1PC MAX 23KG 158LCM EACH',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: '1PC MAX 15LB 7KG 115LCM',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'SEAT ASSIGNMENT',
									isChargeable: true,
									amenityType: 'PRE_RESERVED_SEAT',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'REFUNDABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'MILEAGE ACCRUAL',
									isChargeable: false,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'CHANGEABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
							],
						},
						{
							segmentId: '35',
							cabin: 'ECONOMY',
							fareBasis: 'VR21CANO',
							brandedFare: 'ECONLIGHT',
							brandedFareLabel: 'ECONOMY LIGHT',
							class: 'V',
							includedCheckedBags: {
								quantity: 1,
							},
							amenities: [
								{
									description: '1PC MAX 23KG 158LCM EACH',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: '1PC MAX 15LB 7KG 115LCM',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'SEAT ASSIGNMENT',
									isChargeable: true,
									amenityType: 'PRE_RESERVED_SEAT',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'REFUNDABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'MILEAGE ACCRUAL',
									isChargeable: false,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'CHANGEABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
							],
						},
					],
				},
				{
					travelerId: '2',
					fareOption: 'STANDARD',
					travelerType: 'ADULT',
					price: {
						currency: 'EUR',
						total: '1428.56',
						base: '1153.00',
					},
					fareDetailsBySegment: [
						{
							segmentId: '34',
							cabin: 'ECONOMY',
							fareBasis: 'VR21CANO',
							brandedFare: 'ECONLIGHT',
							brandedFareLabel: 'ECONOMY LIGHT',
							class: 'V',
							includedCheckedBags: {
								quantity: 1,
							},
							amenities: [
								{
									description: '1PC MAX 23KG 158LCM EACH',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: '1PC MAX 15LB 7KG 115LCM',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'SEAT ASSIGNMENT',
									isChargeable: true,
									amenityType: 'PRE_RESERVED_SEAT',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'REFUNDABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'MILEAGE ACCRUAL',
									isChargeable: false,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'CHANGEABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
							],
						},
						{
							segmentId: '35',
							cabin: 'ECONOMY',
							fareBasis: 'VR21CANO',
							brandedFare: 'ECONLIGHT',
							brandedFareLabel: 'ECONOMY LIGHT',
							class: 'V',
							includedCheckedBags: {
								quantity: 1,
							},
							amenities: [
								{
									description: '1PC MAX 23KG 158LCM EACH',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: '1PC MAX 15LB 7KG 115LCM',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'SEAT ASSIGNMENT',
									isChargeable: true,
									amenityType: 'PRE_RESERVED_SEAT',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'REFUNDABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'MILEAGE ACCRUAL',
									isChargeable: false,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'CHANGEABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
							],
						},
					],
				},
			],
		},
		{
			type: 'flight-offer',
			id: '8',
			source: 'GDS',
			instantTicketingRequired: false,
			nonHomogeneous: false,
			oneWay: false,
			isUpsellOffer: false,
			lastTicketingDate: '2024-07-25',
			lastTicketingDateTime: '2024-07-25',
			numberOfBookableSeats: 9,
			itineraries: [
				{
					duration: 'PT29H15M',
					segments: [
						{
							departure: {
								iataCode: 'YYZ',
								terminal: '3',
								at: '2024-07-25T15:35:00',
							},
							arrival: {
								iataCode: 'HKG',
								terminal: '1',
								at: '2024-07-26T19:00:00',
							},
							carrierCode: 'CX',
							number: '825',
							aircraft: {
								code: '359',
							},
							operating: {
								carrierCode: 'CX',
							},
							duration: 'PT15H25M',
							id: '19',
							numberOfStops: 0,
							blacklistedInEU: false,
						},
						{
							departure: {
								iataCode: 'HKG',
								terminal: '1',
								at: '2024-07-26T23:55:00',
							},
							arrival: {
								iataCode: 'SYD',
								terminal: '1',
								at: '2024-07-27T10:50:00',
							},
							carrierCode: 'CX',
							number: '101',
							aircraft: {
								code: '359',
							},
							operating: {
								carrierCode: 'CX',
							},
							duration: 'PT8H55M',
							id: '20',
							numberOfStops: 0,
							blacklistedInEU: false,
						},
					],
				},
			],
			price: {
				currency: 'EUR',
				total: '2857.12',
				base: '2306.00',
				fees: [
					{
						amount: '0.00',
						type: 'SUPPLIER',
					},
					{
						amount: '0.00',
						type: 'TICKETING',
					},
				],
				grandTotal: '2857.12',
			},
			pricingOptions: {
				fareType: ['PUBLISHED'],
				includedCheckedBagsOnly: true,
			},
			validatingAirlineCodes: ['CX'],
			travelerPricings: [
				{
					travelerId: '1',
					fareOption: 'STANDARD',
					travelerType: 'ADULT',
					price: {
						currency: 'EUR',
						total: '1428.56',
						base: '1153.00',
					},
					fareDetailsBySegment: [
						{
							segmentId: '19',
							cabin: 'ECONOMY',
							fareBasis: 'VR21CANO',
							brandedFare: 'ECONLIGHT',
							brandedFareLabel: 'ECONOMY LIGHT',
							class: 'V',
							includedCheckedBags: {
								quantity: 1,
							},
							amenities: [
								{
									description: '1PC MAX 23KG 158LCM EACH',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: '1PC MAX 15LB 7KG 115LCM',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'SEAT ASSIGNMENT',
									isChargeable: true,
									amenityType: 'PRE_RESERVED_SEAT',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'REFUNDABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'MILEAGE ACCRUAL',
									isChargeable: false,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'CHANGEABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
							],
						},
						{
							segmentId: '20',
							cabin: 'ECONOMY',
							fareBasis: 'VR21CANO',
							brandedFare: 'ECONLIGHT',
							brandedFareLabel: 'ECONOMY LIGHT',
							class: 'V',
							includedCheckedBags: {
								quantity: 1,
							},
							amenities: [
								{
									description: '1PC MAX 23KG 158LCM EACH',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: '1PC MAX 15LB 7KG 115LCM',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'SEAT ASSIGNMENT',
									isChargeable: true,
									amenityType: 'PRE_RESERVED_SEAT',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'REFUNDABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'MILEAGE ACCRUAL',
									isChargeable: false,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'CHANGEABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
							],
						},
					],
				},
				{
					travelerId: '2',
					fareOption: 'STANDARD',
					travelerType: 'ADULT',
					price: {
						currency: 'EUR',
						total: '1428.56',
						base: '1153.00',
					},
					fareDetailsBySegment: [
						{
							segmentId: '19',
							cabin: 'ECONOMY',
							fareBasis: 'VR21CANO',
							brandedFare: 'ECONLIGHT',
							brandedFareLabel: 'ECONOMY LIGHT',
							class: 'V',
							includedCheckedBags: {
								quantity: 1,
							},
							amenities: [
								{
									description: '1PC MAX 23KG 158LCM EACH',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: '1PC MAX 15LB 7KG 115LCM',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'SEAT ASSIGNMENT',
									isChargeable: true,
									amenityType: 'PRE_RESERVED_SEAT',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'REFUNDABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'MILEAGE ACCRUAL',
									isChargeable: false,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'CHANGEABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
							],
						},
						{
							segmentId: '20',
							cabin: 'ECONOMY',
							fareBasis: 'VR21CANO',
							brandedFare: 'ECONLIGHT',
							brandedFareLabel: 'ECONOMY LIGHT',
							class: 'V',
							includedCheckedBags: {
								quantity: 1,
							},
							amenities: [
								{
									description: '1PC MAX 23KG 158LCM EACH',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: '1PC MAX 15LB 7KG 115LCM',
									isChargeable: false,
									amenityType: 'BAGGAGE',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'SEAT ASSIGNMENT',
									isChargeable: true,
									amenityType: 'PRE_RESERVED_SEAT',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'REFUNDABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'MILEAGE ACCRUAL',
									isChargeable: false,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
								{
									description: 'CHANGEABLE TICKET',
									isChargeable: true,
									amenityType: 'BRANDED_FARES',
									amenityProvider: {
										name: 'BrandedFare',
									},
								},
							],
						},
					],
				},
			],
		},
	],
	dictionaries: {
		locations: {
			LAX: {
				cityCode: 'LAX',
				countryCode: 'US',
			},
			HKG: {
				cityCode: 'HKG',
				countryCode: 'HK',
			},
			DEL: {
				cityCode: 'DEL',
				countryCode: 'IN',
			},
			MNL: {
				cityCode: 'MNL',
				countryCode: 'PH',
			},
			DXB: {
				cityCode: 'DXB',
				countryCode: 'AE',
			},
			NRT: {
				cityCode: 'TYO',
				countryCode: 'JP',
			},
			YUL: {
				cityCode: 'YMQ',
				countryCode: 'CA',
			},
			AUH: {
				cityCode: 'AUH',
				countryCode: 'AE',
			},
			YVR: {
				cityCode: 'YVR',
				countryCode: 'CA',
			},
			DFW: {
				cityCode: 'DFW',
				countryCode: 'US',
			},
			ICN: {
				cityCode: 'SEL',
				countryCode: 'KR',
			},
			LHR: {
				cityCode: 'LON',
				countryCode: 'GB',
			},
			NAN: {
				cityCode: 'NAN',
				countryCode: 'FJ',
			},
			YYZ: {
				cityCode: 'YTO',
				countryCode: 'CA',
			},
			DOH: {
				cityCode: 'DOH',
				countryCode: 'QA',
			},
			SFO: {
				cityCode: 'SFO',
				countryCode: 'US',
			},
			SYD: {
				cityCode: 'SYD',
				countryCode: 'AU',
			},
			HND: {
				cityCode: 'TYO',
				countryCode: 'JP',
			},
		},
		aircraft: {
			223: 'AIRBUS  A220-300',
			295: 'EMBRAER 195 E2',
			320: 'AIRBUS A320',
			321: 'AIRBUS A321',
			332: 'AIRBUS A330-200',
			333: 'AIRBUS A330-300',
			359: 'AIRBUS A350-900',
			388: 'AIRBUS A380-800',
			738: 'BOEING 737-800',
			744: 'BOEING 747-400',
			773: 'BOEING 777-300',
			777: 'BOEING 777-200/300',
			788: 'BOEING 787-8',
			789: 'BOEING 787-9',
			'7M8': 'BOEING 737 MAX 8',
			'77L': 'BOEING 777-200LR',
			'77W': 'BOEING 777-300ER',
			'7S8': 'BOEING 737-800 SCIMITAR WINGLETS',
		},
		currencies: {
			EUR: 'EURO',
		},
		carriers: {
			QR: 'QATAR AIRWAYS',
			'7X': 'AMADEUS SEVEN',
			PR: 'PHILIPPINE AIRLINES',
			AC: 'AIR CANADA',
			'6X': 'AMADEUS SIX',
			FJ: 'FIJI AIRWAYS',
			EK: 'EMIRATES',
			AI: 'AIR INDIA',
			OZ: 'ASIANA AIRLINES',
			UA: 'UNITED AIRLINES',
			PD: 'PORTER AIRLINES CANADA LTD',
			EY: 'ETIHAD AIRWAYS',
			CX: 'CATHAY PACIFIC',
			QF: 'QANTAS AIRWAYS',
			KE: 'KOREAN AIR',
			NH: 'ALL NIPPON AIRWAYS',
			WS: 'WESTJET',
			LH: 'LUFTHANSA',
		},
	},
};
