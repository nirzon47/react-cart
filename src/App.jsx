import Cart from './Components/Cart'
import Header from './Components/Header'
import ProductList from './Components/ProductList'
import { DataProvider } from './Context/Contexts'

const App = () => {
	return (
		<DataProvider>
			<Header />
			<main className='p-4 md:p-16 lg:grid lg:grid-cols-8'>
				<div className='col-span-5'>
					<ProductList />
				</div>
				<Cart />
			</main>
		</DataProvider>
	)
}

export default App
