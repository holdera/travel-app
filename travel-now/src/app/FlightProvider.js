'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore } from './store/store';

export default function FlightProvider({ children }) {
	const ref = useRef();
	if (!ref.current) {
		ref.current = makeStore();
	}
	return <Provider store={ref.current}>{children}</Provider>;
}
