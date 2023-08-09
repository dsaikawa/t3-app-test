/** Types generated for queries found in "src/db/todo.sql" */
import { PreparedQuery } from "@pgtyped/runtime";

export type status = "DONE" | "READY";

/** 'GetAllTasks' parameters type */
export type IGetAllTasksParams = void;

/** 'GetAllTasks' return type */
export interface IGetAllTasksResult {
  id: number;
  status: status;
  task: string;
}

/** 'GetAllTasks' query type */
export interface IGetAllTasksQuery {
  params: IGetAllTasksParams;
  result: IGetAllTasksResult;
}

const getAllTasksIR: any = {
  usedParamSet: {},
  params: [],
  statement: "SELECT * FROM TASKS",
};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM TASKS
 * ```
 */
export const getAllTasks = new PreparedQuery<
  IGetAllTasksParams,
  IGetAllTasksResult
>(getAllTasksIR);

/** 'GetTaskById' parameters type */
export interface IGetTaskByIdParams {
  taskId: readonly (number | null | void)[];
}

/** 'GetTaskById' return type */
export interface IGetTaskByIdResult {
  id: number;
  status: status;
  task: string;
}

/** 'GetTaskById' query type */
export interface IGetTaskByIdQuery {
  params: IGetTaskByIdParams;
  result: IGetTaskByIdResult;
}

const getTaskByIdIR: any = {
  usedParamSet: { taskId: true },
  params: [
    {
      name: "taskId",
      required: false,
      transform: { type: "array_spread" },
      locs: [{ a: 31, b: 37 }],
    },
  ],
  statement: "SELECT * FROM tasks where id = :taskId",
};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM tasks where id = :taskId
 * ```
 */
export const getTaskById = new PreparedQuery<
  IGetTaskByIdParams,
  IGetTaskByIdResult
>(getTaskByIdIR);

/** 'AddTask' parameters type */
export interface IAddTaskParams {
  task: readonly (string | null | void)[];
}

/** 'AddTask' return type */
export type IAddTaskResult = void;

/** 'AddTask' query type */
export interface IAddTaskQuery {
  params: IAddTaskParams;
  result: IAddTaskResult;
}

const addTaskIR: any = {
  usedParamSet: { task: true },
  params: [
    {
      name: "task",
      required: false,
      transform: { type: "array_spread" },
      locs: [{ a: 40, b: 44 }],
    },
  ],
  statement: "INSERT INTO tasks(task, status) VALUES (:task, 'READY')",
};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO tasks(task, status) VALUES (:task, 'READY')
 * ```
 */
export const addTask = new PreparedQuery<IAddTaskParams, IAddTaskResult>(
  addTaskIR
);

/** 'ChangeStatusToDone' parameters type */
export interface IChangeStatusToDoneParams {
  taskId?: number | null | void;
}

/** 'ChangeStatusToDone' return type */
export type IChangeStatusToDoneResult = void;

/** 'ChangeStatusToDone' query type */
export interface IChangeStatusToDoneQuery {
  params: IChangeStatusToDoneParams;
  result: IChangeStatusToDoneResult;
}

const changeStatusToDoneIR: any = {
  usedParamSet: { taskId: true },
  params: [
    {
      name: "taskId",
      required: false,
      transform: { type: "scalar" },
      locs: [{ a: 44, b: 50 }],
    },
  ],
  statement: "UPDATE tasks SET status = 'DONE' where id = :taskId",
};

/**
 * Query generated from SQL:
 * ```
 * UPDATE tasks SET status = 'DONE' where id = :taskId
 * ```
 */
export const changeStatusToDone = new PreparedQuery<
  IChangeStatusToDoneParams,
  IChangeStatusToDoneResult
>(changeStatusToDoneIR);

/** 'DeleteTaskById' parameters type */
export interface IDeleteTaskByIdParams {
  taskId?: number | null | void;
}

/** 'DeleteTaskById' return type */
export type IDeleteTaskByIdResult = void;

/** 'DeleteTaskById' query type */
export interface IDeleteTaskByIdQuery {
  params: IDeleteTaskByIdParams;
  result: IDeleteTaskByIdResult;
}

const deleteTaskByIdIR: any = {
  usedParamSet: { taskId: true },
  params: [
    {
      name: "taskId",
      required: false,
      transform: { type: "scalar" },
      locs: [{ a: 29, b: 35 }],
    },
  ],
  statement: "DELETE FROM tasks where id = :taskId",
};

/**
 * Query generated from SQL:
 * ```
 * DELETE FROM tasks where id = :taskId
 * ```
 */
export const deleteTaskById = new PreparedQuery<
  IDeleteTaskByIdParams,
  IDeleteTaskByIdResult
>(deleteTaskByIdIR);
