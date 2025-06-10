import React from 'react'
import './style.css'

export default function Menu({ data }) {
    const renderStars = (rating) => {
        const stars = []
        for (let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} style={{ color: i < rating ? 'orange' : '#ccc' }}>★</span>
            )
        }
        return stars
    }
    return (
        <div className='menu'>
            <h1>Food Full of treaty Love</h1>
            <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
            <div className="cards">
                {data.map((item, index) => (
                    <div className="card" key={index}>
                        <img src={item.img_url} alt="" />
                        <h2>{item.title} <span>{item.price}</span></h2>
                        <p>{item.desc}</p>
                        <div className="bottom">
                            <button>+</button>
                            <div className="stars">{renderStars(item.rating)}</div>
                        </div>
                    </div>
                ))}
            </div>
            <button>Learn More</button>
        </div>
    )
}
