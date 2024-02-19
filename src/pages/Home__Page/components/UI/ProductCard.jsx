import { FaRegHeart } from "react-icons/fa";

const ProductCard = ({data}) => {
    return (
      <div className='bg-gray-100 w-[110%]   rounded-md p-5 shadow-lg overflow-hidden '>
        <div  >
             <FaRegHeart className='lg:ml-48 md:ml-60 ml-28 mt-2 ' size={20} />
            <img className=' md:w-[80%]   mx-auto my-auto' src={data.productImg} alt="" />
          </div>
          <div>
              <p className='font-roboto font-normal lg:text-base md:text-[20px] text-base leading-[22.4px] mx-auto mt-4'>{data. productName}</p>
          </div>
          <div>
            <p className='font-roboto font-normal lg:text-base md:text-[20px] text-base leading-[22.4px] mx-auto mt-1' >{data. productPrice}</p>
          </div>
        
      </div>
    );
  };
  
  export default ProductCard;