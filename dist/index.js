import pkg from 'body-parser';
const { json } = pkg;
import express from 'express';
import todos from './routes/todos.js';
const app = express();
app.use(json());
app.use('/todos', todos);
app.use((err, _req, res, _next) => {
    res.status(500).json({ message: err.message });
});
app.listen(3000, () => {
    console.log('Connected to port 3000');
});
