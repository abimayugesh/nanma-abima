import React from 'react'
import CategoryCard from '../UI/CategoryCard'
import hoodie from "../../../../assets/images/hoodie.png"
import hoodie2 from "../../../../assets/images/hoodie2.png"
import shoes from "../../../../assets/images/shoes.png"
import bag from "../../../../assets/images/bag.png"
import pant from "../../../../assets/images/pant.png"

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
    <div className=' pt-16'>
        <div className='grid lg:grid-cols-8 gap-4'>
            <div>
                {
                 categoryProducts.map((item)=>{
                    return(
                        <CategoryCard data={item} key={item.id}/>
                    )
                 })   
                }
            </div>

        </div>
      
    </div>
  )
}

export default Category
