

const CategoryCard = ({data}) => {
  return (
    <div>
        <div> 
            <img src={data.categoryProductimg} alt="" />
        </div>
        <div>
            <h3><span>{data.categoryProductname}</span></h3>
        </div>
      
    </div>
  );
};

export default CategoryCard;

