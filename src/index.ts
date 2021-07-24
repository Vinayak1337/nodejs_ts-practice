import pkg from 'body-parser';
const { json } = pkg;
import express, { Application, Request, Response, NextFunction} from 'express';
import todos from './routes/todos.js';

const app: Application = express();

app.use(json());

app.use('/todos', todos);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
    res.status(500).json({ message: err.message });
});

app.listen(3000, () => {
    console.log('Connected to port 3000');
});