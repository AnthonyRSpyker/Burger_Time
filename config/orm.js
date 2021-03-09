const connection = require('./connection.js');

const printQuestionMarks = (num) => {
    const arr = [];
  
    for (let i = 0; i < num; i++) {
      arr.push('?');
    }
  
    return arr.toString();
  };

const objToSql = (ob) => {
    const arr = [];
  
    
    for (const key in ob) {
      let value = ob[key];
      
      if (Object.hasOwnProperty.call(ob, key)) {
        
        if (typeof value === 'string' && value.indexOf(' ') >= 0) {
          value = `'${value}'`;
        }
      
        arr.push(`${key}=${value}`);
      }
    }
  
    
    return arr.toString();
  };
const orm = {
 selectAll(cb) {
    const query = 'SELECT * FROM burgers';
    connection.query(query, (err, result) => {
        if (err){ 
            throw err;
        }
        cb(result);
    });
 },

createOne(cols, vals, cb) {
    let queryString = `INSERT INTO burgers`;

    queryString += ' (';
    queryString += cols.toString();
    queryString += ') ';
    queryString += 'VALUES (';
    queryString += printQuestionMarks(vals.length);
    queryString += ') ';

    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateOne(table, objColVals, id, cb) {
    let queryString = `UPDATE ${table}`;

    queryString += ' SET ';
    queryString += objToSql(objColVals);
    queryString += ' WHERE ';
    queryString += id;

    console.log(queryString);
    connection.query(queryString, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  deleteOne(table, id, cb) {
      let queryString = `DELETE FROM ${table}`;

      queryString += ` WHERE `;
      queryString += id;
      console.log(queryString);
      connection.query(queryString, (err, result) => {
          if (err) {
              throw err;
          }

          cb(result);
      });
  },
}

module.exports = orm;
