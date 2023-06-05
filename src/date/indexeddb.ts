import {Note} from "../types/Note";


export function init(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        const openReq = window.indexedDB.open("db", 1)
        openReq.onupgradeneeded = () => {
            const db = openReq.result
            if (!db.objectStoreNames.contains('notes')) {
                console.log("not contains")
                db.createObjectStore('notes', {keyPath: "id", autoIncrement: true});
            }
            resolve(db)
        }
        openReq.onerror = () => {
            alert('error opening database ');
            reject("error")
        }
        openReq.onsuccess = () => {
            const db = openReq.result
            // db.transaction("notes","readwrite").objectStore("notes").clear()
            resolve(db)
        }
    })

}

export function get( storeName: string, name: string):Promise<Note> {
    return new Promise(async (resolve, reject) => {
        const db = await  init();
        const transaction = db.transaction(storeName, "readonly")
        const store = transaction.objectStore(storeName)
        const request = store.get(name)
        request.onerror = (error) => {
            reject(error)
        }
        request.onsuccess = () => {
            resolve(request.result)
        }

    })
}

export function set(storeName: string, note: Note):Promise<IDBValidKey>{
    return new Promise(async (resolve, reject) => {
        const db = await init();
        const transaction = db.transaction(storeName, "readwrite")
        const store = transaction.objectStore(storeName)
        const request = store.put(note)
        request.onerror = (error) => {
            reject(error)
        }
        request.onsuccess = () => {
            resolve(request.result)
        }
    })
}
export function del(storeName: string, noteId: string){
    return new Promise(async (resolve, reject) => {
        const db = await init();
        const transaction = db.transaction(storeName, "readwrite")
        const store = transaction.objectStore(storeName)
        const request = store.delete(noteId)
        request.onerror = (error) => {
            reject(error)
        }
        request.onsuccess = () => {
            resolve(request.result)
        }
    })
}

export function getAll(storeName: string): Promise<Note[]> {
    return new Promise(async (resolve, reject) => {
        const db = await init()
        const
            transaction = db.transaction(storeName, "readonly"),
            store = transaction.objectStore(storeName)
        const request = store.getAll()
        request.onerror = (error) => {
            reject(error)
        }
        request.onsuccess = () => {
            resolve(request.result)
        }
    })
}

