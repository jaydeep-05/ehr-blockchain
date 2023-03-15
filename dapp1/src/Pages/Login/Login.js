import { React } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Bitcoin } from '../../Components/Images/bitcoin.svg';

const Login = () => {
    return (
        <div>
            <div className="flex justify-center mt-20">
                <Bitcoin className="h-96" />
            </div>
            <div className="flex w-96 justify-center items-center text-center flex-col mx-auto my-12 p-0 border-2 border-solid border-slate-200">
                <div className="w-full m-0 p-4 text-lg bg-slate-200">Welcome to Lorem Ipsum</div>
                <div className="p-4">
                    <div className="w-5/6 text-sm text-left mx-auto my-4 px-4 py-2 bg-amber-100 rounded-md hidden"><strong>Warning!</strong> Unregistered user
                        <br />
                        Click <Link to="/register" className="text-blue-500">here</Link> to register
                    </div>
                    <div className="text-sm mt-4 p-2">Login is linked to your Metamask Account</div>
                </div>
                
                <div className="h-12 mt-4 mb-0 pb-0">
                    <Link className="p-2 text-white bg-blue-600 rounded-md" to="/register">
                        <button>Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
