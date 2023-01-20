const baseUrl = 'https://api.iev.aero/api/flights/';

export const fetchTaskList = date =>
  fetch(baseUrl + date).then(res => {
    if (!res.ok) {
      throw new Error('Failed to fetch tasks list');
    }
    return res.json();
  });
