import React, { useEffect, useState } from 'react';
import hotel from "../db.json";
import { useNavigate } from 'react-router-dom';

function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(hotel);
  }, []);

  const navigate = useNavigate();

  const handleAdd = (item) => {
    // Retrieve the existing cart from localStorage
    let cart = localStorage.getItem('cart');
    let updatedCart = cart ? JSON.parse(cart) : [];  // If cart exists, parse it, else initialize as an empty array

    // Add new item to the cart
    updatedCart.push(item);

    // Store the updated cart back in localStorage
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    // Navigate to the cart page
    navigate("/cart");
  };

  return (
    <div className='item w-[100%] h-[600px] flex flex-wrap justify-evenly'>
      {user.map((el) => (
        <div key={el.id} className="main-1 w-[30%] h-[300px] flex justify-center items-center">
          <div className='item'>
            <img src={el.img} alt="" className='w-[200px] h-[150px]' />
            <h1>Hotel room type: {el.roomType}</h1>
            <h1>ID: {el.id}</h1>
            <h1>Room price: {el.price}</h1>
            <h1>Hotel name: {el.name}</h1>
            <button onClick={() => handleAdd(el)} className='w-[200px] h-[30px] border-[1px] border-[black]'>
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
