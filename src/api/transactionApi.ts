import axios from 'axios'

export interface Transaction {
  id: number
  name: string
  type: 'income' | 'expense'
  category: string
  amount: number
  date: string
}

const API_URL = 'http://localhost:4000/transactions'

export const fetchTransactions = async () => {
  const res = await axios.get<Transaction[]>(API_URL)
  return res.data
}

export const addTransaction = async (transaction: Transaction) => {
  const res = await axios.post<Transaction>(API_URL, transaction)
  return res.data
}

export const deleteTransaction = async (id: number) => {
  await axios.delete(`${API_URL}/${id}`)
  return id
}
