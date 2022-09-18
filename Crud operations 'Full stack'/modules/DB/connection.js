import mysql from 'mysql2'
export const sql = mysql.createConnection({
    host:"localhost",
    database:'project1',
    user:'root',
    password:''
})
export default sql ;