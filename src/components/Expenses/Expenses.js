import SpinnerRender from '../spinners/SpinnerRender';
import styles from './Expenses.module.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import FilterExpense from './FIlterExpense';
import {useState} from 'react';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [year, setYear] = useState("2022");

  function takeYear(year){
    setYear(year);
  }

  const filteredElems = props.expenses.filter((elem)=>{
    if(elem.date.getFullYear() == year){
      return elem;
    }
  })
  
  return (
    <Card className={styles.expenses}>
      <FilterExpense takeYear={takeYear} value={year} />
      <ExpensesChart expense={filteredElems} />
      {
        props.isValidSpinner && <SpinnerRender />
      }
      {
        filteredElems.length == 0 ? <p style={{color: '#fff', padding: '20px 0'}}>No found</p> :
        filteredElems.map(elem => {
          return <ExpenseItem date={elem.date} text={elem.title} price={elem.amount} key={elem.id} />
        })
      }
    </Card>
  )

}

export default Expenses;