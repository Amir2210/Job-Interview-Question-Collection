import Form from './cmps/Form'
import Tasks from './cmps/Tasks'

function App() {

  return (
    <main className='flex flex-col bg-slate-600 text-slate-200 min-h-dvh px-8'>
      <h1 className='text-5xl capitalize mt-4 text-center'>task-app</h1>
      <Form />
      <Tasks />
    </main>
  )
}

export default App
