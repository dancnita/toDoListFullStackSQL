import express from 'express';
import cors from 'cors';
import { getTasks, createTask, deleteTask, patchTask } from './database.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});

app.get('/tasks', async (req, res, next) => {
  try {
    const data = await getTasks();
    res.send(data);
  } catch (error) {
    next(error);
  }
});

app.post('/tasks', async (req, res, next) => {
  try {
    const task = req.body;
    const result = await createTask(task);
    res.send(result);
  } catch (error) {
    next(error);
  }
});

app.delete('/tasks', async (req, res, next) => {
  try {
    const taskId = req.body.id;
    const result = await deleteTask(taskId);
    res.send(result);
  } catch (error) {
    next(error);
  }
});

app.patch('/tasks', async (req, res, next) => {
  try {
    const taskId = req.body.id;
    const taskDescription = req.body.description;
    const result = await patchTask(taskId, taskDescription);
    res.send(result);
  } catch (error) {
    next(error);
  }
});

//error handling

// app.use((err, req, res, next) => {
//   console.log(err.stack);
//   res.status(500).send('Errorr');
// });
