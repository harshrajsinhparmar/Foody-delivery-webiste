// src/App.jsx
import React from "react";
import { Routes } from "react-router"
import Layout from "./Layout.jsx"
import { Link,Outlet } from "react-router-dom";
import { decrement, increment } from "./store/reducers/counterSlice.js";
import { useSelector,useDispatch} from 'react-redux';
import { Provider } from "react-redux";
const categories = ["All", "Business & Services", "Health & Wellness", "Creative Arts", "Online Store"];
const templates = [
  { title: "Nail Salon", img: "https://via.placeholder.com/200x150", price: "Free" },
  { title: "The Gym", img: "https://via.placeholder.com/200x150", price: "Free" },
];

function App() {
  const dispatch=useDispatch();
 const count = useSelector((state) => state.counter.value);
  return (

    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="text-center p-10">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight max-w-2xl mx-auto">
          
          <hr></hr>
          <button onClick={()=>dispatch(increment())} >+</button><label>count: {count}</label>
          <button onClick={()=>dispatch(decrement())} >-</button>
        </h1>
      </header>



      <div className="flex gap-8 px-10">
        {/* Sidebar 
        <aside className="w-64">
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((cat) => (
              <li key={cat} className="text-sm hover:underline cursor-pointer">{cat}</li>
            ))}
          </ul>
        </aside>

        {/* Templates Grid 
        <main className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-8">
          {templates.map((tpl) => (
            <div key={tpl.title} className="bg-white shadow p-4 rounded-lg">
              <img src={tpl.img} alt={tpl.title} className="w-full h-40 object-cover rounded" />
              <h3 className="text-lg font-semibold mt-2">{tpl.title}</h3>
              <p className="text-sm text-gray-500 mb-2">Price: {tpl.price}</p>
              <div className="flex gap-2">
                <button className="bg-blue-600 text-white px-4 py-1 text-sm rounded hover:bg-blue-700">VIEW</button>
                <button className="bg-blue-600 text-white px-4 py-1 text-sm rounded hover:bg-blue-700">EDIT</button>
              </div>
              <p className="text-xs text-green-600 mt-2">✔ Mobile Optimized</p>
            </div>
          ))}
        </main>

        <footer> <Link to="/layout"><button>Layout</button></Link><Outlet /></footer>*/}
      </div>
    </div>
  );
}

export default App;
