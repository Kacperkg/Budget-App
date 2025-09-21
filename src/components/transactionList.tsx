import { useTransactions } from 'store'
import { useEffect } from 'react'
import TransactionItem from './transactionItem'

export const TransactionList = () => {
  const { transactions, getTransactions } = useTransactions()

  useEffect(() => {
    getTransactions()
  }, [getTransactions])

  return (
    <div className="mx-auto grid max-w-7xl grid-cols-3 gap-10">
      {transactions.map((transaction) => (
        <TransactionItem key={transaction.id} id={transaction.id!} />
      ))}
    </div>
  )
}
