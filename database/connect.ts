import { connect } from 'mongoose';

const connectToDatabase = async () => {
    await connect(
        'mongodb+srv://zuberiyafathima:zubmongo123@cluster0.ibv2a79.mongodb.net/?retryWrites=true&w=majority'
    ).then(() => console.log('Connected to Database'));
};

export default connectToDatabase;
