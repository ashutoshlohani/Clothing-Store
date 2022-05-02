import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
   const { title, imageUrl } = category;
   return (
      <div className='category'>
         <div className='bg-img' style={{ backgroundImage: `url(${imageUrl})` }} />
         <div className='category-textBox'>
            <h2>{title}</h2>
            <p>Shop Now</p>
         </div>
      </div>
   );
};

export default CategoryItem;
