import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import  { setContext } from '@apollo/client/link/context'
import Home from './pages/Home';
import Admin from './pages/Admin';
import Update from './pages/Update'
import CategoryList from './components/CategoryList';
import Apparel from './pages/Apparel';
import Header from './components/header/Header';
import Surfboards from './pages/Surfboards';
import './css/App.css';
import ItemList from './components/ItemList';
import Item from './components/Item';
import Cart from './pages/Cart'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Checkout from './pages/Checkout';
import Accessories from './pages/Accessories';
import Account from './pages/Account'
import { CartProvider } from './utils/cartContext';

const httpLink = createHttpLink({
	uri: '/graphql',
  });

const authLink = setContext((_, { headers }) => {
	const token = localStorage.setItem('id_token');
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : ''
		}
	}
})

const client = new ApolloClient({
	uri: '/graphql',
	cache: new InMemoryCache(),
});

function App() {
	const [currentPage, setCurrentPage] = useState('');
	const handlePageChange = (page) => setCurrentPage(page);
	

	return (
		<ApolloProvider client={client}>
			<CartProvider>
				<Router>
					<Header currentPage={currentPage} handlePageChange={handlePageChange} />
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/admin" element={<Admin />}></Route>
						<Route path="/update/:uuid" element={<Update />}></Route>
						<Route path="/apparel" element={<Apparel />}></Route>
						<Route path='/cart' element={<Cart />}></Route>
						<Route path='/login' element={<Login />}></Route>
						<Route path='/signup' element={<Signup />}></Route>
						<Route path='/checkout' element={<Checkout />}></Route>
						<Route path='/account' element={<Account />}></Route>
						<Route
							path="/apparel/:categoryName"
							element={<CategoryList />}
						></Route>
						<Route
							path="/apparel/:categoryName/:itemList"
							element={<ItemList />}
						></Route>
						<Route
							path="/apparel/:categoryName/:itemList/:item"
							element={<Item />}
						></Route>
						<Route
							path="/surfboards"
							element={<Surfboards />}
						></Route>
						<Route
							path="/surfboards/:itemList"
							element={<ItemList />}
						></Route>
						<Route
							path="/surfboards/:itemList/:item"
							element={<Item />}
						></Route>
						<Route
							path="/accessories"
							element={<Accessories />}
						></Route>
						<Route
							path="/accessories/:itemList"
							element={<ItemList />}
						></Route>
						<Route
							path="/accessories/:itemList/:item"
							element={<Item />}
						></Route>
					</Routes>
				</Router>
			</CartProvider>
		</ApolloProvider>
	);
}

export default App;
