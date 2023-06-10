import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Tree from '../user/Tree/index';
import { getCookie } from '../../utils/manageCookies';
import ClientApi from '../../api/ClientApi';

export const Context = createContext();
function assetsChildAdder(assets, c) {
  return assets
    .filter((cat0) => c.id === cat0.cid)
    .map((a1) => {
      return {
        aid: a1.id,
        catId: a1.cid,
        name: a1.name,
        price: a1.price,
        description: a1.description,
      };
    });
}

function Booking() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = getCookie('token');

    if (!userToken) {
      navigate('/users/login');
    }
  }, []);

  const handleDashboard = async () => {
    try {
      const categoryRes = await axios.get(
        ' https://clear-crow-slip.cyclic.app/categories'
      );
      const assetRes = await axios.get(
        'https://clear-crow-slip.cyclic.app/assets'
      );
      console.log(categoryRes);
      console.log(assetRes);

      const list = categoryRes.data.categories.filter((c) => c.cid === null);

      list.forEach((c1) => {
        c1.children = categoryRes.data.categories.filter(
          (cat1) => c1.id === cat1.cid
        );
        if (c1.children.length === 0) {
          c1.children = assetsChildAdder(assetRes.data.assets, c1);
        }

        c1.children.forEach((c2) => {
          c2.children = categoryRes.data.categories.filter(
            (cat2) => c2.id === cat2.cid
          );
          if (c2.children.length === 0) {
            c2.children = assetsChildAdder(assetRes.data.assets, c2);
          }
          c2.children.forEach((c3) => {
            c3.children = assetsChildAdder(assetRes.data.assets, c3);
          });
        });
      });

      setCategories(list);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleDashboard();
  }, []);
  useEffect(() => {
    const userToken = getCookie('token');
    console.log(userToken);
    if (!userToken) {
      navigate('/login');
    }
  }, []);

  function formatDate(input) {
    var datePart = input.match(/\d+/g),
      year = datePart[0].substring(0), // get only two digits
      month = datePart[1],
      day = datePart[2];

    return day + '-' + month + '-' + year;
  }

  const bookLawn = async () => {
    try {
      const d = formatDate(date);

      const det = { date: d, items };
      const res = await ClientApi.bookLawn(det);
      console.log(res);
      alert('booking succesfully');
      setItems([]);
      setDate('');
    } catch (error) {
      console.log(error);
      alert(error?.response?.data?.message);
    }
  };
  return (
    <>
      <Context.Provider value={{ items, setItems }}>
        <div className="py-10 min-h-screen px-5 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
          <input type="date" onChange={(e) => setDate(e.target.value)} />
          <Tree categories={categories} />

          <div className="flex justify-center py-5">
            <button
              className="bg-blue-500 text-white px-7 py-1.5 rounded"
              onClick={bookLawn}
            >
              Book Lawn
            </button>
          </div>
        </div>
      </Context.Provider>
    </>
  );
}

export default Booking;
