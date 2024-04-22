import { getSession } from "next-auth/react";
import Certifical from "@/models/Certifical";
import db from "@/utils/db";

const handler = async (req:any, res:any) => {
    const session:any = await getSession({req});
    if (!session || !session.user.isAdmin){
        return res.status(401).send('admin signin required');

    }
    //const { user } = session;
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
        name:'inisira o nome',
        slug: 'insira-slug',
        category: 'insira a categoria',
        image: '',
        date:'00/00/0000',
        duration:'d/h',
        description: 'Insira a descrição da certificação',
        contact:'insira o contato'
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

