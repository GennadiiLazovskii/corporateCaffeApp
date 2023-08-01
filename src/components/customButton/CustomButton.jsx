import styles from './CustomButton.module.scss';

const CustomButton = (title, click) => {
  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={click}>{title}</button>
    </div>
  )
}

export default CustomButton;
