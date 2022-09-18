import sql from '../../../modules/DB/connection.js'

export const getAllUsers = (req,res)=>{
    sql.execute(`select * from users` , (err,result)=>{
        if(err) 
        {
            res.json({message : "query error" , err})
        }
        else 
        {
                res.json({users : result})
        }
    })
}
export const signin = (req,res)=>{
    const {email , password } = req.body ;
    sql.execute(`select * from users where email='${email}' and password='${password}'`, (err, result) =>{
        if(err) 
        {
            res.json({message : "query error" , err})
        }
        else 
        {
            if (result.length) {
                res.send({message: "success" , result }) 
            } else {
                res.send({message: "In-valid account" , result }) 
            }
        }
    })
}
export const addUser = (req,res)=>{
    const {name , password , email} = req.body ;
    sql.execute(`INSERT INTO users (email , password, name) VALUES ('${email}','${password}','${name}');`, (err, result) =>{
        if(err) 
        {
            res.json({message : "query error" , err})
        }
        else 
        {
            res.send({message: "success" , result }) 
        }
    })
}

export const updateUser = (req,res)=>{
    const {name , id} = req.body ;
    sql.execute(`update users set name='${name}' where id='${id}'`,(err,result)=>{
        if(err) 
        {
            res.json({message : "query error" , err})
        }
        else 
        {
            if(result.affectedRows)
            {
                res.json({message : 'success' , result})
            }
            else 
            {
                res.json({message : "invalid account" , result})
            }
        }
    })
}

export const deleteUser =(req,res)=>{
    const { id } = req.body ;
    sql.execute(`Delete from users where id='${id}'` , (err,result)=>{
        if(err) 
        {
            res.json({message : "query error" , err})
        }
        else 
        {
            if(result.affectedRows)
            {
                res.json({message : 'success' , result})
            }
            else 
            {
                res.json({message : "invalid account" , result})
            }
        }
    })
} 

export const searchUser =(req,res)=>{
    const {searchkey} = req.query ; 
    sql.execute(`select * from users where name like '%${searchkey}% '` , (err,result)=>{
        if(err) 
        {
            res.json({message : "query error" , err})
        }
        else 
        {
            if(result.affectedRows)
            {
                res.json({message : 'success' , result})
            }
            else 
            {
                res.json({message : "invalid account" , result})
            }
        }
    })
} 


