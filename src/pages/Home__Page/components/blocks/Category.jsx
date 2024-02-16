import React from 'react'
import CategoryCard from '../UI/CategoryCard'
import hoodie from "../../../../assets/images/hoodie.png"
import hoodie2 from "../../../../assets/images/hoodie2.png"
import shoes from "../../../../assets/images/shoes.png"
import bag from "../../../../assets/images/bag.png"
import pant from "../../../../assets/images/pant.png"
import button from '../../../../assets/images/Rectangle 18.png'

const Category = () => {
   
    const categoryProducts= [
        {
            id:1,
            categoryProductimg:hoodie,
            categoryProductname:'Hoodies',
        },
        {
            id:2,
            categoryProductimg:shoes,
            categoryProductname:'Shoes',
        },
        {
            id:3,
            categoryProductimg:bag,
            categoryProductname:'Bag',
        },
        {
            id:4,
            categoryProductimg:hoodie2,
            categoryProductname:'Hoodie',
        },
        {
            id:5,
            categoryProductimg:pant,
            categoryProductname:'Hoodies',
        },
        {
            id:6,
            categoryProductimg:hoodie,
            categoryProductname:'Hoodies',
        },
        {
            id:7,
            categoryProductimg:shoes,
            categoryProductname:'Shoes',
        },
        {
            id:8,
            categoryProductimg:bag,
            categoryProductname:'Bag',
        },
    ]


  return (
    <div className=' pt-12  w-[92%] mx-auto  '>
        <div className='flex justify-evenly lg:gap-[86%] gap-[55%]'>
        <div className='flex items-center lg:gap-[12px] gap-2'>
          <img src={button} alt="button" />
          <p className='text-indigo-800 font-poppins font-semibold text-base leading-5'>Categories</p>
        </div>
        <p className='font-semibold' >See all</p>
        </div>

            <div className='grid lg:grid-cols-8 gap-4 mt-3 md:grid-cols-4 grid-cols-4'>
                {
                 categoryProducts.map((item)=>{
                    return(
                        <CategoryCard data={item} key={item.id}/>
                    )
                 })   
                }
            </div>

        
      
    </div>
  )
}

export default Category
