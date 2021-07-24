import { NextFunction, Request, Response, RequestHandler } from "express";
import { TodoModel } from "../Models/todoModel.js";

const TODOS: TodoModel[] = [];

export const createTodo: RequestHandler = (req: Request, res: Response, _next: NextFunction) => {
    const { text } = req.body;
    const newTodo: TodoModel = new TodoModel(
        Math.random().toString(), text
    );

    TODOS.push(newTodo);

    res.status(201).json({ message: 'Created new Todo', todo: newTodo });
}

export const getTodos: RequestHandler = (_req, res, _next) => {
    res.json({ todos: TODOS });
}

export const updateTodos: RequestHandler = (req, res, _next) => {
    const todoId = req.params["id"];

    const { text } = req.body;

    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

    if (todoIndex < 0) {
        throw new Error('Could not find todo');
    }

    TODOS[todoIndex] = new TodoModel(TODOS[todoIndex]?.id || '1', text);

    res.json({ message: 'Updated todo', updatedTodo: TODOS[todoIndex] });
}

export const deleteTodos: RequestHandler = (req, res) => {
    const todoId = req.params["id"];

    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

    if (todoIndex < 0) {
        throw new Error('Could not find todo');
    }

    TODOS.splice(todoIndex, 1);

    res.json({ message: 'Todo deleted successfully' });

}