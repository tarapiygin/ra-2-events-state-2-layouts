import './ListView.css';
import ShopItem from '../ShopItem/ShopItem';

export default function ListView(props) {
  const { items } = props;
  console.log(props)
  return (
    <ol className='product-list'>
      {items.map((item, index) => (
        <ShopItem
          img={item.img}
          name={item.name}
          color={item.color}
          price={item.price}
          key={index}
        />
      ))}
    </ol>
  )
}