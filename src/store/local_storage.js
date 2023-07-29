// For interacting with local storage


const saveInLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
}

const loadFromLocalStorage = (key, defaults) => {
  const retrieved = JSON.parse(localStorage.getItem(key));
  if (retrieved != null) {
    return retrieved
  } else {
    saveInLocalStorage(key, defaults)
    const data = JSON.parse(localStorage.getItem(key));
    return data
  }

}


export {saveInLocalStorage,loadFromLocalStorage}
