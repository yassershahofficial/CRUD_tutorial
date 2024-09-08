const axios = require('axios');

exports.homeRoutes = (req,res) => {
    axios.get('http://localhost:3000/api/users')
        .then(function(response){
            res.render('index',{users: response.data});
        })
        .catch(err =>{
            res.send(err);
        })
    
}

exports.addUserRoutes = (req,res) => {
    res.render('add_user');
}

exports.updateUserRoutes = (req,res) => {
    res.render('update_user');
}