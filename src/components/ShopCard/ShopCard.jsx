import './ShopCard.css';

export default function ShopCard(props) {
  const { img, name, color, price, key } = props;

  return (
    <div className='product-card' key={key}>
      <div className='product-card_name'>{name}</div>
      <div className='product-card_color'>{color}</div>
      <img className='product-card_img' src={img} alt={name} />
      <div className='product-card_price'>${price}</div>
      <button className='product-card_add-button'>Add to cart</button>
    </div>
  )
}