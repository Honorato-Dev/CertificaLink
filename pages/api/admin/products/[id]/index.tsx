import { getSession } from "next-auth/react"
import Product from "@/models/Product";
import db from "@/utils/db";



const handler = async (req:any, res:any) => {
    const session:any = await getSession({ req});
    if (!session || (session && !session.user.isAdmin)){
        return res.status(401).send('signin required');
    }

    // eslint-disable-next-line no-unused-vars
    const { user } = session;
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
  const product:any = await Product.findById(req.query.id);
  await db.disconnect();
  res.send(product);
};

const putHandler= async (req:any,res:any) => {
    await db.connect();
    const product = await Product.findById(req.query.id);
    if (product){
        product.name = req.body.name || product.name;
        product.slug = req.body.slug || product.slug;
        product.category = req.body.category || product.category;
        product.image = req.body.image || product.image;
        product.price = req.body.price || product.price;
        product.description = req.body.description || product.description;
        product.contact = req.body.contact || product.contact;
        await product.save(); 
        await db.disconnect();
        res.send({message: 'Product updated successfully'})
    }else{
        await db.disconnect();
        res.status(404).send({message:'Product not found'})
    }
   
};
const deleteHandler = async (req:any, res:any) => {
    await db.connect();
    const product = await Product.findById(req.query.id);
    if (product) {
        await product.deleteOne();
        await db.disconnect();
        res.send({message: 'Product deleted successfully'})
    }else{
        await db.disconnect();
        res.status(404).send({ message: 'Product not found'})
    }
}
export default handler