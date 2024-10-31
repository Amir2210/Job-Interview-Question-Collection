import { GitHubUser } from '../types/user'
import UserPreview from './UserPreview'

interface UserList {
  users: GitHubUser[] | undefined
}

export default function UsersList(props: UserList) {
  const { users } = props
  return (
    <ul className='mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center px-4'>
      {users?.map(user => <UserPreview user={user} key={user.id} />)}
    </ul>
  )
}