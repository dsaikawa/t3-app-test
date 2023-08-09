/* @name getAllTasks */
SELECT * FROM TASKS;

/* @name getTaskById
@param taskId -> (...) */
SELECT * FROM tasks where id = :taskId;

/* @name addTask
   @param task -> (...)
 */
INSERT INTO tasks(task, status) VALUES (:task, 'READY');

/* @name changeStatusToDone */
UPDATE tasks SET status = 'DONE' where id = :taskId;


/* @name deleteTaskById */
DELETE FROM tasks where id = :taskId;