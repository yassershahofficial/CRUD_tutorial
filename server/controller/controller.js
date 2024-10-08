var Userdb = require('../model/model');

//create and save new user
exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({message : "Content cannot be empty!"});
        return;
    }

    //new user
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    });

    //save the user in the database
    user
        .save(user)
        .then(data =>{
            // res.send(data)
            res.redirect('/')
        })
        .catch(err =>{
            res.status(500).send({message: err.message || "Some error has occured while creating a create operation"})
        });

}

//retrieve and return all users/ retrieve and return a single user
exports.find = (req,res)=>{
    if(req.query.id){
        const id = req.query.id;
        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({message: "Not found user with id "+id})
                }else{
                    res.send(data)
                } 
            })
            .catch(err =>{
                res.status(500).send({message: err.message || "Error retrieving user with id "+id})
            })
    }else{
        Userdb.find()
            .then(user =>{
                res.send(user)
            })
            .catch(err =>{
                res.status(500).send({message: err.message || "Error occured while retrieving information"})
            })
    }
}

//update a new identified user by user id
exports.update = (req,res)=>{
    if(!req.body){
        return res.status(400).send({message: "Data Cannot be Empty"})
    }
    
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body)
        .then(data =>{
            if(!data){
                res.status(404).send({message : `Cannot update user with id = ${id} , Maybe user not found`})
            }else{
                res.send({message : "User was update successfully!"})
            }
        })
        .catch(err =>{
            res.status(500).send({message: err.message || "Error update user information"})
        })
}

//Delete a user with specific user id in the request
exports.delete = (req,res)=>{
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message : `Cannot delete with id = ${id} , Maybe id is incorrect`})
            }else{
                res.send({message : "User was deleted successfully!"})
            }
        })
        .catch(err =>{
            res.status(500).send({message: err.message || `Cannot delete user id = ${id}`})
        })

}