import {Outlet} from "react-router-dom";

export const AppLayout = () => {
    return (
        <div>
            <h1>Layout</h1>
            <Outlet />
        </div>
    )
}
