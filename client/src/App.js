import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Admin from './pages/Admin';
import CategoryList from './components/CategoryList';
import Category from './components/Category';
import Apparel from './pages/Apparel';
import Header from './components/header/Header';
import './css/App.css';
import {
	mensApparelCategory,
	womansApparelCategory,
	surfboardsCategory,
	surfAccessoriesCategory,
} from './utils/categoryList';

const client = new ApolloClient({
	uri: '/graphql',
	cache: new InMemoryCache(),
});

function App() {
	const [currentPage, setCurrentPage] = useState('');
	const handlePageChange = (page) => setCurrentPage(page);
	const [currentCategory, setCurrentCategory] = useState({});
	const handleCurrentCategory = (category) => setCurrentCategory(category);

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
								men={mensApparelCategory}
								women={womansApparelCategory}
								currentPage={currentPage}
								handlePageChange={handlePageChange}
								handleCurrentCategory={handleCurrentCategory}
							/>
						}
					></Route>
					<Route
						path="/category"
						element={<CategoryList categories={currentCategory} />}
					></Route>
				</Routes>
			</Router>
		</ApolloProvider>
	);
}

export default App;
