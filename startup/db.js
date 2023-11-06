const db = require('../models');
module.exports= async function(){

    await db.sequelize.sync({alert:true});
}
