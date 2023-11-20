export const saveToken = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const loadToken = (key) => {
  try {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
  } catch (error) {
    return null;
  }
};

export const removeToken = (key) => localStorage.removeItem(key);
