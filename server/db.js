import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
    user: 'jessecarter',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'jwt'
});

export default pool;