import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
            <div className="container">
                <Link className="navbar-brand" to="/">Bento Order</Link>
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {/* 首頁 */}
                        <li className="nav-item">
                            <Link className="nav-link" to = "/">Home</Link>
                        </li>
                        {/* 訂購便當 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/add">Order Bento</Link>
                        </li>
                        {/* 關於我們 */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
