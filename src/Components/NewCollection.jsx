import React from 'react'
import Item from './Item'
import new_collection from '../Assets/new_collections'

const NewCollection = () => {
  return (
    <div className='pt-24 h-auto font-poppins pb-12'>
        <h1 className='text-center font-medium text-5xl underline decoration-black pb-12'>New Collection</h1>
        <div className="grid grid-cols-4 place-items-center ">
        {
            new_collection.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })
        }
        </div>
    </div>
  )
}

export default NewCollection
