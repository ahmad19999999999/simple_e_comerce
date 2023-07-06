const { models: { Categories } } = require('../../models');
module.exports={
update: async (req, res) => {
         try {
           const result = await Categories.update(
             { ...req.body },
            {
               where: {
                 id: req.params.id,
              },
             }
           );
    
           if (result[0] === 0) {
         return res.status(404).json({
             status: "fail",
               message: "Categories with that ID not found",
             });
           }
    
    
          res.status(200).json(categories);
       } catch (error) {
           res.status(500).json({
     status: "error",
             message: error.message,
           });
         }
       }
    }