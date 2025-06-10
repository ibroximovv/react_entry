import React from 'react'
import './style.css'

export default function Features({ data }) {
    console.log()
  return (
    <div className='features_wrap'>
        <h1>Food with a New Passion</h1>
        <div className="bottom">
            { data.map((item, index) => (
                <div className='card' key={index}>
                    <div className="img-radius">
                        <img src={item.img_url} alt="" />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
