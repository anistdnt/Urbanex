import React,{useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums'
import ProductDisplay from '../Components/ProductDisplay'


const Product = () => {
    const {all_product} = useContext(ShopContext)
    const {productId} = useParams()
    const Product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div>
      <Breadcrums product={Product}/>
      <ProductDisplay product={Product}/>
    </div>
  )
}

export default Product
