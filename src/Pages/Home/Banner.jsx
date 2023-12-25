import { useNavigate } from 'react-router-dom';
import banner from '../../assets/banner.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
const Banner = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleExplore = () =>{
        if(user){
            navigate('/dashboard')
        }else{
            document.getElementById('my_modal_3').showModal()
        }
    }
    return (
        <div className='md:mt-9 w-11/12 mx-auto'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className=''>
                    <h1 className='text-4xl font-bold mb-4'>Your Ultimate Task Management Solution</h1>
                    <p className='text-lg mb-6'>Simplify your tasks with TaskHub. Manage your to-dos efficiently and stay organized.</p>
                    <button onClick={handleExplore} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                        Let's Explore
                    </button>
                </div>
                <img className='w-full md:w-1/2' src={banner} alt="TaskHub Banner" />
            </div>
        </div>

    );
};

export default Banner;