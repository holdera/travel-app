'use client';
import { Fragment, useEffect, useState } from 'react';
import Container from '@/structure/Container';
import SearchForm from '@/SearchForm';
import FlightResults from '@/FlightResults';
import NoResults from '@/NoResults';
import Sidebar from '@/structure/Sidebar';
import Loader from '@/ui/Loader';

import { getTodaysDate } from './utils/helpers';
import { ENDPOINT } from './store/endpoints';
import { ACCESS_TOKEN } from './store/keys';
import { SEARCHED_DATA } from './data';

export default function Home() {
	const [searchData, setSearchData] = useState();
	const [fetchedData, setFetchedData] = useState();
	const [isFetching, setIsFetching] = useState(false);

	useEffect(() => {
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
					}${
						searchData.return
							? `&returnDate=${searchData.return}`
							: ''
					}&adults=${
						searchData.travelers
					}&travelClass=ECONOMY&nonStop=${
						searchData.nonstop === 'on' ? 'true' : 'false'
					}&currencyCode=CAD&max=100`,
					options
				);

				const resData = await response.json();

				if (!response.ok) {
					throw new Error('Failed to fetch data');
				}
				setIsFetching(false);
				setFetchedData(resData);

				return resData;
			}
			fetchSearchData();
		}
	}, [searchData]);

	function searchHandler(e) {
		const form = new FormData(e.target);
		const formData = Object.fromEntries(form.entries());
		console.log(formData);
		setSearchData(formData);
	}

	if (fetchedData) {
		console.log(fetchedData.dictionaries);
	}

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
