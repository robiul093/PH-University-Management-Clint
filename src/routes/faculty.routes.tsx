import FacultlyDashboard from "../pages/faculty/FacultyDashboard";
import OfferedCourse from "../pages/faculty/OfferedCourse";


export const facultyPaths = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <FacultlyDashboard />,
    },
    {
        name: 'offered Course',
        path: 'offered-course',
        element: <OfferedCourse />,
    },
]