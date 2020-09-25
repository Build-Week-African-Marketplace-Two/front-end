import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import LoginCompo from '../src/LoginCompo';
import RegisterCompo from './RegisterCompo'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart

		setCart([...cart, item])

	};

	const removeItem = itemID => {
		//remove the selected item from the cart

		setCart(cart.filter(item => itemID !== item.id));
	}

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{ cart, removeItem  }}>
					<Navigation cart={cart} />

					{/* Routes */}
					<Route exact path="/">
						<LoginCompo/>
					</Route>

					<Route exact path='/register'>
						<RegisterCompo />
					</Route>

					<Route exact path="/products">
						<Products/>
					</Route>

					<Route path="/cart">
						<ShoppingCart cart={cart} />
					</Route>
				</CartContext.Provider>	
			</ProductContext.Provider>
		</div>
	);
}

export default App;