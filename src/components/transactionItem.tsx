import { memo } from 'react'
import { useTransactions } from '../store'
import { Trash } from 'lucide-react'

type Props = { id: string }

const TransactionItem = memo(function TransactionItem({ id }: Props) {
  const transaction = useTransactions((state) =>
    state.transactions.find((t) => t.id === id)
  )
  const deleteTransaction = useTransactions((s) => s.deleteTransaction)

  if (!transaction) return null

  return (
    <div className="flex aspect-video flex-col justify-between gap-4 rounded-xl border border-stone-200 px-4 py-6">
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold">{transaction.name}</span>
        <button
          className="rounded-xl p-2 text-stone-200"
          onClick={() => deleteTransaction(transaction.id!)}
        >
          <Trash />
        </button>
      </div>
      <div className="flex flex-col gap-2 text-start">
        <span className="opacity-50">{transaction.category}</span>
        <div className="flex items-end justify-between">
          <span className="text-2xl">£ {transaction.amount}</span>
          <span className="text-lg opacity-50">{transaction.date}</span>
        </div>
      </div>
    </div>
  )
})

export default TransactionItem
