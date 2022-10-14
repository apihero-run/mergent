import { Schedule, Task, ApiHeroEndpoint } from "./@types";

/** 


* Get Tasks 
*/
export const getTasks: ApiHeroEndpoint<void, Array<Task>> = {
  id: "getTasks",
  clientId: "mergent",
  version: "1.0.0-beta.1",
};

/** 


* Create Task 
*/
export const createTask: ApiHeroEndpoint<{ task: Omit<Task, "status"> }, Task> = {
  id: "createTask",
  clientId: "mergent",
  version: "1.0.0-beta.1",
};

/** 


* Get Task
* @param taskId - Task ID 
*/
export const getTask: ApiHeroEndpoint<{ taskId: string }, Task> = {
  id: "getTask",
  clientId: "mergent",
  version: "1.0.0-beta.1",
};

/** 


* Delete Task
* @param taskId - Task ID 
*/
export const deleteTask: ApiHeroEndpoint<{ taskId: string }, void> = {
  id: "deleteTask",
  clientId: "mergent",
  version: "1.0.0-beta.1",
};

/** 


* Update Task
* @param taskId - Task ID 
*/
export const updateTask: ApiHeroEndpoint<{ taskId: string; task: Task }, Task> = {
  id: "updateTask",
  clientId: "mergent",
  version: "1.0.0-beta.1",
};

/** 


* Get Schedules 
*/
export const getSchedules: ApiHeroEndpoint<void, Array<Schedule>> = {
  id: "getSchedules",
  clientId: "mergent",
  version: "1.0.0-beta.1",
};

/** 


* Create Schedule 
*/
export const createSchedule: ApiHeroEndpoint<{ schedule: Schedule }, Schedule> = {
  id: "createSchedule",
  clientId: "mergent",
  version: "1.0.0-beta.1",
};

/** 


* Get Schedule
* @param scheduleId - Schedule ID 
*/
export const getSchedule: ApiHeroEndpoint<{ scheduleId: string }, Schedule> = {
  id: "getSchedule",
  clientId: "mergent",
  version: "1.0.0-beta.1",
};

/** 


* Delete Schedule
* @param scheduleId - Schedule ID 
*/
export const deleteSchedule: ApiHeroEndpoint<{ scheduleId: string }, void> = {
  id: "deleteSchedule",
  clientId: "mergent",
  version: "1.0.0-beta.1",
};

/** 


* Update Schedule
* @param scheduleId - Schedule ID 
*/
export const updateSchedule: ApiHeroEndpoint<{ scheduleId: string; schedule: Schedule }, Schedule> =
  {
    id: "updateSchedule",
    clientId: "mergent",
    version: "1.0.0-beta.1",
  };
