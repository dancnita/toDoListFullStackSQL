import React from 'react';
import TodoContainer from './TodoContainer';
import Title2 from './Title2';

const Main = ({ todo, deleteTask, updateTask }) => {
  return (
    <>
      <Title2 text={todo === [] ? 'No tasks to display' : 'My tasks'} />
      <ol>
        {todo.map((item) => {
          return (
            <TodoContainer
              key={item.id}
              text={item.name}
              complete={item.description}
              className='todo'
              deleteTask={() => deleteTask(item.id)}
              updateTask={() =>
                updateTask(item.id, item.description === 0 ? 1 : 0)
              }
            />
          );
        })}
      </ol>
    </>
  );
};

export default Main;
