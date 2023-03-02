import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Admin from './pages/Admin';
import CategoryList from './components/CategoryList';
import Apparel from './pages/Apparel'
import Header from './components/header/Header';
import "./css/App.css";
import ItemList from './components/ItemList';


const client = new ApolloClient({
	uri: '/graphql',
	cache: new InMemoryCache(),
});

function App() {
	const [currentPage, setCurrentPage] = useState('');
	const handlePageChange = (page) => setCurrentPage(page);
	
	const [currentTags, setCurrentTags] = useState([]);
	const handleCurrentTags = (tags) => {setCurrentTags(tags)}


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
								handleCurrentTags={handleCurrentTags}
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
						path="/:page"
						element={
							<Apparel
								currentPage={currentPage}
								handlePageChange={handlePageChange}
								handleCurrentTags={handleCurrentTags}
							/>
						}
					></Route>
					<Route
						path="/apparel/:categoryName"
						element={
							<CategoryList/>
						}
					></Route>
					<Route
						path="/item-list/:tags"
						element={
							<ItemList
								
							/>
						}
					></Route>
				</Routes>
			</Router>
		</ApolloProvider>
	);
}

export default App;
