import { ProductContext } from '../Context/Contexts'
import { CartContext } from '../Context/Contexts'
import { useContext } from 'react'
import ProductItem from './ProductItem'

const ProductList = () => {
	const productData = useContext(ProductContext)
	const cartData = useContext(CartContext)

	return (
		<div className='flex justify-around flex-wrap gap-y-4 lg:justify-start lg:gap-x-4'>
			{productData.map((item) => (
				<ProductItem key={item.id} item={item} cartData={cartData} />
			))}
		</div>
	)
}

export default ProductList
