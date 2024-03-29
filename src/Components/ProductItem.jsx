const ProductItem = (prop) => {
	const { id, name, price } = prop.item
	const data = prop.data
	const updateData = prop.updateData

	const cartData = prop.cartData
	const index = cartData.findIndex((item) => item.id === id)

	const increaseCartQuantity = () => {
		const updatedCart = [...data.cart]
		updatedCart[index].quantity++

		updateData({
			...data,
			cart: updatedCart,
		})
	}

	const decreaseCartQuantity = () => {
		const updatedCart = [...data.cart]
		if (updatedCart[index].quantity > 0) {
			updatedCart[index].quantity--
		}

		updateData({
			...data,
			cart: updatedCart,
		})
	}

	return (
		<div className='card w-[48%] max-w-[200px] bg-base-100 shadow-xl lg:max-w-[350px] lg:h-56'>
			<div className='card-body'>
				<h2 className='card-title justify-center pb-4'>{name}</h2>
				<p className='text-center pb-2 font-semibold text-lg'>${price}</p>
				<div className='card-actions justify-center'>
					<div className='join'>
						<button
							className='btn join-item btn-primary btn-sm'
							onClick={decreaseCartQuantity}
						>
							-
						</button>
						<span className='btn join-item btn-primary btn-sm'>
							{index === -1 ? 0 : cartData[index].quantity}
						</span>
						<button
							className='btn join-item btn-primary btn-sm'
							onClick={increaseCartQuantity}
						>
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductItem
