import { Button, Layout, } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/features/auth/authSlice";



// const items: MenuProps['items'] = [
//     {
//         key: 'Dashboard',
//         label: <NavLink to='/admin/dashboard'>Dashoard</NavLink>
//     },
//     {
//         key: 'User Management',
//         label: 'User Management',
//         children: [
//             {
//                 key: 'Create Admin',
//                 label: <NavLink to="/admin/create-admin">Create Admin</NavLink>
//             },
//             {
//                 key: 'Create Faculty',
//                 label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>
//             },
//             {
//                 key: 'Create Student',
//                 label: <NavLink to="/admin/create-student">Create Student</NavLink>
//             }
//         ]
//     },
// ]
// [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
//     (icon, index) => ({
//       key: String(index + 1),
//       icon: createElement(icon),
//       label: `nav ${index + 1}`,
//     }),
//   );

const MainLayout = () => {
    const dispatch = useAppDispatch();
    const handelLogout = () => {
        dispatch(logout())
    }
    return (
        <Layout style={{ height: '100vh' }}>
            <Sidebar />
            <Layout>
                <Header style={{ padding: 0, }} >
                    <Button className="" onClick={handelLogout}>Logout</Button>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        {/* <h1>The main content should go here</h1> */}
                        <Outlet></Outlet>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default MainLayout