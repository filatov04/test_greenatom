import './App.scss';
import React, {useState} from 'react';
import { TaskItem } from './components/TaskItem/TaskItem';
import store from './store/store';
import { observer } from 'mobx-react-lite';

 const App = observer(() => {
  const [even, setEven] = useState(false); //четная
  const [odd, setOdd] = useState(false); //нечетная
  const [value, setValue] = useState('');

  const handleKeyDown = ((event) => {
    switch(event.key){
      case 'Enter':
        store.addTodoItem(value); 
        setValue('');
        break;
      default:
        break;
    }
  });



  return (
    <>
    <header className='header'>
      <p>TODO LIST</p>
    </header>
    <main className='main'>
      <div className='main__inputTask'>
        <input onKeyDown={handleKeyDown} placeholder='Напиши задачу' value={value} onChange={(e) => setValue(e.target.value)}/>
        <button onClick={() => {store.addTodoItem(value); setValue('')}}>
          Добавить задачу
        </button>
      </div>
      <div className='main__button'>
        <div className='main__item-btn'>
          <button onClick={() => {setEven(!even); store.Even()}} className={even ? 'main__item-btn__btn main__item-btn__btn--border' : 'main__item-btn__btn'}>
            Каждая четная
          </button>
        </div>
        <div className='main__item-btn'>
          <button onClick={() => {setOdd(!odd); store.Odd()}} className={odd ? 'main__item-btn__btn main__item-btn__btn--border' : 'main__item-btn__btn'}>
            Каждая нечетная
          </button>
        </div>
        <div className='main__item-btn'>
          <button className='main__item-btn__btn' onClick={() => store.delFirsTask()}>
            Удалить первую задачу
          </button>
        </div>
        <div className='main__item-btn'>
          <button className='main__item-btn__btn' onClick={() => store.delLastTask()}>
            Удалить последнюю задачу
          </button>
        </div>
      </div> 
      <div className='todo'>
        {
          store.task.map(element =>{
            if(element.status == false){
              return <TaskItem title={element.title} id={element.id} status={element.status} border={element.border}/>
            }
            return <></>
          } 
          )
        }
        {
          store.task.map(element =>{
            if(element.status == true){
              return <TaskItem title={element.title} id={element.id} status={element.status} border={element.border}/>
            }
            return <></>
          } 
          )
        }
      </div>
    </main>
    </>
  )
})

export default App;