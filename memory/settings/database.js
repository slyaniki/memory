const mongoose = require('mongoose');
const connection = async () =>{
    try{
        await mongoose.connect('mongodb://51.77.197.177:27017/candidaturenan',{
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        });
        console.log(('connected'));
      /*  connect.db.collection('memory_resultatfinalgame',(err,collection)=>{
            collection.deleteMany() .then((resu) => {
                console.log(resu)
            })
        }); */
    }catch(e){
        console.log("err"+e);
    }
};
module.exports = connection;