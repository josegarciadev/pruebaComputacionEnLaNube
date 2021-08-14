import {createConnection} from 'typeorm'
import { EnvService } from './env.service'
import path from 'path'

export async function connect(){

    const config = new EnvService().isRead();
    
    /* Test config DB: console.log(config); */

    await createConnection({
        type: config.TYPE_DB,
        host: config.DB_HOST,
        port: config.DB_PORT,
        username: config.DB_USER,
        password: config.DB_PASSWORD,
        database: config.DB_NAME,

        entities: [
            path.join(__dirname, '../entity/**/**.ts')
        ],
        synchronize: true

    })

    console.log('Database is connected')
}