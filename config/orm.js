const connection = require('/connection');


const orm = {
 selectAll(dataTable) {
    const query = 'SELECT * FROM ??';
    connection.query(query, [dataTable], (err, result) => {
        if (err){ 
            throw err;
        }
        cb(result);
    });
 },

 insertAll = () => {},

 updateOne = () => {},

}

module.exports = orm;
