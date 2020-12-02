import './ShopItem.css';

export default function ShopItem(props) {
  const { img, name, color, price, key } = props;

  return (
    <li className='product-item' key={key}>
      <img className='product-item_img' src={img} alt={name} />
      <div className='product-item_name'>{name}</div>
      <div className='product-item_color'>{color}</div>
      <div className='product-item_price'>${price}</div>
      <button className='product-item_add-button'>Add to cart</button>
    </li>
  )
}