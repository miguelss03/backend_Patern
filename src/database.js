import fs from 'node:fs/promises'

export class Database {
    #database = {}

    #persist() {

    }

    select(table) {
        const data = this.#database[table] ?? []
        return data
    }

    insert(table, data) {
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data)
        } else {
            this.#database[table] = [data]
        }

        return data;
    }
}