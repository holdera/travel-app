'use client';
import { Fragment, useEffect, useState } from 'react';
import Container from '@/structure/Container';
import SearchForm from '@/SearchForm';
import FlightResults from '@/FlightResults';
// import Notifications from '@/Notifications';

import { getTodaysDate } from './utils/helpers';
import { ENDPOINT } from './store/endpoints';
import { ACCESS_TOKEN } from './store/keys';
import { SEARCHED_DATA } from './data';

export default function Home() {
	// const dispatch = useDispatch();
	//const flights = useSelector((state) => state.flight.flights);
	// const notification = useSelector((state) => state.ui.notification);
	const [searchData, setSearchData] = useState();
	const [fetchedData, setFetchedData] = useState();
	const [isFetching, setIsFetching] = useState(false);

	// const { error, fetchedData, isFetching, setFetchedData } = useFetch(

	// );

	useEffect(() => {
		// dispatch(fetchFlights());
		if (searchData) {
			const options = {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: 'Bearer ' + ACCESS_TOKEN,
				},
			};

			async function fetchSearchData() {
				setIsFetching(true);
				const response = await fetch(
					`${ENDPOINT}?originLocationCode=${searchData.from.toUpperCase()}&destinationLocationCode=${searchData.to.toUpperCase()}&departureDate=${
						searchData.depart
					}${searchData.return && '&returnDate='}${
						searchData.return && searchData.return
					}&adults=${
						searchData.travelers
					}&travelClass=ECONOMY&nonStop=false&currencyCode=CAD&max=250`,
					options
				);
				const resData = await response.json();
				setIsFetching(false);
				if (!response.ok) {
					throw new Error('Failed to fetch data');
				}

				setFetchedData(resData);
				return resData;
			}
			fetchSearchData();
			setIsFetching(false);
		}
	}, [fetchedData, searchData]);

	function searchHandler(e) {
		const form = new FormData(e.target);
		const formData = Object.fromEntries(form.entries());
		console.log(formData);
		setSearchData(formData);
	}

	return (
		<Fragment>
			<section className='min-h-[100vh]'>
				<Container>
					<h1 className='font-medium text-xl pb-4'>
						Booking on{' '}
						<span className='font-bold'>{getTodaysDate()}</span>
					</h1>

					<SearchForm searchFn={searchHandler} />
					{isFetching && (
						<p className='text-teal-700 pt-6'>
							...Flight info is loading
						</p>
					)}
					{fetchedData && <FlightResults data={fetchedData} />}
				</Container>
			</section>

			{/* {notification && (
				<Notifications
					status={notification.status}
					message={notification.message}
				/>
			)} */}
		</Fragment>
	);
}
