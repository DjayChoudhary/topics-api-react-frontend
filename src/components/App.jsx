import React from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
    return (
        <div className="container">
            <div className="d-grid gap-3">
                <Link to="/topics/new" className="btn btn-primary">
                    Add New Topic
                </Link>

                <Link to="/topics/all" className="btn btn-success">
                    View All Topics
                </Link>
            </div>
            <div className="mt-5">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
