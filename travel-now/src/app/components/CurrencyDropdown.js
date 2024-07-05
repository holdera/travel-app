'use client';
import { useState } from 'react';

export default function CurrencyDropdown({}) {
	const [showCurrencies, setShowCurrencies] = useState(false);

	function currencyBtnHandler() {
		console.log('hello world');
	}

	return (
		<>
			<div id='currency-dropdown'>
				<button onClick={currencyBtnHandler}>Select Currency</button>
			</div>
			{showCurrencies && <ul></ul>}
		</>
	);
}
