const router = express.Router();
const burger = require('../models/burger');



router.get('/', (req, res) => {
    burger.all((data) => {
      const hbsObject = {
        burgers: data,
      };
      console.log('hbsObject', hbsObject);
      res.render('index', hbsObject);
    });
  });


router.post()


module.exports = burgers_controller;