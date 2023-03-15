import { React } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        try {
            localStorage.setItem('registration', 'true');
            toast.success('Registration successful!', {
                autoClose: 1000,
            });
            navigate('/patient');
            const login = document.getElementById('login');
            const register = document.getElementById('register');
            const logout = document.getElementById('logout');
            login.style.display = 'none';
            register.style.display = 'none';
            logout.style.display = 'inline';
        }
        catch (err) {
            toast.error('Registration failed!');
        }
        e.preventDefault();
    }

    const handleInput = (e) => {
        if (e.target.value < 0) {
            e.target.value = 0;
        }
        e.target.value = Math.floor(e.target.value);
    }

    return (
        <div className="flex w-fit justify-center items-center text-center flex-col mx-auto mt-32 p-0 border-2 border-solid border-slate-200 rounded-md">
            <div className="w-full m-0 p-4 text-lg bg-slate-200">Please enter your details to register</div>
            <form className="p-4">
                <table className="w-full text-base border-separate border-spacing-4">
                    <tbody>
                        <tr>
                            <td className="text-right">Name:</td>
                            <td className="text-left">
                                <input type="text" placeholder="John Doe" className="w-full px-2 py-1 border-2 border-solid border-slate-200" />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-right">Age:</td>
                            <td className="text-left">
                                <input type="number" placeholder="21" className="w-full px-2 py-1 border-2 border-solid border-slate-200" min="0" step="1" onInput={handleInput} />
                            </td>
                        </tr>
                        <tr>
                            <td className="text-right">Registering as</td>
                            <td className="text-left">
                                <select className="w-full px-2 py-1 bg-white border-2 border-solid border-slate-200">
                                    <option value="patient">Patient</option>
                                    <option value="doctor">Doctor</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="h-12 mt-4 mb-0 pb-0">
                    <Link className="p-2 text-white bg-blue-600 rounded-md" to="/register">
                        <button type="submit" onClick={handleSubmit}>Register</button>
                    </Link>
                </div>
            </form>

        </div>
    );
}

export default Register;
