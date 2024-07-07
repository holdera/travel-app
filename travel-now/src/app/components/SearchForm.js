import { useState } from 'react';
import Input from '@/ui/Input';
import Button from '@/ui/Button';

export default function SearchForm({ searchFn }) {
	const [flightOptionsSelected, setFlightOptionsSelected] = useState({
		item: 'roundtrip',
	});

	function radioHandler(e) {
		setFlightOptionsSelected((prev) => {
			return {
				...prev,
				item: e.target.id,
			};
		});
	}
	function formHandler(e) {
		e.preventDefault();
		searchFn(e);
	}
	return (
		<form
			id='search_form'
			className='mb-8'
			onSubmit={formHandler}
			noValidate
		>
			<fieldset className='flex justify-between max-w-[220px]'>
				<legend className='absolute h-0 invisible  w-0 text-[0rem]'>
					Types of Flights
				</legend>
				<Input
					type='radio'
					label='Roundtrip'
					id='roundtrip'
					name='flightType'
					onChange={radioHandler}
				/>
				<Input
					type='radio'
					label='One way'
					id='oneway'
					name='flightType'
					onChange={radioHandler}
				/>
				{/* <Input
					type='radio'
					label='Multi-city'
					id='multicity'
					name='flightType'
					onChange={radioHandler}
				/> */}
			</fieldset>
			<Input
				type='text'
				label='From'
				id='from'
				name='from'
				placeholder='Country, city, or airport'
			/>
			<Input
				type='text'
				label='To'
				id='to'
				name='to'
				placeholder='Country, city, or airport'
			/>
			<Input
				type='date'
				label='Depart'
				id='depart'
				name='depart'
				placeholder='Add date'
			/>
			{flightOptionsSelected.item === 'roundtrip' && (
				<Input
					type='date'
					label='Return'
					id='return'
					name='return'
					placeholder='Add date'
				/>
			)}

			<Input
				type='number'
				label='Travelers'
				id='travelers'
				name='travelers'
				placeholder='Number of travelers'
			/>
			<Input
				type='checkbox'
				label='Non-stop'
				name='nonstop'
				id='nonstop'
			/>
			<Button>Search</Button>
		</form>
	);
}
