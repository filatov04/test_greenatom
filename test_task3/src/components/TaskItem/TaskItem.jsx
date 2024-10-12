import React, {useState} from 'react';
import del from '../../assets/delete.png';
import './TaskItem.scss';
import store from '../../store/store';

export const TaskItem = ({title, id, status, border}) => {
  
  return (
    <div key={id} className={border === true && status === false ? 'todo__item item--purple item' : 'todo__item item'}>
      <div className='item__checkbox'>
        <input checked={status} onChange={() => store.completeTodoItem(id)} type='checkbox'/>
      </div>
      <div className='item__task'>
        <p className={ status ? 'item__task-name item__task-name--done' : 'item__task-name'}>
          {title}
        </p>
      </div>
      <div className='item__delete'>
        <button onClick={() => store.removeTodoItem(id)}>
          <img src={del}/>
        </button>
      </div>
    </div>
  )
}

