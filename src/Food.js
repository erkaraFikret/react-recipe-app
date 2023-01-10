import React, { useState, usState } from 'react'
import axios from 'axios'
import './food.css'
import Logo from './images/food-delivery.png'


function Food() {


    const [query, setQuery] = useState('')
    const [recipe, setRecipe] = useState([])
    const [list, setList] = useState('alcohol-free')

    const YOUR_APP_ID = 'bc65b202';
    const YOUR_APP_KEY = 'c451e35bfacb88ea3b52ad668f4ff64a';
    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${list}`;


    async function getRecipe() {
        const res = await axios.get(url)
        setRecipe(res.data.hits)
        console.log(res.data)
    }

    const submitForm = (e) => {
        e.preventDefault()
        getRecipe()

    }
    return (
        <div className='App'>

            <div className="header">
                <nav className="nav">
                    <div className="logo">
                        <img src={Logo} alt="" className='img-1' />

                    </div>
                    <ul className='list'>
                        <li><a href="#">Sponsors</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">Meals</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <form className="form_1" onSubmit={submitForm}>
                        <input type="text" placeholder='enter name of product' value={query} onChange={(e) => setQuery(e.target.value)} />
                        <button className='button-1' type='submit'>Enter</button>
                    </form>
                </nav>



                <div>
                    <div className="text">
                        <h1><span>Fastest Delivery</span> On Earth</h1>
                        <p>Fell The<span> Taste</span></p>
                    </div>
                    <div className='print' id='print'>
                        {
                            recipe.map((item, index) => {
                                return (
                                    <div key={index} className="product">
                                        <img src={item['recipe']['image']} alt="" />
                                        <p><span>name : </span>{item['recipe']['label']}</p>
                                        <p><span>calorie : </span>{item['recipe']['calories'].toFixed(2)}</p>
                                        <div className='buttons'>
                                            <p><a className='a-2' href={item['recipe']['url']}>Read</a></p>
                                            <button className='button-2'>Order</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Food