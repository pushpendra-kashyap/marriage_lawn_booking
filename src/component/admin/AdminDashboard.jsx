import React, { useEffect, useState } from 'react';
import Tree from '../Tree/index';
import axios from 'axios';
import { getCookie } from '../../utils/manageCookies';
import { useNavigate } from 'react-router-dom';

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

function AdminDashboard() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const adminToken = getCookie('admintoken');
    console.log(adminToken);
    if (!adminToken) {
      navigate('/admin');
    }
  }, []);

  const handleDashboard = async () => {
    try {
      const categoryRes = await axios.get(
        'https://clear-crow-slip.cyclic.app/categories'
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
    const adminToken = getCookie('admintoken');
    console.log(adminToken);
    if (!adminToken) {
      navigate('/admin');
    }
  }, []);
  return (
    <>
      <div className="mt-20 mb-20 border border-black bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
        <Tree categories={categories} />
      </div>
    </>
  );
}

export default AdminDashboard;
