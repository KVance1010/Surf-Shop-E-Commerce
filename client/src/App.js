import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import Admin from './pages/Admin';
<<<<<<< HEAD
import Header from './components/header/Header';
=======
import Apparel from './pages/Apparel'
import Header from './components/Header';
>>>>>>> 02aef32347865202d41d42feba53a2886c58f9ed


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
				</Routes>
			</Router>
		</ApolloProvider>
	);
}

//the following one renders the word hello

// function App() {
//   return (
//     <ApolloProvider client={client}>
//     hello
//     </ApolloProvider>
//   );
// }

export default App;
