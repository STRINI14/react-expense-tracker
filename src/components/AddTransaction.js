import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const {addTransaction} = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    }
    addTransaction(newTransaction);
  }


  return (
    <>
    <div className='add'>
         <h3>Add A Transaction</h3>
        <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Income or Expense:</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter an income or expense:" />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount: <br />
            (negative - expense, <br></br>positive - income)</label
          >
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} id="amount" placeholder="Enter an amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
    </>
  )
}

export default AddTransaction
