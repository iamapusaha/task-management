import { useContext } from "react";
import Menu from "./Menu";
import Tasks from "./Tasks";
import { AuthContext } from "../../Providers/AuthProvider";

const Dashboard = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className="flex">
            {/* 2 parts */}
            <Menu></Menu>
            <Tasks></Tasks>
        </div>
    );
};

export default Dashboard;