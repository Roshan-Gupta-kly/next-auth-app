import mongoose from 'mongoose';

let initialized = false;

export const connect = async () => {
    mongoose.set('strictQuery', true);

    if(initialized){
        console.log('MongoDB Connected')
        return ;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName:"next-auth-app",
            useNewUrlParser: true,
            userUnifiedToplogy: true,
        })
        console.log('MongoDB Connected');
        initialized = true;
    } catch (error) {
        console.log('MongoDB connection err:', error);
    }
}