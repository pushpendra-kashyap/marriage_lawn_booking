import React from 'react';
import { useState } from 'react';
import ClientApi from '../../api/ClientApi';
import { setCookie } from '../../utils/manageCookies';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [details, setDetails] = useState({});
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const doLogin = async (event) => {
    event.preventDefault();
    setMessage(undefined);
    setError(undefined);
    try {
      const res = await ClientApi.userLogin(details);
      console.log(res);
      const token = res.data.token;
      setCookie('token', token);
      ClientApi.setAuthHeader();
      setMessage(res.data.message);
      navigate('/');
    } catch (error) {
      setError(error?.response?.data?.message);
    }
  };

  return (
    <div className=" bg-gradient-to-r from-violet-300 to-indigo-300 ">
      <div className="flex justify-center">
        <div className="bg-gradient-to-r from-fuchsia-200 to-cyan-200 w-auto md:w-1/2 ml-30 mt-20 mb-20 pb-20 shadow-xl ">
          <div className="flex justify-center mt-10">
            {message && (
              <h3 className="font-serif text-xl text-green-500  ">{message}</h3>
            )}
          </div>
          <div className="flex justify-center">
            {error && (
              <h3 className="font-serif text-xl text-green-500  ">{error}</h3>
            )}
          </div>
          <form onSubmit={doLogin}>
            <div className="flex justify-center pt-2">
              <div className="p-8">
                <h1 className="text-center font-bold text-3xl text-violet-500 mt-10 pb-5 font-serif">
                  Login Here
                </h1>
                <input
                  type="email"
                  placeholder="Enter the your email..."
                  className="border-2 border-purple-700 px-2 py-2 mt-10 w-11/12 md:w-80 text-blue-500 rounded-lg"
                  onChange={(e) =>
                    setDetails((prevState) => ({
                      ...prevState,
                      email: e.target.value,
                    }))
                  }
                ></input>
                <div>
                  <input
                    type="password"
                    placeholder="Enter the passwords"
                    className="border-2 border-purple-700 px-2 py-2 mt-10 w-11/12 md:w-80 text-blue-500 rounded-lg"
                    onChange={(e) =>
                      setDetails((prevState) => ({
                        ...prevState,
                        password: e.target.value,
                      }))
                    }
                  ></input>
                </div>
                <div>
                  <button
                    type="submit"
                    className="border-2 border-purple-700 px-2 py-2 mt-10 w-11/12 md:w-80 bg-blue-400 transition-all duration-700 hover:bg-pink-500 font-serif text-xl hover:text-white rounded-lg font-semibold shadow-lg"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
