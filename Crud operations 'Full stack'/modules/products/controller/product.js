import sql from '../../DB/connection.js'

export const getAllproducts = (req,res)=>{
    sql.execute(`select * from products ` , (err,result)=>{
        if(err) 
        {
            res.json({message : "query error" , err})
        }
        else 
        {
                res.json({products : result})
        }
    })
}
export const getproduct = (req,res)=>{
    const {id} = req.params ;
    sql.execute(`select * from products as p inner join users as u on u.id = p.userID where p.id = ${id}` , (err,result)=>{
        if(err) 
        {
            res.json({message : "query error" , err})
        }
        else 
        {
                res.json({products : result})
        }
    })
}

export const addProduct = (req,res)=>{
    const {name , price , description ,userID} = req.body ;
    sql.execute(`INSERT INTO products (name , price , description  ) VALUES ('${name}','${price}','${description}');`, (err, result) =>{
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

export const updateProduct = (req,res)=>{
    const {name , id} = req.body ;
    sql.execute(`update products set name='${name}' where id='${id}'`,(err,result)=>{
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

export const deleteProduct =(req,res)=>{
    const { id } = req.body ;
    sql.execute(`Delete from products where id='${id}'` , (err,result)=>{
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

export const searchProduct =(req,res)=>{
    const {searchkey} = req.query ; 
    sql.execute(`select * from products where name like '%${searchkey}% '` , (err,result)=>{
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


