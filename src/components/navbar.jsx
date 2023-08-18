import { BsFillCartFill } from "react-icons/bs";

function Navbar({cartItemCount}) {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Shop Cart</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Features</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Shop
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/action">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/action">Popular Items</a></li>
                                <li><a className="dropdown-item" href="/action">New Products</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <a href="/cart" className="d-flex align-items-center btn btn-outline-dark">
                            <BsFillCartFill className="mx-1" /> Cart ({cartItemCount})
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;