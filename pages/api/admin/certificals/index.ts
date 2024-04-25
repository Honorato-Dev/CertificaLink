
import Certifical from "@/models/Certifical";
import db from "@/utils/db";

const handler = async (req:any, res:any) => {
   
    
    if (req.method === 'GET'){
        return getHandler(req, res);
    }else if(req.method === 'POST') {
        return postHandler(req, res);
    }
    else {
        return res.status(400).send({message: 'Method not allowed'})
    }
};
const postHandler = async (req:any, res:any) => {
    await db.connect();
    const newCertifical = new Certifical({
        name:'New name',
        slug: 'URL'+ Math.random(),
        category: 'New category',
        image: '',
        date:'00/00/0000',
        duration:'d/h',
        description: 'Description of the certification',
        contact:'Name of the institution'
    });
    const certifical = await newCertifical.save();
    await db.disconnect()
    res.send({message: 'Certifical created successfully', certifical})
}
const getHandler = async (req:any, res:any) => {
    await db.connect();
    const certifical = await Certifical.find({});
    await db.disconnect();
    res.send(certifical);
}

export default handler;

