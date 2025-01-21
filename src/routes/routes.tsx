import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { adminPath, } from "./admin.routes";
import { routeGenerator } from "../utils/routesGenerator";
import { facultyPaths } from "./faculty.routes";
import { studentPaths } from "./student.routes";


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: 'admin',
        element: <App />,
        children: routeGenerator(adminPath)
    },
    {
        path: 'faculty',
        element: <App />,
        children: routeGenerator(facultyPaths)
    },
    {
        path: 'student',
        element: <App />,
        children: routeGenerator(studentPaths)
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },
]);

export default router;