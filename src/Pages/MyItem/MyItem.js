import React, { useEffect, useState } from "react";
import PageTitle from "../Hooks/PageTitle";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import "./MyItem.css";
import axios from "axios";
import { async } from "@firebase/util";
import SingleItem from "./SingleItem";
import Loading from "../Loading/Loading";
const MyItem = () => {
  const [user, loading] = useAuthState(auth);

  const email = user?.email;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const run = async () => {
      await axios
        .get(`https://boiling-oasis-56401.herokuapp.com/myItem/${email}`)
        .then(function (res) {
          setProducts(res.data);
        });
    };
    run();
  }, [email]);
  const handleDelete = async (id) => {
    console.log(id);
    const proceed = window.confirm("Are you Sure You want to delete this", id);
    if (proceed) {
      await axios
        .delete(`https://boiling-oasis-56401.herokuapp.com/product/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            const remaining = products.filter((product) => product._id != id);
            setProducts(remaining);
          }
        });
    }
  };
  return (
    <div className="all-products-container">
      <PageTitle title="My Item"></PageTitle>
      {products.map((product) => (
        <SingleItem
          key={product._id}
          handleDelete={handleDelete}
          product={product}
        />
      ))}
    </div>
  );
};

export default MyItem;
