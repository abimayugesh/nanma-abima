const CategoryCard = ({data}) => {
  return (
    <div className="flex flex-col  py-3">
        <div> 
            <img className="rounded-full"src={data.categoryProductimg} alt="" />
        </div>
        <div className="font-semibold lg:ml-9 ml-3 ">
            <h3><span>{data.categoryProductname}</span></h3>
        </div>
      
    </div>
  );
};

export default CategoryCard;

