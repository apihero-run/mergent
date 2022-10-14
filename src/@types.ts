export type { ApiHeroEndpoint } from "@apihero/core";

/**
 * A unique ID assigned upon creation.
 */
export type Id = string;

export type Task = {
  id?: Id;

  /** 
* An optional name of the Task. This string must not contain more than 500
characters.

*/
  name?: string;

  /** 
* The [ISO 8601 duration](https://en.wikipedia.org/wiki/ISO_8601#Durations)
for the time to wait before the Task is executed. Example: "PT1M" for a
delay of 1 minute.

When both `delay` and `scheduled_for` are present, `delay` will be added
to `scheduled_for`.

*/
  delay?: string;

  /**
   * The status of this Task.
   */
  readonly status?: "queued" | "working" | "success" | "failure";
  request?: Request;
  created_at?: CreatedAt;

  /** 
* The [ISO 8601 timestamp](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations)
for when the Task is scheduled to be executed. Example:
"2021-10-01T15:53:05Z".

When not present, the Task will be scheduled for immediate execution.

*/
  scheduled_for?: string;
};

export type Error = {
  /**
   * A human-readable message providing more details about the error.
   */
  message?: string;
};

export type Request = {
  /** 
* The URL that the POST request will be sent to.

For localhost development, use something like ngrok to get a publicly
accessible URL for your local service. See https://docs.mergent.co for
more info.

*/
  url: string;

  /**
   * The HTTP request body as a string.
   */
  body?: string;

  /** 
* The headers that will accompany any Task's HTTP request. For
example, you can use this to set Content-Type to "application/json"
or "application/octet-stream".

*/
  headers?: Record<string, string>;
};

export type Schedule = {
  id?: Id;

  /** 
* A [cron expression](https://crontab.guru/examples.html) describing the
Schedule on which Tasks will run (UTC).

Note: execution n + 1 of a Task will not begin until execution n has
completed successfully.

You must pass either `cron` or `rrule` when creating a new Schedule.

*/
  cron?: string;

  /** 
* An [iCal RRule expression](https://icalendar.org/iCalendar-RFC-5545/3-8-5-3-recurrence-rule.html)
describing the Schedule on which Tasks will run (UTC). The time of
Schedule creation will be used as the start of the recurrence interval
(i.e. `DTSTART`).

Note: execution n + 1 of a Task will not begin until execution n has
completed successfully.

You must pass either `cron` or `rrule` when creating a new Schedule.

*/
  rrule?: string;

  /** 
* If `true`, the Schedule will be paused immediately. If `false`, a paused
Schedule will be resumed.

*/
  paused?: boolean;

  /** 
* The [ISO 8601 timestamp](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations)
denoting the start of an RRULE schedule. Example: "2021-10-01T15:53:05Z".

When not set, it will be set to the current time, and the first Task will
be scheduled immediately.

Ignored for `cron`-type Schedules.

*/
  dtstart?: string;
  request?: Request;
  created_at?: CreatedAt;

  /** 
* An optional description of the Schedule. This string must not contain more
than 500 characters.

*/
  description?: string;
};

/**
 * The [ISO 8601 timestamp](https://en.wikipedia.org/wiki/ISO_8601#Combined_date_and_time_representations) representing when the object was created.
 */
export type CreatedAt = string;
