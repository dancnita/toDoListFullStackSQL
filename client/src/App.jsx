import { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';
import { getData, deleteData, postData, patchData } from './utils/api/methods';
import { url } from './utils/api/data';

function App() {
  const [newInput, setNewInput] = useState('');
  const [todo, setTodo] = useState([]);

  const submitHandler = () => {
    postData(url, newInput).then((res) => {
      setTodo(() => [...todo, res[0]]);
    });
    setNewInput('');
  };

  const deleteTask = (id) => {
    deleteData(url, id).then((res) => {
      if (res.ok) {
        setTodo(() => {
          return todo.filter((item) => item.id !== id);
        });
      }
    });
  };

  const toggleDone = (id, description) => {
    setTodo((todo) => {
      return todo.map((task) => {
        if (task.id === id) {
          return { ...task, description };
        } else {
          return task;
        }
      });
    });
  };

  const updateTask = (itemId, description) => {
    patchData(itemId, description, url).then((res) => {
      //console.log(res);
      if (res.ok) {
        toggleDone(itemId, description);
      }
    });
  };

  const getInput = (e) => {
    setNewInput(e.target.value);
  };

  useEffect(() => {
    getData(url).then((res) => {
      setTodo(() => res);
    });
  }, []);

  return (
    <>
      <div>
        <Header
          submitHandler={submitHandler}
          getInput={getInput}
          newInput={newInput}
        />
        <Main todo={todo} deleteTask={deleteTask} updateTask={updateTask} />
      </div>
    </>
  );
}

export default App;
