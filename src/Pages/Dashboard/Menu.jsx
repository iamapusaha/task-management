import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
    const {logout} = useContext(AuthContext)
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    return (
        <div className="border md:w-1/6 h-screen p-3 ">
            {user&&<><img className="rounded-full mx-auto" src={user.photoURL} alt="" />
            <p className="text-2xl text-center">{user.displayName}</p>
            </>}
            <hr className="mt-5"></hr>
            <p className="pt-5 text-xl"><Link to='/'>Home</Link></p>
            <p className="pt-5 text-xl cursor-pointer" onClick={() => { logout().then(()=>{navigate('/')}) }}>Logout</p>
        </div>
    );
};

export default Menu;