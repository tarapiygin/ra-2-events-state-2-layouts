import './CardsView.css';
import ShopCard from '../ShopCard/ShopCard';

export default function CardsView(props) {
  const { cards } = props;
  return (
    <div className='product-cards'>
      {cards.map((card, index) => (
        <ShopCard
          img={card.img}
          name={card.name}
          color={card.color}
          price={card.price}
          key={index}
        />
      ))}
    </div>
  )
}