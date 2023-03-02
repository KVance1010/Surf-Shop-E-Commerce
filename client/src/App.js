import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Admin from './pages/Admin';
import CategoryList from './components/CategoryList';
import Category from './components/Category';
import Apparel from './pages/Apparel';
import Header from './components/header/Header';
<<<<<<< HEAD
import './css/App.css';
import {
	mensApparelCategory,
	womansApparelCategory,
	surfboardsCategory,
	surfAccessoriesCategory,
} from './utils/categoryList';
=======
import "./css/App.css";
import ItemList from './components/ItemList';

>>>>>>> 22cacc7dea6d765f4f3043eddbbdde577beecc88

const client = new ApolloClient({
	uri: '/graphql',
	cache: new InMemoryCache(),
});

function App() {
	const [currentPage, setCurrentPage] = useState('');
	const handlePageChange = (page) => setCurrentPage(page);
<<<<<<< HEAD
	const [currentCategory, setCurrentCategory] = useState({});
	const handleCurrentCategory = (category) => setCurrentCategory(category);
=======

>>>>>>> 22cacc7dea6d765f4f3043eddbbdde577beecc88

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
							/>
						}
					></Route>
					<Route
<<<<<<< HEAD
						path="/category"
						element={<CategoryList categories={currentCategory} />}
=======
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
						path="/surfboards"
						element={<CategoryList
							currentPage={currentPage}
							handlePageChange={handlePageChange}/>}
					></Route>
					<Route
						path="/surfboards/:itemList"
						element={<ItemList/>}
					></Route>
					<Route
						path="/apparel/:categoryName/:itemList/:item"
						element={<ItemList/>}
					></Route>
					<Route
						path="/accessories"
						element={<ItemList
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
>>>>>>> 22cacc7dea6d765f4f3043eddbbdde577beecc88
					></Route>
				</Routes>
			</Router>
		</ApolloProvider>
	);
}

export default App;
