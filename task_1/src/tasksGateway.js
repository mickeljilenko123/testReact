const baseUrl = "https://crudcrud.com/api/980d1bd0aa114a8d89d8a4b17df8ecf4/tasks";


export const createTask = taskData => {
  //параметры передачи на сервер и в then проверяем статус
  return fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; utc-8' },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error("fail to create task");
    }
  })
}

export const fetchTasksList = () => {
  return fetch(baseUrl).then(res => {
    if (res.ok) {
      return res.json();
    }
  })
    .then(tasksList =>
      tasksList.map(({ _id, ...task }) => ({
        id: _id,
        ...task,
      }))
    )
}


export const updateTask = (taskId, taskData) => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json; utc-8' },
    body: JSON.stringify(taskData),
  }).then(response => {
    if (!response.ok) {
      throw new Error("fail to create task");
    }
  })
}

export const deleteTask = taskId => {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error("fail to delete task");
    }
  })
};