import React from 'react'
import productImage from '../../../../assets/images/man.png'
import ProductCard from '../UI/ProductCard'
import button from '../../../../assets/images/Rectangle 18.png'
const Product = () => {

    const products= [
        {
            id:1,
            productImg:productImage,
            productName:"Men's Ice-Dye Pullover Hoodie",
            productPrice:'₹128.97'
        },
        {
            id:2,
            productImg:productImage,
            productName:"Men's Ice-Dye Pullover Hoodie",
            productPrice:'₹128.97'
        },
        {
            id:3,
            productImg:productImage,
            productName:"Men's Ice-Dye Pullover Hoodie",
            productPrice:'₹128.97'
        },
        {
            id:4,
            productImg:productImage,
            productName:"Men's Ice-Dye Pullover Hoodie",
            productPrice:'₹128.97'
        },
        {
            id:5,
            productImg:productImage,
            productName:"Men's Ice-Dye Pullover Hoodie",
            productPrice:'₹128.97'
        },
        {
            id:6,
            productImg:productImage,
            productName:"Men's Ice-Dye Pullover Hoodie",
            productPrice:'₹128.97'
        },
        {
            id:7,
            productImg:productImage,
            productName:"Men's Ice-Dye Pullover Hoodie",
            productPrice:'₹128.97'
        },
        {
            id:8,
            productImg:productImage,
            productName:"Men's Ice-Dye Pullover Hoodie",
            productPrice:'₹128.97'
        },
        {
            id:9,
            productImg:productImage,
            productName:"Men's Ice-Dye Pullover Hoodie",
            productPrice:'₹128.97'
        },
        {
            id:10,
            productImg:productImage,
            productName:"Men's Ice-Dye Pullover Hoodie",
            productPrice:'₹128.97'
        }, 
        {
            id:11,
            productImg:productImage,
            productName:"Men's Ice-Dye Pullover Hoodie",
            productPrice:'₹128.97'
        },
        {
            id:12,
            productImg:productImage,
            productName:"Men's Ice-Dye Pullover Hoodie",
            productPrice:'₹128.97'
        },
    ]

  return (
    <div className=' pt-12  w-[92%] mx-auto pb-10 '>
        
        <div className='flex items-center lg:gap-[12px] gap-2'>
          <img src={button} alt="button" />
          <p className='text-indigo-800 font-poppins font-semibold text-xl leading-5'>Popular</p>
        </div>
      <div className='grid lg:grid-cols-4 md:gap-[60px] gap-8 mx-2 md:mx-4 mt-9 lg:mx-auto  grid-cols-2'>
         
                {
                 products.map((item)=>{
                    return(
                        <ProductCard data={item} key={item.id}/>
                    )
                 })   
                }
            

      
    </div>
    </div>
  )
}

export default Product
