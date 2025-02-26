import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

const App = () => {
    return (
        <Router>
            <div className="App">
            <Helmet>
                <style>
                    {`
                        body {
                            background-color:rgb(121, 29, 106);
                            background-size: cover;
                            background-position: center;
                        }
                    `}
                </style>
               </Helmet>
                <Header />
                <Routes>
                    
                    <Route path="/" element={<Body />} />
                    
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;