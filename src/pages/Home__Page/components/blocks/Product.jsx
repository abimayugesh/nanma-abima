import React from 'react'
import productImage from '../../../../assets/images/man.png'
import ProductCard from '../UI/ProductCard'

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
    <div className='grid lg:grid-cols-4 gap-8 w-[92%] mx-auto p-2 grid-cols-2'>
         
                {
                 products.map((item)=>{
                    return(
                        <ProductCard data={item} key={item.id}/>
                    )
                 })   
                }
            

      
    </div>
  )
}

export default Product
