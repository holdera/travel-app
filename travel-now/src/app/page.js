'use client';
import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '@/structure/Container';
import SearchForm from '@/SearchForm';
import FlightResults from '@/FlightResults';
import NoResults from '@/NoResults';
import Sidebar from '@/structure/Sidebar';
import Loader from '@/ui/Loader';

import { getSearchValues, fetchFlightData } from './store/flight-actions';

import { getTodaysDate } from './utils/helpers';

export default function Home() {
	const dispatch = useDispatch();
	const searchData = useSelector((state) => state.flight.searchData);
	const isFetching = useSelector((state) => state.ui.isFetching);
	const fetchedData = useSelector((state) => state.flight.flights);

	// useEffect(() => {
	// 	if (searchData) {
	// 		const options = {
	// 			method: 'GET',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 				Authorization: 'Bearer ' + ACCESS_TOKEN,
	// 			},
	// 		};

	// 		async function fetchSearchData() {
	// 			setIsFetching(true);
	// 			const response = await fetch(
	// 				`${ENDPOINT}?originLocationCode=${searchData.from.toUpperCase()}&destinationLocationCode=${searchData.to.toUpperCase()}&departureDate=${
	// 					searchData.depart
	// 				}${
	// 					searchData.return
	// 						? `&returnDate=${searchData.return}`
	// 						: ''
	// 				}&adults=${
	// 					searchData.travelers
	// 				}&travelClass=ECONOMY&nonStop=${
	// 					searchData.nonstop === 'on' ? 'true' : 'false'
	// 				}&currencyCode=CAD&max=100`,
	// 				options
	// 			);

	// 			const resData = await response.json();

	// 			if (!response.ok) {
	// 				throw new Error('Failed to fetch data');
	// 			}
	// 			setIsFetching(false);
	// 			setFetchedData(resData);

	// 			return resData;
	// 		}
	// 		fetchSearchData();
	// 	}
	// }, [searchData]);

	useEffect(() => {
		if (searchData) {
			dispatch(fetchFlightData(searchData));
		}
	}, [searchData, dispatch]);

	function searchHandler(e) {
		e.preventDefault();
		dispatch(getSearchValues(e));
	}

	console.log(searchData);

	return (
		<Fragment>
			<section className='min-h-[100vh]'>
				<Container>
					<h1 className='font-medium text-xl pb-4'>
						Flights available on{' '}
						<span className='font-bold'>{getTodaysDate()}</span>
					</h1>

					<SearchForm searchFn={searchHandler} />

					{isFetching && <Loader />}

					{fetchedData && (
						<div className='md:flex md:justify-between'>
							<Sidebar
								airlines={fetchedData.data}
								dictionaries={fetchedData.dictionaries}
							/>
							<FlightResults data={fetchedData} />
						</div>
					)}

					{fetchedData && fetchedData.data.length < 1 && (
						<NoResults />
					)}
				</Container>
			</section>
		</Fragment>
	);
}
