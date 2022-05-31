import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import Card from '../UI/Card.js';

function NewExpense(props){

    function takeObj(obj){
        props.addObj(obj);
    }

    return <Card className='new-expense'>
        <ExpenseForm takeObj={takeObj} />
    </Card>
}

export default NewExpense;
