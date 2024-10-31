import axios from 'axios'
import { GitHubUser } from '../types/user'
export async function fetchUsers(): Promise<GitHubUser[]> {
  const { data } = await axios.get('https://api.github.com/users')
  return data
}