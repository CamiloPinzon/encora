import './general-btn.styles.scss'

const GeneralBtn = ({ children, onClickHandler }) => {
  return <button className='gral-button' onClick={onClickHandler}>{children}</button>;
};

export default GeneralBtn;
