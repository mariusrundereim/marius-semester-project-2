export const saveToken = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadToken = (key) => {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (error) {
    return null;
  }
};

export const removeToken = (key) => localStorage.removeItem(key);
