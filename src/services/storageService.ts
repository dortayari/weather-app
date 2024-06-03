
const set = (type: string, item: string) => {
    const current = localStorage.getItem(type);
    const history = current ? JSON.parse(current) : [];
    history.push(item);
    localStorage.setItem(type, JSON.stringify(history));
}

const get = (type: string) => {
    const history = localStorage.getItem(type);
    return history ? JSON.parse(history) : [];
}

const remove = (type: string) => {
    localStorage.removeItem(type)
}

export const localStorageService = {
    set,
    get,
    remove
}