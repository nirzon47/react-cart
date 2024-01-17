import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../Context/Contexts'

const Cart = () => {
	const data = useContext(DataContext).data
	const [totalPrice, setTotalPrice] = useState(0)

	const updateTotalPrice = () => {
		let tempTotal = 0
		data.cart.forEach((item) => {
			tempTotal += item.price * item.quantity
		})

		setTotalPrice(tempTotal)
	}

	useEffect(() => updateTotalPrice(), [data])

	return (
		<div className='col-span-3 text-center'>
			<h2 className='text-lg font-semibold mt-8 mb-4 md:text-xl'>
				Shopping Cart
			</h2>
			{totalPrice !== 0 ? (
				<>
					<section className='mb-4 lg:h-80 flex flex-col gap-y-2'>
						{data &&
							data.cart.map(
								(item) =>
									item.quantity > 0 && (
										<div
											className='alert max-w-[20rem] mx-auto flex justify-around outline-none'
											key={item.id}
										>
											<span>{item.name}</span>
											<span>
												{item.quantity} x ${item.price}
											</span>
										</div>
									)
							)}
					</section>
					<p className='font-bold md:text-lg mt-auto'>
						Total amount:{' '}
						<span className='text-secondary'>
							$<span id='total-price'>{totalPrice}</span>
						</span>
					</p>
				</>
			) : (
				<p className='text-2xl pt-8 font-bold text-red-500'>
					Cart is empty
				</p>
			)}
		</div>
	)
}

export default Cart
