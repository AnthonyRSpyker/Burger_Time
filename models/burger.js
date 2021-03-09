
const orm = require('../config/orm');


///code that will call the orm functions using burger specific input.
const burger = {
    selectAll(cb) {
        orm.selectAll((res) => cb(res));
    },

    createOne(cols, vals, cb) {
        orm.createOne('burgers', cols, vals, (res) => cb(res))
    },

    updateOne(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, (res) => cb(res)) 
            
        },
    };

module.exports = burger;

