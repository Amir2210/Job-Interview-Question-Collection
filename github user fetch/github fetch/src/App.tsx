import { useEffect, useState } from 'react'
import { fetchUsers } from './service/users.service'
import { GitHubUser } from './types/user'
import UsersList from './cmps/usersList'
export default function App() {
  const [users, setUsers] = useState<GitHubUser[]>()
  useEffect(() => {
    async function getUsers() {
      const fetchedUsers = await fetchUsers()
      setUsers(fetchedUsers)
    }
    getUsers()
  }, [])


  return (
    <section className='min-h-dvh bg-slate-700 justify-center'>
      <h1 className='pt-4 capitalize text-white text-7xl text-center'>github fetch user API</h1>
      <UsersList users={users} />
    </section>
  )
}
