import { useAppContext } from './AppContext/Context'

export default function Input() {
  const { onChangeName } = useAppContext()
  function handleSubmit(e) {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
    onChangeName(searchValue)
  }
  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="text" name='search' />
      <button type='submit'>send</button>
    </form>
  )
}