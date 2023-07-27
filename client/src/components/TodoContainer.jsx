import React from 'react';
import Button from './Button';
import Todo from './Todo';

const TodoContainer = ({ text, complete, deleteTask, updateTask }) => {
  return (
    <li>
      <Todo text={text}></Todo>
      <Button clickHandler={deleteTask} text='delete'></Button>
      <Button
        clickHandler={updateTask}
        text={complete === 0 ? 'done' : 're-do'}
      ></Button>
    </li>
  );
};

export default TodoContainer;
