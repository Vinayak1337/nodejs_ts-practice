import { Router } from "express";
import { createTodo, getTodos, updateTodos, deleteTodos } from "../controllers/todoController.js";

const router: Router = Router();

router.post('/', createTodo);

router.get('/', getTodos);

router.patch('/:id', updateTodos);

router.delete('/:id', deleteTodos);

export default router;