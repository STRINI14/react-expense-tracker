import React, {useContext} from 'react'
import {Transaction} from './Transaction'
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
const {transactions} = useContext(GlobalContext);



  return (
    <div className='history'>
       <h3>History</h3>
      <ul className="list">
       {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </div>
  )
}

export default TransactionList
