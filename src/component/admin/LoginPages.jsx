import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ClientApi from '../../api/ClientApi';
import { getCookie, setCookie } from '../../utils/manageCookies';

function LoginPages() {
  const [details, setDetails] = useState({});
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const adminToken = getCookie('admintoken');
    if (adminToken?.length > 0) {
      navigate('/admindashboard');
    }
  }, []);

  const doLogin = async (event) => {
    event.preventDefault();
    setMessage(undefined);
    setError(undefined);
    try {
      const res = await ClientApi.adminLogin(details);
      console.log(res);
      const token = res.data.token;
      setCookie('admintoken', token);
      ClientApi.adminSetAuthHeader();
      navigate('/admindashboard');
      // setDetails(res);
      setMessage(res.data.message);
    } catch (error) {
      console.log(error);

      setError(error.response.data.message);
    }
  };
  return (
    <div>
      <div className=" bg-gradient-to-r from-violet-300 to-indigo-200 ">
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-fuchsia-200 to-cyan-200 w-auto md:w-1/2 ml-30 mt-20 mb-20 pb-20 shadow-xl ">
            <div className="flex justify-center mt-10">
              {message && (
                <h3 className="font-serif text-xl text-green-500  ">
                  {message}
                </h3>
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
                  <h1 className="text-center font-bold text-3xl text-violet-500 mt-10 pb-5 font-serif ">
                    Login Here
                  </h1>
                  <div className="flex justify-center">
                    <input
                      type="email"
                      placeholder="Enter the your email..."
                      className="border-2 border-purple-700 px-2 py-2 mt-10 w-11/12 md:w-80 rounded-lg"
                      onChange={(e) =>
                        setDetails((prevState) => ({
                          ...prevState,
                          email: e.target.value,
                        }))
                      }
                    ></input>
                  </div>
                  <div className="flex justify-center">
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
                  <div className="flex justify-center">
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
    </div>
  );
}

export default LoginPages;
