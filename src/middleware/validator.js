'use strict';

module.exports = (req, res, next) => {
    console.log(req.query.name);
    if(req.query.name){
        next();
    }
    else{
        next('no name in the query string');
    }
    
};
