import React from 'react';
import { Link } from 'react-router'
export default () => {
    return (
        <nav className="navbar navbar-default">

            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" tp="/">Red Dice</Link>
                </div>

                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="signup">SignUp</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
