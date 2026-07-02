export const authFetch = (url, options, {}) => {
  const token = localStorage.getItem("token");
  return fetch(url, {
    ...options,
    headers: {
      "Content-Tupe": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });
};
