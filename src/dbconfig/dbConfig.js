const mongoose = require('mongoose')



export default async function connect() {
    try {
        mongoose.connect('mongodb+srv://dashranger60:PRLSRLqfeJZKpCdK@cluster0.wdpquhk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        const connection = mongoose.connection;
        connection.on('connected',()=>{
            console.log("db connected successfully")
        })

        connection.on('error',(e)=>{
            console.log("error occured:"+e)
            process.exit()
        })
        
    } catch (error) {
        console.log("something went wrong");
        console.log(error)
    }
}