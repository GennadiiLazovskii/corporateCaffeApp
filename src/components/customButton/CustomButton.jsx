import styles from './CustomButton.module.scss';

const CustomButton = ({title, onClick}) => {
  return (
    <div className={styles.btn}>
      <button onClick={onClick}>{title}</button>
    </div>
  )
}

export default CustomButton;
