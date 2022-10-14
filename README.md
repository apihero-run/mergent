# API Hero integration for Mergent.co

## Installation

```bash

npm i @apihero/node @apihero/mergent
```

## Usage

### Create a task

```ts
import { fetchEndpoint } from "@apihero/node"
import { endpoints, Task } from "@apihero/mergent"

async function main(): Promise<Task> {
  const result = await fetchEndpoint(endpoints.createTask, {
    task: {
      name: "Example task",
      delay: "PT1M",
      scheduled_for: "2021-10-01T15:53:05Z"
      request: {
        url: "https://app.apihero.run/mergent/callbacks/1234",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({ foo: "bar" })
      }
    }
  });

  if (result.status === "error") {
    throw result.error;
  }

  return result.data;
}
```
