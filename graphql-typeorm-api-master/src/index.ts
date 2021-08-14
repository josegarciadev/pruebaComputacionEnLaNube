import "reflect-metadata"
import {connect} from './config/typeorm'
import {startServer} from './app'


async function main(){

    connect();
    const app = await startServer();
    app.listen(app.get('port'));
    console.log('Server on port', app.get('port'))
}

main()