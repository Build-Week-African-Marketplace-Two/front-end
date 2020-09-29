import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';
import data from './data';
import ItemCompo from './ItemCompo';
import axios from 'axios';

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
	
	// Login Component State :
	const [signin, setSignin] = useState([{
		username: "John",
		password: "password"
	  }]);
	  const userSignin = (signinData) => {
		const welcomeUser = {
		  username: signinData.email,
		  password: signinData.password,
		}
		setSignin([...signin, welcomeUser]);
	};
	
	// Product Componet State:
	const [product, setProduct] = useState([]);
	
	useEffect(() => {
	  axios
		.get(`https://bw-african-marketplace.herokuapp.com/api/items`)
		.then((res) => {
		  setProduct(res.data);
		})
		.catch((err) => {
		  console.log(err);
		});
	}, []);
	console.log(product);

	return (
		<div className="App">
			<ProductContext.Provider value={{ products, addItem }}>
				<CartContext.Provider value={{ cart, removeItem  }}>
					<Navigation cart={cart} />
					
					
					<Route exact path="/">
					<LoginCompo loginAttr={userSignin} />
					</Route>

					<Route path = "/register">
        				<RegisterCompo registerAttr={addNewUser} />
        				<RegisterCard cardAttr = {register} />
      				</Route> 

					<Route exact path="/products">
						<ItemCompo itemAttr = {product} />
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