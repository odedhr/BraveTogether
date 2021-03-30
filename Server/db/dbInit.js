var mongoose =require( 'mongoose')

/*mongoose connection*/
function initDB (){
    try{

        mongoose.Promise  = global.Promise;
        mongoose.connect('mongodb://localhost:27017/brave',{
            useNewUrlParser: true,
        useUnifiedTopology: true
    },()=>console.log('success'))
}catch(error){
    console.log(error)
}
}
exports.initDB = initDB