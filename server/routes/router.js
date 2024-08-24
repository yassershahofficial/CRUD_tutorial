const express = require('express');
const route = express.Router();
const services = require('../services/render');

/** 
 * @description Root Route
 * @method GET /
 */
route.get('/', services.homeRoutes)

/** 
 * @description Add User Route
 * @method GET /add-user
 */
route.get('/add-user', services.addUserRoutes)

/** 
 * @description Update User Route
 * @method GET /update-user
 */
route.get('/update-user', services.updateUserRoutes)

module.exports = route;