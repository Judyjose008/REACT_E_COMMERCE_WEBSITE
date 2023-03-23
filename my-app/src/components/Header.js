import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';

const Headers = () => {
    return (
        <>
            <header className="header-top-strip bg-dark py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <p className="text-start text-white mb-0">Free shipping over 1000 countries</p>
                        </div>
                        <div className="col-6">
                            <a className="text-start text-white mb-0" href="tel: 5014000901">Call +1 501 400 0901</a>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-middile-strip bg-dark py-3'>
                <div className="container-xxl" >
                    <div className="row">
                        <div className="col-md-2 col-xs-12">
                            <h2><Link className="text-white">DineDirect.</Link></h2>
                        </div>
                        <div className="col-md-5 col-xs-12">
                            <div class="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <span className="input-group-text bg-warning p-1 fs-4" id="basic-addon2"><BsSearch /></span>
                            </div>
                        </div>
                        <div className="col-md-5 col-xs-12">
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <Link className="d-flex align-items-center">
                                        <img src="images/compare.svg"></img>
                                        <p className="text-white">Compare<br />Products</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className="d-flex align-items-center">
                                        <img src="images/wishlist.svg"></img>
                                        <p className="text-white">Favourite<br />Products</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className="d-flex align-items-center">
                                        <img src="images/user.svg"></img>
                                        <p class="text-white">User <br />Login</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className="d-flex align-items-center">
                                        <img src="images/cart.svg"></img>
                                        <div className='d-flex flex-column'>
                                            <span className="badge bg-warning">0</span>
                                            <p className="text-white mt-10">$500</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <header className='header-lower-strip bg-dark py-3'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-md-2 col-xs-12 m-1'>
                            <div class="btn-group">
                                <button type="button" className="btn btn-dark btn-rounded dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <img className='m-1' src="images/menu.svg"/>
                                    Shop Category
                                </button>
                                <ul class="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="#">Separated link</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='col-md-8 col-xs-12 m-1'>
                            <div className='d-flex align-items-center grid gap-2'>
                                <NavLink className='btn btn-dark btn-rounded' to='/'>Home</NavLink>
                                <NavLink className='btn btn-dark btn-rounded' to='/our-tore'>Our Store</NavLink>
                                <NavLink className='btn btn-dark btn-rounded' to='/contact'>Contact</NavLink>
                                <NavLink className='btn btn-dark btn-rounded' to='/blogs'>Blogs</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
};

export default Headers