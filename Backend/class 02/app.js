import express from 'express';
import { productData } from './data.js';
import chalk from 'chalk';

const app = express();

const PORT = 5000;

app.use(express.json())



// get all products

app.get('/products',(req,res)=>{
      res.send(productData)
})


// Single obj


app.get('/products/:id',(req,res)=>{
    
    const {id} = req.params;
    console.log(typeof id);

    const filterData = productData.filter((e,i)=>{
        return e.id == id
    })

    res.send(filterData);
    
    
})


// single product data and all products data

app.get('/product',(req,res)=>{
    const {id} = req.query;

    console.log(id);

    if(id){
        const filterData = productData.filter((e,i)=>{
                    return e.id == id
                })
            
                res.send(filterData);
    }
    res.send(productData)
    
})


// endpoints user api

app.get('/getUser',(req,res)=>{
    res.json({
        message:'GET USER DATA....'
    })
})
app.post('/createUser',(req,res)=>{
    console.log(req.body);
    res.send('CREATE USER')
})
app.put('/updateUser',(req,res)=>{
    res.send('UPDATE USER')
})
app.delete('/deleteUser',(req,res)=>{
    res.send('DELETE USER')
})



app.get('/',(req,res)=>{
    res.send('server is running now!!')
})

// create server using expressjs

app.listen(PORT,()=>{
    console.log(chalk.bgCyan.italic(`server is running on http:localhost:${PORT}`));
    
})




