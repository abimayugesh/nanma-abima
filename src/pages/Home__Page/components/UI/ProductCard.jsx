import Wishlist from '../../../../assets/images/Wishlist.png'

const ProductCard = ({data}) => {
    return (
      <div className='bg-gray-100 lg:w-[264px] w-[180px] min-h-[10rem] rounded-md p-5 shadow-lg overflow-hidden '>
        <div  >
            <img  className='ml-48'src={Wishlist} alt="" />
            <img className='w-[140px] h-[150]px mx-auto my-auto' src={data.productImg} alt="" />
          </div>
          <div>
              <p className='font-roboto font-normal text-base leading-[22.4px] mx-auto mt-4'>{data. productName}</p>
          </div>
          <div>
            <p className='font-roboto font-normal text-base leading-[22.4px] mx-auto mt-1' >{data. productPrice}</p>
          </div>
        
      </div>
    );
  };
  
  export default ProductCard;