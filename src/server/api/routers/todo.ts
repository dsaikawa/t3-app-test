import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import {
  addTask,
  changeStatusToDone,
  deleteTaskById,
  getAllTasks,
} from "~/db/todo.queries";
import { Client } from "pg";

const dbConfig = {
  host: process.env.PGHOST ?? "localhost",
  user: process.env.PGUSER ?? "postgres",
  password: process.env.PGPASSWORD ?? "password",
  database: process.env.PGDATABASE ?? "postgres",
  port: (process.env.PGPORT ? Number(process.env.PGPORT) : undefined) ?? 5432,
  ssl: false,
};

export const todoRouter = createTRPCRouter({
  getTodo: publicProcedure.query(async ({}) => {
    const client = new Client(dbConfig);
    void client.connect();
    const tasks = await getAllTasks.run(undefined, client);
    void client.end();
    // console.log("tasks", tasks);
    return tasks;
  }),

  addTodo: publicProcedure.input(z.string()).mutation(async (req) => {
    const client = new Client(dbConfig);
    void client.connect();
    await addTask.run({ task: [req.input] }, client);
    const tasks = await getAllTasks.run(undefined, client);
    void client.end();
    return tasks;
  }),

  deleteTodo: publicProcedure.input(z.number()).mutation(async (req) => {
    const client = new Client(dbConfig);
    void client.connect();
    await deleteTaskById.run({ taskId: req.input }, client);
    const tasks = await getAllTasks.run(undefined, client);
    void client.end();
    return tasks;
  }),

  changeStatusToDone: publicProcedure
    .input(z.number())
    .mutation(async (req) => {
      const client = new Client(dbConfig);
      void client.connect();
      await changeStatusToDone.run({ taskId: req.input }, client);
      void client.end();
      return;
    }),
});
