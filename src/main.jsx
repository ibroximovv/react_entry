import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar/index.jsx'
import Header_content1 from './components/Header-content1/index.jsx'
import Features from './components/Features/index.jsx'
import About_us from './components/About-us/index.jsx'
import Menu from './components/Menu/index.jsx'
import Take_away from './components/Take_away/index.jsx'
import Testimonial from './components/Testimonial/index.jsx'
import Contact from './components/Contact/index.jsx'
import Footer from './components/Footer/index.jsx'

const data = [
  { img_url: "src/assets/Group 94 (1).png", title: 'Quality Food', desc: 'It can be a very secure path to earn good money and make you very successful creative entrepreneur.' },
  { img_url: "src/assets/food-delivery.png", title: 'Food Delivery', desc: 'It can be a very secure path to earn good money and make you very successful creative entrepreneur.' },
  { img_url: "src/assets/Group 93.png", title: 'Super Taste', desc: 'It can be a very secure path to earn good money and make you very successful creative entrepreneur.' },
]

const data2 = [
  { 
    img_url: 'src/assets/XAWO3cHvnE.jpg',
    title: 'Vegie Muffen',
    price: '16$',
    desc: 'There are many things are needed to start the Fast Food Business.',
    rating: 4
  }, 
  {
    img_url: 'src/assets/TMrjigyd3v.jpg',
    title: 'Salads',
    price: '12$',
    desc: 'There are many things are needed to start the Fast Food Business.',
    rating: 5
  },
  { 
    img_url: 'src/assets/5N8cjhxWSH 1.jpg',
    title: 'Burger',
    price: '10$',
    desc: 'There are many things are needed to start the Fast Food Business.',
    rating: 3
  }, 
  {
    img_url: 'src/assets/sizf4VPAqn.jpg',
    title: 'Delmonico Steak dish',
    price: '14$',
    desc: 'There are many things are needed to start the Fast Food Business.',
    rating: 2
  },
  { 
    img_url: 'src/assets/ba5inQ7lOC 1.jpg',
    title: 'Egg Masala',
    price: '9$',
    desc: 'There are many things are needed to start the Fast Food Business.',
    rating: 4
  }, 
  {
    img_url: 'src/assets/CcKMDGIS9J 1.jpg',
    title: 'Peach Melba dish',
    price: '15$',
    desc: 'There are many things are needed to start the Fast Food Business.',
    rating: 3
  },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <Header_content1 />
    <Features data = { data.map((value) => (value)) }/>
    <About_us />
    <Menu data = {data2} />
    <Take_away />
    <Testimonial />
    <Contact />
    <Footer />
  </StrictMode>,
)
