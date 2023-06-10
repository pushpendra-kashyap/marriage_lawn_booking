import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { getCookie, setCookie } from '../../utils/manageCookies';
import { useNavigate } from 'react-router-dom';
import ClientApi from '../../api/ClientApi';

function SignUp() {
  const navigate = useNavigate();
  const [details, setDetails] = useState({});
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const token = getCookie('token');
    if (token?.length > 0) {
      navigate('/');
    }
  }, []);

  const doSignUp = async (event) => {
    event.preventDefault();
    try {
      const res = await ClientApi.userSignp(details);
      const token = res.data.token;
      setCookie('token', token);
      ClientApi.setAuthHeader();
      setMessage(res.data.message);
      navigate('/');
      setMessage(res.data.message);
    } catch (err) {
      console.log(err);
      if (!err.response) {
        setError('server not respond');
      }
      if (err.response) {
        setError(err.response.data.message);
      }
    }
  };

  return (
    <div>
      <div>
        <div className=" bg-gradient-to-r from-violet-300 to-indigo-200 ">
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-fuchsia-200 to-cyan-200 w-auto md:w-1/2 ml-30 mt-20 mb-20 pb-20 shadow-xl ">
              <div className="mt-10">
                {message && (
                  <h3 className="font-serif text-xxl text-green-500 text-center">
                    {message}
                  </h3>
                )}
                {error && (
                  <h3 className="font-serif text-xxl text-green-500 text-center">
                    {error}
                  </h3>
                )}
              </div>
              <form onSubmit={doSignUp} className="w-full">
                <div className="flex justify-center pt-2 w-full">
                  <div className="px-8">
                    <h1 className="font-bold text-3xl ml-10 text-violet-500 mt-10 pb-5 font-serif ">
                      SignUp Here
                    </h1>
                    <input
                      required
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
                        required
                        type="text"
                        placeholder="Enter the your name"
                        className="border-2 border-purple-700 px-2 py-2 mt-10 w-11/12 md:w-80 text-blue-500 rounded-lg"
                        onChange={(e) =>
                          setDetails((prevState) => ({
                            ...prevState,
                            name: e.target.value,
                          }))
                        }
                      ></input>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Enter the your address"
                        className="border-2 border-purple-700 px-2 py-2 mt-10 w-11/12 md:w-80 text-blue-500 rounded-lg"
                      ></input>
                    </div>
                    <div>
                      <input
                        required
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
                      <input
                        required
                        type="text"
                        placeholder="Enter the phone number"
                        className="border-2 border-purple-700 px-2 py-2 mt-10 w-11/12 md:w-80 text-blue-500 rounded-lg"
                        onChange={(e) =>
                          setDetails((prevState) => ({
                            ...prevState,
                            phone: e.target.value,
                          }))
                        }
                      ></input>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="border-2 border-purple-700 px-2 py-2 mt-10 w-11/12 md:w-80 bg-blue-400 transition-all duration-700 hover:bg-pink-500 font-serif text-xl hover:text-white rounded-lg font-semibold shadow-lg"
                      >
                        SignUp
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
