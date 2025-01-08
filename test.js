export const adminPath2 = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: "<AdminDashboard />"
    },
    {
        name: 'User Management',
        Childeren: [
            {
                name: 'Create Admin',
                path: 'create-admin',
                element: "<CreateAdmin />"
            },
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: "<CreateFaculty />"
            },
            {
                name: 'Create Student',
                path: 'create-student',
                element: "<CreateStudent />"
            },
        ]
    }
];


const arr = adminPath2.reduce((acc, item) => {

    if (item.path && item.element) {
        acc.push({
            path: item.path,
            element: item.element
        });
    }

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


const arr2 = adminPath2.reduce((acc, item) => {
    console.log(item)
    if (item.path && item.element) {
        acc.push({
            path: item.path,
            element: item.element
        });
    }
})

console.log(arr2)