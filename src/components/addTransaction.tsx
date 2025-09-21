import { Plus } from 'lucide-react'
import { FormEvent, useState } from 'react'
import { useTransactions } from 'store'

export default function AddTransaction() {
  const addTransaction = useTransactions((s) => s.addTransaction)

  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState<number | ''>('')
  const [date, setDate] = useState('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!name || !category || !amount || !date) return

    console.log('Test')

    await addTransaction({
      id: Date.now(),
      name,
      category,
      type: category.toLowerCase() === 'salary' ? 'income' : 'expense',
      amount: Number(amount),
      date
    })

    setName('')
    setCategory('')
    setAmount('')
    setDate('')
  }

  return (
    <form
      className="my-10 flex w-full justify-center gap-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="rounded-xl border bg-transparent p-3"
        placeholder="Name"
        maxLength={20}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="rounded-xl border bg-transparent p-3"
        placeholder="Category"
        maxLength={20}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        className="rounded-xl border bg-transparent p-3"
        placeholder="Price"
        value={amount}
        onChange={(e) =>
          setAmount(e.target.value === '' ? '' : Number(e.target.value))
        }
      />
      <input
        type="date"
        style={{
          colorScheme: 'dark',
          accentColor: '#f59e42'
        }}
        className="rounded-xl border bg-transparent p-3"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button
        type="submit"
        className="flex items-center gap-2 rounded-xl border bg-stone-200 p-3 text-zinc-800"
      >
        <Plus /> Add
      </button>
    </form>
  )
}
