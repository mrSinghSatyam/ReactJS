import React from 'react'
import Person from './Component/Product'
import Product from './Component/Product'
import './App.css'
const App = () => {
  return (
    <div className="App">
      <Person name="Satyam" age="21" />
      <Product name="Shoes" price="$5000" />
    </div>
  )
}

export default App