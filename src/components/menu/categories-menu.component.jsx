import { CategoryItem } from '../category-item/category-item.component'
import '../menu/categories-menu.styles.scss'




export const CategoriesMenu = ({categories}) => {
  

  return (
    <div className="menu-container">
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category}/>
    ))}
  </div>
    
  )
}
