import React from 'react';
import Navbar from '../components/Navbar';
import Item from '../components/Item';
import "./Home.css";


const items = [
  // Add your items here with their properties: image, rating, description, price
  { id: 1, image: "/images/watch1.jpg", rating: 4, description: 'Fire-Boltt Ninja Call Pro Plus 1.83" Smart Watch with Bluetooth Calling, AI Voice Assistance, 100 Sports Modes IP67 Rating, 240 * 280 Pixel High Resolution (Black)', price: 10 },
  { id: 2, image: '/images/pods1.jpg', rating: 5, description: 'Boult Audio UFO Truly Wireless in Ear Earbuds with 48H Playtime, Built-in App Support, 45ms Low Latency Gaming, 4 Mics ENC, Breathing LEDs, 13mm Bass Drivers Ear buds TWS, Made in India (White Opal)', price: 20 },
  { id: 3, image: '/images/realme.jpg', rating: 3, description: "realme GT 6T 5G (Fluid Silver,8GB RAM+256GB Storage) | India's 1st 7+ Gen 3 Flagship Chipset | 1.5M + AnTuTu Score | 5500mAh+120W | The World's Brightest Flagship Display", price: 30 },
  { id: 4, image: '/images/samsung.jpg', rating: 4, description: 'Samsung Galaxy S23 Ultra 5G AI Smartphone (Green, 12GB, 256GB Storage)', price: 40 },
  { id: 5, image: '/images/pods2.jpg', rating: 5, description: 'boAt Airdopes 141 Bluetooth TWS Earbuds with 42H Playtime,Low Latency Mode for Gaming, ENx Tech, IWP, IPX4 Water Resistance, Smooth Touch Controls(Bold Black), in Ear', price: 50 },
  { id: 6, image: '/images/powerbank.jpg', rating: 3, description: 'MI Power Bank 3i 20000mAh Lithium Polymer 18W Fast Power Delivery Charging | Input- Type C | Micro USB| Triple Output | Black.', price: 60 },
  { id: 7, image: "/images/headphone.jpg", rating: 4, description: 'soundcore by Anker Q20i Wireless Bluetooth Over-Ear Headphones with Hybrid Active Noise Cancelling, 40h Playtime in ANC Mode, Hi-Res Audio, Deep Bass, Personalization via App (Black)', price: 10 },
  { id: 8, image: '/images/watch2.jpg', rating: 5, description: 'Noise Twist Round dial Smart Watch with Bluetooth Calling, 1.38" TFT Display, up-to 7 Days Battery, 100+ Watch Faces, IP68, Heart Rate Monitor, Sleep Tracking (Jet Black)', price: 20 },
  { id: 9, image: '/images/ipad.jpg', rating: 3, description: "Apple iPad Pro 12.9″ (6th generation): with M2 chip, Liquid Retina XDR display, 2TB, Wi-Fi 6E + 5G cellular, 12MP front/12MP and 10MP back cameras, Face ID, all-day battery life – Silver", price: 30 },
];

const Home = ({ addToCart }) => (
  <div>
    <Navbar />
    <div className='home-bg'>
      <img src="./images/background.jpeg" alt="welcome" />

    </div>
    <div className="items-container">
      {items.map(item => (
        <Item key={item.id} item={item} addToCart={addToCart} />
      ))}
    </div>
  </div>
);

export default Home;
