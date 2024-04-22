import mongoose from 'mongoose'

const certificalSchema = new mongoose.Schema(
    {
        name: {type: String, required:true},
        slug: {type: String, required:true, unique:true},
        category: {type: String, required:false},
        image: {type: String},
        description: {type: String, required:false},
        duration: {type:String, required:false},
        contact:{type: String, required:false},
        date: {type: String, required:false},
        
       
       
    },
    {
        timestamps: true,
    }
);

const Certifical = mongoose.models.Certifical || mongoose.model('Certifical',certificalSchema);
export default Certifical;