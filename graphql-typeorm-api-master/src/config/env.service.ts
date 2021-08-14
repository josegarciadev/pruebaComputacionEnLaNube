import * as dotenv from 'dotenv'
import * as fs from 'fs'

export interface EnvData{

    //DataBase
    TYPE_DB: 'mysql' | 'mariadb'
    DB_HOST?: string
    DB_NAME: string
    DB_PORT?: number
    DB_USER: string
    DB_PASSWORD: string
}

export class EnvService{

    private vars: EnvData

    constructor(){

        const data: any = dotenv.parse(fs.readFileSync(`.env`)) //Parsing for file .env.
        data.DB_PORT = parseInt(data.DB_PORT);

        this.vars = data as EnvData
    }   

    isRead (): EnvData{
        return this.vars
    }

}