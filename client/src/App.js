import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './App.css';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Header from './components/Header';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <Header/>
        <Routes>
          <Route
            path='/'
            element={<Home/>}>
          </Route>
          <Route
            path='/admin'
            element={<Admin/>}>
          </Route>
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
