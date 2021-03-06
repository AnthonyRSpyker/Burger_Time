const { updateOne } = require('../config/orm');
const orm = require('../config/orm');


///code that will call the orm functions using burger specific input.
const burger = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },

    insertAll(cols, vals, cb) {
        orm.insertAll('burgers', cols, vals, (res) => cb(res))
    },

    updateOne(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, (res) => cb(res)) 
            
        },
    };

module.exports = burger;

