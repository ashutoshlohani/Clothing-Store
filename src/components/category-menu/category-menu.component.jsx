import CategoryItem from '../category-item/category-item.component';
import './category-menu.styles.scss';

function Menu({ categories }) {
   return (
      <div className='container'>
         {categories.map(category => (
            <CategoryItem category={category} key={category.id} />
         ))}
      </div>
   );
}

export default Menu;
