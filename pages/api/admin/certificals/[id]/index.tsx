
import Certifical from "@/models/Certifical";
import db from "@/utils/db";



const handler = async (req:any, res:any) => {
 
    if(req.method === 'GET'){
        return getHandler(req, res);
    }else if (req.method === 'PUT'){
        return putHandler(req,res);
    }else if (req.method === 'DELETE') {
        return deleteHandler(req, res);
    }else{
        return res.status(400).send({message:'Method not allowed'})
    }
};
const getHandler= async (req:any, res:any) =>{
  await db.connect();
  const certifical:any = await Certifical.findById(req.query.id);
  await db.disconnect();
  res.send(certifical);
};

const putHandler= async (req:any,res:any) => {
    await db.connect();
    const certifical = await Certifical.findById(req.query.id);
    if (certifical){
        certifical.name = req.body.name || certifical.name;
        certifical.slug = req.body.slug || certifical.slug;
        certifical.category = req.body.category || certifical.category;
        certifical.image = req.body.image || certifical.image;
        certifical.date = req.body.date || certifical.date;
        certifical.description = req.body.description || certifical.description;
        certifical.duration = req.body.duration || certifical.duration;
        certifical.contact = req.body.contact || certifical.contact;
        await certifical.save(); 
        await db.disconnect();
        res.send({message: 'certifical updated successfully'})
    }else{
        await db.disconnect();
        res.status(404).send({message:'certifical not found'})
    }
   
};
const deleteHandler = async (req:any, res:any) => {
    await db.connect();
    const certifical = await Certifical.findById(req.query.id);
    if (certifical) {
        await certifical.deleteOne();
        await db.disconnect();
        res.send({message: 'certifical deleted successfully'})
    }else{
        await db.disconnect();
        res.status(404).send({ message: 'certifical not found'})
    }
}
export default handler