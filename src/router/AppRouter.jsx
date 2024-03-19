import React from 'react'
import Navbar from '../components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const AppRouter = () => {
  return (
    <BrowserRouter>
<Navbar/>
<Routes>
<Route path='/' element={<Main/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/new-product' element={<NewProduct/>}/>
<Route path='/products' element={<ProductList/>}/>
<Route path='/update-product' element={<UpdateProduct/>}/>
<Route path='*' element={<Main/>}/>

</Routes>


</BrowserRouter>







  )
}

export default AppRouter