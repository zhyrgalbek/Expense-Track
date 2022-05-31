// import ExpenseItem from './components/ExpenseItem';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useEffect, useState } from 'react';


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2022, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {
  const [arr, setArr] = useState([]);
  const [isValidArr, setIsValidArr] = useState(false);
  const [isValidSpinner, setIsValidSpinner] = useState(false);

  const notify = (message) => {
    if (message === 'Успешно отправлено!' || message === 'успешно получили данные!') {
      return toast.success(message)
    }
    if (message === 'ошибка' || message === 'данные не получены!') {
      return toast.error(message);
    }
  };

  function addObj(obj) {
    fetch('https://expens-b1f25-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    }).then((response) => {
      if (response.status === 200) {
        notify('Успешно отправлено!');
        setIsValidArr(!isValidArr);
      }
    }).catch((error) => {
      notify('ошибка');
    })

  }

  useEffect(() => {
    setIsValidSpinner(true);
    fetch('https://expens-b1f25-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json')
      .then((response) => {
        if (response.status === 200) {
          setIsValidSpinner(false);
          notify('успешно получили данные!');
          return response.json();
        }
      })
      .then((data) => {
        let newArr = [];
        for (let elem in data) {
          newArr.push({
            ...data[elem],
            date: new Date(data[elem].date)
          });
        }
        console.log(newArr);
        setArr(newArr);
      })
      .catch((error) => {
        notify('данные не получены!');
        setIsValidSpinner(false);
      })
  }, [isValidArr]);


  return (
    <div className="App">
      <NewExpense addObj={addObj} />
      <Expenses expenses={arr} isValidSpinner={isValidSpinner} />
      <ToastContainer />
    </div>
  );
}

export default App;

//ReactDom
