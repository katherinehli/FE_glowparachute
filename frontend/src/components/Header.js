import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => (
    <header className="bg-gray-100 p-6">
        <div className="flex items-center justify-between flex-wrap">
            <div className="block">
                <Link to="/"><span className="font-semibold text-xl tracking-tight text-gray-800">Multifamily Real Estate Model App</span></Link>
            </div>
            <nav className="block">
                <Link to="/"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">Home page</span></Link>
                <Link to="/contact"><span className="inline-block text-gray-800 hover:text-gray-600 mr-4">Create page</span></Link>
                <Link to="/"><span className="inline-block px-4 py-2 leading-none border rounded text-gray-600 border-gray-600 hover:text-gray-900 hover:border-gray-900">Login</span></Link>
            </nav>
        </div>
    </header>
);

const Header2 = () => (
    <nav className={"navbar navbar-expand-lg bg-body-tertiary"}>
        <div className={"container-fluid"}>
            <a className={"navbar-brand"} href={"/"}>Multifamily Real Estate Model App</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Login Page</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/create">Create Page</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Header2;
