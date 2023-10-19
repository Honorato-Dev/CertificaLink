// eslint-disable-next-line no-unused-vars
let bcrypt = require('bcryptjs');
interface News {
    title:string,
    slug:string,
    data:string,
    category: string,
    image:string,
    description: string
    isFeatured?: boolean;
    banner?: string;
  
}

interface Services {
    name:string,
    company:string,
    slug:string,
    category:string,
    image:string,
    description:string,
    location:string,
    schedule:string,
    contact:string

}



interface Certificals {
    name:string;
    slug:string;
    category:string;
    image:string;
    description:string;
    date?:string;
    contact:string;

}


interface User {
    name:string;
    email: string;
    password: string
    isAdmin: boolean;
}

interface Data {
  
    certificals: Certificals[];
    users: User[];
}

const data:Data = {
    users:[
        {
           name:'Admin',
           email:'admin@certificalink.com',
           password:bcrypt.hashSync('123456'),
           isAdmin: true, 
        },
       
    
    ],
    
    certificals:[
        {
            name:'cadeira de plastico',
            slug:'cadeira-de-plastico',
            category:'moveis',
            image:'/images/cadeiradeplastico.jpeg',
            description:'cadei ra de plastico nova',
            date:'10/09/2011',
            contact:'7198765-1233'
        },
        {
            name:'Maquina de lavar',
            slug:'maquina-de-lavar',
            category:'eletrodomestico',
            image:'/images/maquinadelavar.jpeg',
            description:'Maquina de lavar em excelente estado',
            date:'10/12/2022',
            contact:'7198765-1233'
        },
       

    ]
}
export default data