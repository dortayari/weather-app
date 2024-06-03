
const set = (type: string, item: string) => {
    localStorage.setItem(type, item)
}

const get = (type: string) => {
    localStorage.getItem(type)
}

const remove = (type: string) => {
    localStorage.removeItem(type)
}

export const localStorageService = {
    set,
    get,
    remove
}