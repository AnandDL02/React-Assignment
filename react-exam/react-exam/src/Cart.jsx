import React, { useEffect, useState } from 'react'

export default function Cart() {

    const [cart, setcart] = useState([])
    const [editItem, seteditItem] = useState(null)
    const [editPrice, seteditPrice] = useState('')
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const Stor = localStorage.getItem("cart")
        if (Stor) {
            setcart(JSON.parse(Stor)) || [];
        }
    }, [])

    const handleDelete = (id) => {
        const DeletedCart = cart.filter((item) => item.id !== id)
        setcart(DeletedCart)
        localStorage.setItem('cart', JSON.stringify(DeletedCart))
    }

    const handleEdit = (id) => {
        seteditItem(id)
        const itemToEdit = cart.find(item => item.id === id)
        seteditPrice(itemToEdit.price)  // Assuming price is the field to edit
    }

    const handleSaveEdit = (id) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                return { ...item, price: editPrice }
            }
            return item
        })
        setcart(updatedCart)
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        seteditItem(null)  // Close edit mode
    }

    const handleSearch = (event) => {
        setSearchTerm(event.target.value.toLowerCase())
    }

    const filteredCart = cart.filter(el => {
        return el.name.toLowerCase().includes(searchTerm) || el.roomType.toLowerCase().includes(searchTerm)
    })

    return (
        <div>
            <input 
                type="text" 
                placeholder="Search by hotel name or room type..." 
                value={searchTerm}
                onChange={handleSearch}
                className="w-[300px] h-[30px] mb-[20px] border-[1px]"
            />
            
            <div className='item w-[100%] h-[600px] flex flex-wrap justify-evenly '>
                {filteredCart.map((el) => (
                    <div key={el.id} className="main-1 w-[30%] h-[300px] flex justify-center items-center ">
                        <div className='item'>
                            <img src={el.img} alt="" className='w-[200px] h-[150px]' />
                            <h1>Hotel room type: {el.roomType}</h1>
                            <h1>ID: {el.id}</h1>
                            <h1>Room price: {editItem === el.id ? (
                                <input 
                                    type="text" 
                                    value={editPrice}
                                    onChange={(e) => seteditPrice(e.target.value)}
                                    className="w-[80px] h-[20px] border-[1px]"
                                />
                            ) : (
                                el.price
                            )}</h1>
                            <h1>Hotel name: {el.name}</h1>

                            {editItem === el.id ? (
                                <button 
                                    onClick={() => handleSaveEdit(el.id)} 
                                    className='w-[200px] h-[30px] border-[1px]'>
                                    Save
                                </button>
                            ) : (
                                <button 
                                    onClick={() => handleEdit(el.id)} 
                                    className='w-[200px] h-[30px] border-[1px]'>
                                    Edit
                                </button>
                            )}
                            <button 
                                onClick={() => handleDelete(el.id)} 
                                className='w-[200px] h-[30px] border-[1px]'>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
