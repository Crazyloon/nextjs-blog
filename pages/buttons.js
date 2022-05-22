import classNames from 'classnames';
import styles from '../styles/buttons.module.scss';

const Buttons = () => {
  return ( 
    <div className="buttons-page">
      <div className="button-containers flex flex-row align-center justify-between">
        <div className="button-container">
          <button className={ classNames(styles['btn'], styles['btn-primary']) }>Primary</button>
          <button className={ classNames(styles['btn'], styles['btn-primary-outline']) }>Primary-Outline</button>
        </div>
        
        <div className="button-container">
          <button className={ classNames(styles['btn'], styles['btn-primary-dark']) }>Primary-Dark</button>
          <button className={ classNames(styles['btn'], styles['btn-primary-dark-outline']) }>Primary-Dark-Outline</button>
        </div>
        <div className="button-container">
          <button className={ classNames(styles['btn'], styles['btn-secondary']) }>Secondary</button>
          <button className={ classNames(styles['btn'], styles['btn-secondary-outline']) }>Secondary-Outline</button>
        </div>
        <div className="button-container">
          <button className={ classNames(styles['btn'], styles['btn-secondary-dark']) }>Secondary-dark</button>
          <button className={ classNames(styles['btn'], styles['btn-secondary-dark-outline']) }>Secondary-dark-Outline</button>
        </div>
        <div className="button-container">
          <button className={ classNames(styles['btn'], styles['btn-accent']) }>Accent</button>
          <button className={ classNames(styles['btn'], styles['btn-accent-outline']) }>Accent-Outline</button>
        </div>      
        <div className="button-container">
          <button className={ classNames(styles['btn'], styles['btn-success']) }>Success</button>
          <button className={ classNames(styles['btn'], styles['btn-success-outline']) }>Success-Outline</button>
        </div>      
        <div className="button-container">
          <button className={ classNames(styles['btn'], styles['btn-info']) }>Info</button>
          <button className={ classNames(styles['btn'], styles['btn-info-outline']) }>Info-Outline</button>
        </div>
        <div className="button-container">
          <button className={ classNames(styles['btn'], styles['btn-warning']) }>Warning</button>
          <button className={ classNames(styles['btn'], styles['btn-warning-outline']) }>Warning-Outline</button>
        </div>
        <div className="button-container">
          <button className={ classNames(styles['btn'], styles['btn-error']) }>Error</button>
          <button className={ classNames(styles['btn'], styles['btn-error-outline']) }>Error-Outline</button>
        </div>
      </div>
    </div>
   );
}
 
export default Buttons;