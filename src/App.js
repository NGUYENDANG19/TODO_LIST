import logo from './logo.svg';
import './App.css';
import ToDo from './components/todo';

function App() {
  return (
    <main className='flex-col gap-4 flex justify-center items-center h-screen max-w-2xl m-auto'>
      <h1 className='text-xl tex'>
        TO DO APP
      </h1>
      <ToDo />
    </main>
      
  )
  }

export default App;
