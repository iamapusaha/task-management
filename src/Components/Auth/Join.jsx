import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { reload, updateProfile } from "firebase/auth";
import avatar from '../../../src/assets/avatar.png' 
const Join = () => {
    // global context
    const {setShowLogin,
        setLoading,
        join,loading,auth,logout
    } = useContext(AuthContext);
    const [visibility, setVisibility] = useState(false);

    // Sign Up button fuctions
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        join(email,password)
        .then(res=>{
            updateProfile(auth.currentUser,{
                displayName:name
            }).then(()=>{
                window.location.reload()
            })
        }).catch(err=>{
            setLoading(false)
            if (err.message === 'Firebase: Error (auth/email-already-in-use).') {
                alert('Email already in use')
            } else if (err.message === 'Firebase: Error (auth/invalid-email).') {
                alert('Invalid email')
            }
        })

    }
    return (
        <div className="flex flex-col
         justify-center items-center gap-6">
            
            <div className=" rounded py-3 px-5">
                <h1 className="text-3xl text-center mb-2 font-medium">Sign Up</h1>
                <p className="text-sm mb-5 text-center text-blue-500">Join the Community of Professionals</p>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:my-9 gap-2 mb-3">
                        <input type="text" className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" placeholder="Full Name" name="name" />
                        <input type="email" name='email' className="w-full outline-none focus:border-blue-500 text-base border p-3 rounded" placeholder="Email or Phone" />
                        <div className="relative">
                            <input name="password" className="w-full focus:border-blue-500  text-base outline-none border p-3 rounded" type={visibility ? 'text' : 'password'} placeholder="Password" />
                            <p onClick={() => setVisibility(!visibility)} className="absolute cursor-pointer font-semibold hover:text-blue-300 text-blue-500 right-5  bottom-3">{visibility ? 'hide' : 'show'}</p>
                        </div>
                    </div>
                    <p className="text-xs mb-1 mt-5 text-center">By clicking agree and join , you agree to Task Manager’s <span className="font-semibold text-blue-400">User  Agreement</span>, <span className="font-semibold text-blue-400">Privacy Policy</span>, and <span className="font-semibold text-blue-400">Cookie Policy</span>.</p>
                    <button className="mt-5 w-full mb-2 border rounded-full py-3 bg-blue-400 text-white font-semibold hover:bg-blue-600">{loading ? <span className="loading loading-ball loading-xs"></span> : 'Agree & Join'}</button>
                </form>
                <div className="flex items-center py-1 justify-between mb-2">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="flex-shrink mx-4 text-gray-600">or</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <button onClick={() => {}} className="w-full font-medium border py-3 rounded-full flex hover:bg-slate-50 justify-center items-center gap-3"><p>Continue with Google</p></button>
                <p className="text-center mt-6">Already on Task Manager? <Link onClick={()=>{setShowLogin(true)}}><span className="text-blue-500 cursor-pointer font-semibold">Sign in</span></Link></p>
            </div>
        </div>
    );
};

export default Join;