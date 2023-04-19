import mongoose from "mongoose"

const HOST = process.env.DB_HOST || '127.0.0.1'
const PORT = process.env.DE_PORT || '27017'
const DB = 'sportsdb'

export async function ConnectDB() {
    try {
        await mongoose.connect(`mongodb://${HOST}:${PORT}/${DB}`)
        console.log('Database connected')
    } catch (error) {
        console.log(error)
        throw new Error("Can not connect to the database")
    }

}

