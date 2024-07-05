import { useState } from 'react';
import Input from '@/ui/Input';
import Button from '@/ui/Button';

export default function SearchForm({ searchFn }) {
	function formHandler(e) {
		e.preventDefault();
		searchFn(e);
	}
	return (
		<form id='search_form' onSubmit={formHandler} noValidate>
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
			<Input
				type='date'
				label='Return'
				id='return'
				name='return'
				placeholder='Add date'
			/>
			<Input
				type='number'
				label='Travelers'
				id='travelers'
				name='travelers'
				placeholder='Number of travelers'
			/>
			<Button>Search</Button>
		</form>
	);
}
