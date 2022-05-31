import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import styles from './ExpenseItem.module.css';

function ExpenseItem(props) {
//  let title = props.text;

// useState()
 const [title, setTitle] = useState(props.text)


function clickHandler(){
 setTitle('updated')
  // title = 'Updated!'
  // console.log(title)
}

  return (
    <Card className={styles['expense-item']}>
      <ExpenseDate date={props.date}/>
      <div className={styles['expense-item__description']}>
        <h2>{title}</h2>
        <div className={styles['expense-item__price']}>{props.price}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
}

export default ExpenseItem;
