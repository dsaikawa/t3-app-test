/** Types generated for queries found in "src/db/todo.sql" */
import { PreparedQuery } from '@pgtyped/runtime';

/** 'GetAllTasks' parameters type */
export type IGetAllTasksParams = void;

/** 'GetAllTasks' return type */
export interface IGetAllTasksResult {
  id: number;
  task: string;
}

/** 'GetAllTasks' query type */
export interface IGetAllTasksQuery {
  params: IGetAllTasksParams;
  result: IGetAllTasksResult;
}

const getAllTasksIR: any = {"usedParamSet":{},"params":[],"statement":"SELECT * FROM tasks"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM tasks
 * ```
 */
export const getAllTasks = new PreparedQuery<IGetAllTasksParams,IGetAllTasksResult>(getAllTasksIR);


/** 'GetTaskById' parameters type */
export interface IGetTaskByIdParams {
  taskId?: number | null | void;
}

/** 'GetTaskById' return type */
export interface IGetTaskByIdResult {
  id: number;
  task: string;
}

/** 'GetTaskById' query type */
export interface IGetTaskByIdQuery {
  params: IGetTaskByIdParams;
  result: IGetTaskByIdResult;
}

const getTaskByIdIR: any = {"usedParamSet":{"taskId":true},"params":[{"name":"taskId","required":false,"transform":{"type":"scalar"},"locs":[{"a":31,"b":37}]}],"statement":"SELECT * FROM tasks where id = :taskId"};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM tasks where id = :taskId
 * ```
 */
export const getTaskById = new PreparedQuery<IGetTaskByIdParams,IGetTaskByIdResult>(getTaskByIdIR);


