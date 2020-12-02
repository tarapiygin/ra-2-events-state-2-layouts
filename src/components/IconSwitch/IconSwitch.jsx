import './IconSwitch.css';
export default function IconSwitch(props) {
  const { icon, onSwitch } = props;

  return (
    <div className='icon-switch'>
      <span className="material-icons icon-switch_icon" onClick={onSwitch}>{icon}</span>
    </div>
  )
}