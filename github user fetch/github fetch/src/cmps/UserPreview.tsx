import { GitHubUser } from '../types/user'

interface UserPreview {
  user: GitHubUser
}

export default function UserPreview(props: UserPreview) {
  const { avatar_url, login } = props.user
  return (
    <li className='bg-slate-300 border-solid border-2 border-indigo-600 shadow-lg p-5'>
      <p className='pb-2 text-xl capitalize'>username: {login}</p>
      <img className='size-36 m-auto' src={avatar_url} alt="user avatar" />
    </li>
  )
}