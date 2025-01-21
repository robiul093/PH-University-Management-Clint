import { Layout, Menu } from "antd";
import { sidebarGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPath } from "../../routes/admin.routes";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";

const { Sider } = Layout;

const userRole = {
    Admin: 'admin',
    Faculty: 'faculty',
    Student: 'student'
};
const Sidebar = () => {


    const role = 'admin';
    let sidebarItems;

    switch (role) {
        case userRole.Admin:
        sidebarItems = sidebarGenerator(adminPath, userRole.Admin)
            break;

        case userRole.Faculty:
        sidebarItems = sidebarGenerator(facultyPaths, userRole.Faculty)
            break;

        case userRole.Student:
        sidebarItems = sidebarGenerator(studentPaths, userRole.Student)
            break;

        default:
            break;
    }


    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
                console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div style={{
                color: 'white',
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <h1>PH University</h1>
            </div>
            <Menu theme="dark"
                mode="inline"
                defaultSelectedKeys={['4']}
                items={sidebarItems} />
        </Sider>
    );
};


export default Sidebar