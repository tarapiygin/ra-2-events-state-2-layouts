import React, { useState } from 'react';
import CardsView from '../CardsView/CardsView';
import ListView from '../ListView/ListView';
import './Store.css';
import IconSwitch from '../IconSwitch/IconSwitch';

export default function Store(props) {
  const { products } = props;
  const [state, setState] = useState({ icon: 'view_list' });
  const onSwitch = (e) => {
    e.preventDefault();
    setState((prevState) => {
      const icon = prevState.icon === 'view_list' ? 'view_module' : 'view_list';
      return {
        icon
      }
    })
  }
  return (
    <div className='store'>
      <IconSwitch icon={state.icon} onSwitch={onSwitch} />
      {state.icon === 'view_list' ? <ListView items={products} /> : <CardsView cards={products} />}
    </div>
  )
}