

//@type{ Object.<string, import("knex").Knex.Config>}


export const develop = {
    client: 'mysql',
    connection: {
        user: 'root',
        password: '',
        host: 'localhost',
        port: 3306,
        database: 'cliente'
    }
};