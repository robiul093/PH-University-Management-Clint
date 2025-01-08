import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";


type TRoute = {
    path: string,
    element: ReactNode
};

type TSidebarItem = {
    key: string;
    label: ReactNode;
    children?: TSidebarItem[];
};

export const adminPath = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />
    },
    {
        name: 'User Management',
        Childeren: [
            {
                name: 'Create Admin',
                path: 'create-admin',
                element: <CreateAdmin />
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: <CreateFaculty />
            },
            {
                name: 'Create Student',
                path: 'create-student',
                element: <CreateStudent />
            },
        ]
    }
];

export const adminRoutes = adminPath.reduce((acc: TRoute[], item) => {
    if (item.name && item.path) {
        acc.push({
            path: item.path,
            element: item.element
        })
    };
    if (item.Childeren) {
        item.Childeren.forEach(child => {
            acc.push({
                path: child.path,
                element: child.element
            })
        })
    }
    return acc
}, []);


export const adminSidebarItems = adminPath.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.element) {
        acc.push({
            key: item.name,
            label: <NavLink to={`/admin/${item.path}`}>{item.name}</NavLink>
        })
    };

    if (item.Childeren) {
        acc.push({
            key: item.name,
            label: item.name,
            children: item.Childeren.map(child => ({
                key: child.name,
                label: <NavLink to={`/admin/${child.path}`}>{child.name}</NavLink>
            }))
        })
    }
    return acc
}, [])


// export const adminPath = [
//     {
//         index: true,
//         element: <AdminDashboard />
//     },
//     {
//         path: 'dashboard',
//         element: <AdminDashboard />
//     },
//     {
//         path: 'create-admin',
//         element: <CreateAdmin />
//     },
//     {
//         path: 'create-faculty',
//         element: <CreateFaculty />
//     },
//     {
//         path: 'create-student',
//         element: <CreateStudent />
//     },
// ];

