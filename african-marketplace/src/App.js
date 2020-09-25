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
import RegisterCard from './RegisterCard'

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

	const [register, setRegister] = useState([
		{
		  firstname: "Sathya",
		  lastname: "Ganesan",
		  email: "sathya@gmail.com",
		  password: "password",
		  conpassword: "password",
		  state: "Virginia",
		  status: "Business Owner"
		}
	  ]);
	
	  const addNewUser = (formData) => {
		const newUser = {
		  firstname: formData.firstname,
		  lastname: formData.lastname,
		  email: formData.email,
		  password: formData.password,
		  conpassword: formData.conpassword,
		  state: formData.state,
		  status: formData.status
		}
		setRegister([...register, newUser]);
	  };

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{ cart, removeItem  }}>
					<Navigation cart={cart} />

					{/* Routes */}
					<Route exact path="/">
						<LoginCompo/>
					</Route>

					<Route path = "/register">
        				<RegisterCompo registerAttr={addNewUser} />
        				<RegisterCard cardAttr = {register} />
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