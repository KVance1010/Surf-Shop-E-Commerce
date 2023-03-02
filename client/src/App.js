import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Admin from './pages/Admin';
import CategoryList from './components/CategoryList';
import Apparel from './pages/Apparel';
import Header from './components/header/Header';
import './css/App.css';
import ItemList from './components/ItemList';


const client = new ApolloClient({
	uri: '/graphql',
	cache: new InMemoryCache(),
});

function App() {
	const [currentPage, setCurrentPage] = useState('');
	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<ApolloProvider client={client}>
			<Router>
				<Header />
				<Routes>
					<Route
						path="/"
						element={
							<Home
								currentPage={currentPage}
								handlePageChange={handlePageChange}
							/>
						}
					></Route>
					<Route
						path="/admin"
						element={
							<Admin
								currentPage={currentPage}
								handlePageChange={handlePageChange}
							/>
						}
					></Route>
					<Route
						path="/apparel"
						element={
							<Apparel
								currentPage={currentPage}
								handlePageChange={handlePageChange}
							/>
						}
					></Route>
					<Route
						path="/apparel/:categoryName"
						element={<CategoryList/>}
					></Route>
					<Route
						path="/apparel/:categoryName/:itemList"
						element={<ItemList/>}
					></Route>
					<Route
						path="/apparel/:categoryName/:itemList/:item"
						element={<ItemList/>}
					></Route>
					<Route
						path="/surfboards/:categoryName"
						element={<CategoryList
							currentPage={currentPage}
							handlePageChange={handlePageChange}/>}
					></Route>
					<Route
						path="/surfboards/:categoryName/:itemList"
						element={<ItemList/>}
					></Route>
					<Route
						path="/apparel/:categoryName/:itemList/:item"
						element={<ItemList/>}
					></Route>
					<Route
						path="/accessories"
						element={<CategoryList
							currentPage={currentPage}
							handlePageChange={handlePageChange}/>}
					></Route>
					<Route
						path="/accessories/:itemList"
						element={<ItemList/>}
					></Route>
					<Route
						path="/accessories/:itemList/:item"
						element={<ItemList/>}
					></Route>
				</Routes>
			</Router>
		</ApolloProvider>
	);
}

export default App;
