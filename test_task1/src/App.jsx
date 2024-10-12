import './App.scss';
import { Quote } from './components/Quote/Quote';

function App() {

  return (
    <div className='content'>
      <header className='content__header'>
        Random Quotes!
      </header>
      <main className='content__main'>
        <Quote/>
      </main>
    </div>
  )
}

export default App
