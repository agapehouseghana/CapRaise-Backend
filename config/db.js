const mongoose =require('mongoose')


const connectDB = async() => {
    try {
        // const conn = await mongoose.connect("mongodb+srv://dekasafehouseafrica:Password1@dekacluster.jwm3mvb.mongodb.net/deka?retryWrites=true&w=majority")
        const conn = await mongoose.connect("mongodb+srv://appsadmin:2ibbPVlVweHPrfnm@agape.ue8uejr.mongodb.net/?retryWrites=true&w=majority&appName=Agape")
        console.log(`Connected :${conn.connection.host}`.blue)
        
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
module.exports=connectDB