import AddTransaction from './addTransaction'
import { TransactionList } from './transactionList'

function App() {
  return (
    <div className="relative flex h-screen flex-col gap-4 overflow-hidden bg-zinc-900 p-4 text-stone-200">
      <div>
        <h1 className="py-4 text-center text-4xl font-bold">Transactions</h1>
        <AddTransaction />
      </div>
      <TransactionList />
    </div>
  )
}

export default App
