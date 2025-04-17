import React from 'react';
import Navbar from './Nav/Navbar';
import Home from './Pages/Home/Home';
import { Footer } from './Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import { Gallery } from './Pages/Gallery/Gallery';
const App = () => (React.createElement(React.Fragment, null,
    React.createElement(Navbar, null),
    React.createElement("main", { className: styles.pageContainer },
        React.createElement(Routes, null,
            React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
            React.createElement(Route, { path: "/gallery", element: React.createElement(Gallery, null) }))),
    React.createElement(Footer, null)));
export default App;
//# sourceMappingURL=App.js.map