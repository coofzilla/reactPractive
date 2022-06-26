//What is a CSS modules?
//what is CSS scoping?
import styles from './TaskInput.module.css';

//research what is bem css convention?
//http://getbem.com/naming/

//HW
//modify this component so that it resembles the spec sheet
//note + icon has no function, is only aesthetic
//see application "ticktick" for real example
const TaskInput = () => {
  //note JSX uses className vs class
  return <div className={styles.sample}>Input Task Bar Here</div>;
};

export default TaskInput;
