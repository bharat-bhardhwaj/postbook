const express= require('express');

const router = express.Router();

const indexController=require('../controllers/indexController');


router.get('/',indexController.account);

router.get('/sign-in',indexController.signin);

module.exports=router;
