import React, { useContext } from 'react'
import { ShopContext, } from '../Context/ShopContext'
import dropdown_img from '../Assets/dropdown_icon.png'
// import all_product from "../Assets/all_product";
import Item from '../Components/Item';


const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  // const all_product=useAllProduct();
  return (
    <div id='shop-category' className='pb-28'>
      <img src={props.banner} alt="" />
      <div id="shopcategory-index" className=' flex items-center justify-between p-3'>
        <p>
          <span className='font-semibold'>Showing 1-12 </span>out of 41 products
        </p>
        <div id="shopcategory-sort" className='flex items-center justify-around w-[100px] p-2  rounded-full border-gray-400 border-2 text-gray-500'>
          Sort by <img src={dropdown_img} alt="" />
        </div>
      </div>
      <div id="shopcategory-products" className='grid grid-cols-4 place-items-center'>
        {
          all_product && all_product
            .filter(item => props.category === item.category)
            .map((item, i) => (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ))

        }
      </div>
      <div id="shopcategory-exploreMore" className='flex items-center justify-center mt-16'>
        <button className='bg-gray-200 px-4 py-3 text-gray-500 rounded-full'>
          Explore More
        </button>
      </div>
    </div>
  )
}

export default ShopCategory
