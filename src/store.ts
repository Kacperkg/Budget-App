import { create } from 'zustand'
import {
  addTransaction,
  deleteTransaction,
  fetchTransactions,
  type Transaction
} from 'api/transactionApi'

interface TransactionState {
  transactions: Transaction[]
  loading: boolean
  error: string | null
  getTransactions: () => Promise<void>
  addTransaction: (transaction: Transaction) => Promise<void>
  deleteTransaction: (id: string) => Promise<void>
}

const useTransactions = create<TransactionState>((set) => ({
  transactions: [],
  loading: false,
  error: null,

  getTransactions: async () => {
    set({ loading: true, error: null })
    try {
      const data = await fetchTransactions()
      set({ transactions: data, loading: false })
    } catch (err) {
      set({ error: 'Failed to fetch', loading: false })
    }
  },

  addTransaction: async (transaction) => {
    set({ loading: true, error: null })
    try {
      const newTx = await addTransaction(transaction)
      set((state) => ({
        transactions: [...state.transactions, newTx]
      }))
      set({ loading: true, error: null })
    } catch {
      set({ error: 'Failed to add' })
    }
  },

  deleteTransaction: async (id: string) => {
    set({ loading: true, error: null })
    try {
      await deleteTransaction(id)
      set((state) => ({
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== id
        ),
        loading: false
      }))
    } catch (err) {
      set({ error: 'Failed to delete' })
    }
  }
}))

export { useTransactions }
