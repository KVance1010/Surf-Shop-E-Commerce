import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Admin from './pages/Admin';
import CategoryList from './components/CategoryList';
import Apparel from './pages/Apparel';
import Header from './components/header/Header';
import './css/App.css';
import ItemList from './components/ItemList';
import Item from './components/Item';
export const cartContext = createContext()

const client = new ApolloClient({
	uri: '/graphql',
	cache: new InMemoryCache(),
});

function App() {
	const [currentPage, setCurrentPage] = useState('');
	const handlePageChange = (page) => setCurrentPage(page);
	const cartValue = {message: 'nerp'};

	return (
		<ApolloProvider client={client}>
			<cartContext.Provider value={cartValue}>
			<Router>
				<Header currentPage={currentPage} handlePageChange={handlePageChange} />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/admin" element={<Admin />}></Route>
					<Route path="/apparel" element={<Apparel />}></Route>
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
						path="/surfboards/:categoryName"
						element={<CategoryList />}
					></Route>
					<Route
						path="/surfboards/:categoryName/:itemList"
						element={<ItemList />}
					></Route>
					<Route
						path="/surfboards/:categoryName/:itemList/:item"
						element={<Item />}
					></Route>
					<Route
						path="/apparel/:categoryName/:itemList/:item"
						element={<Item />}
					></Route>
					<Route
						path="/accessories/:categoryName"
						element={<CategoryList />}
					></Route>
					<Route
						path="/accessories/:categoryName/:itemList"
						element={<ItemList />}
					></Route>
					<Route
						path="/accessories/:categoryName/:itemList/:item"
						element={<Item />}
					></Route>
				</Routes>
			</Router>
			</cartContext.Provider>
		</ApolloProvider>
	);
}

export default App;
