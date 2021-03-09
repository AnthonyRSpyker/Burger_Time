
const orm = require('../config/orm');



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
    deleteOne(ids, cb) {
        orm.deleteOne('burgers', ids, (res) => cb(res));
      },
};

module.exports = burger;

