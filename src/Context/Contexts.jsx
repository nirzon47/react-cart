import { createContext, useState } from 'react'

const DataContext = createContext()

const DataProvider = ({ children }) => {
	const [data, setData] = useState({
		products: [
			{
				id: 1,
				name: 'Product 1',
				price: 100,
			},
			{
				id: 2,
				name: 'Product 2',
				price: 200,
			},
			{
				id: 3,
				name: 'Product 3',
				price: 300,
			},
		],
		cart: [
			{
				id: 1,
				name: 'Product 1',
				price: 100,
				quantity: 0,
			},
			{
				id: 2,
				name: 'Product 2',
				price: 200,
				quantity: 0,
			},
			{
				id: 3,
				name: 'Product 3',
				price: 300,
				quantity: 0,
			},
		],
	})

	const updateData = (newData) => {
		console.log(data)
		setData(newData)
	}

	return (
		<DataContext.Provider value={{ data, updateData }}>
			{children}
		</DataContext.Provider>
	)
}

export { DataContext, DataProvider }
