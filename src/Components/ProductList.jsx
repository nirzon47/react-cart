import { DataContext } from '../Context/Contexts'
import { useContext } from 'react'
import ProductItem from './ProductItem'

const ProductList = () => {
	const data = useContext(DataContext).data
	const updateData = useContext(DataContext).updateData

	return (
		<div className='flex justify-around flex-wrap gap-y-4 lg:justify-start lg:gap-x-4'>
			{data.products.map((item) => (
				<ProductItem
					key={item.id}
					item={item}
					cartData={data.cart}
					data={data}
					updateData={updateData}
				/>
			))}
		</div>
	)
}

export default ProductList
