
const set = (type: string, item: string) => {
    const current = localStorage.getItem(type);
    const history = current ? JSON.parse(current) : [];
    if(history.includes(item)) {
        moveItemToFront(history, item)
        return
    }
    history.unshift(item);
    localStorage.setItem(type, JSON.stringify(history));
}

const get = (type: string) => {
    const history = localStorage.getItem(type);
    return history ? JSON.parse(history) : [];
}

const remove = (type: string) => {
    localStorage.removeItem(type)
}

const moveItemToFront = (arr: [string], item: string) => {
    const itemIdx = arr.findIndex((string:string) => string === item)
    arr.splice(itemIdx, 1)
    arr.unshift(item)
    localStorage.setItem("history", JSON.stringify(arr));
}

export const localStorageService = {
    set,
    get,
    remove
}