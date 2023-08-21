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
           email:'admin@parquedasarvores.com',
           password:bcrypt.hashSync('thmpv77d6f'),
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
            
            contact:'7198765-1233'
        },
        {
            name:'Maquina de lavar',
            slug:'maquina-de-lavar',
            category:'eletrodomestico',
            image:'/images/maquinadelavar.jpeg',
            description:'Maquina de lavar em excelente estado',
            
            contact:'7198765-1233'
        },
        {
            name:'cg 125',
            slug:'cg-125',
            category:'auto',
            image:'/images/cg125.jpg',
            description:'honda cg 125 2006',
            
            contact:'7198765-1233'
        },
        {
            name:'Jogo de panelas',
            slug:'jogo-de-panelas',
            category:'utensilios',
            image:'/images/jogodepanelas.jpeg',
            description:'jogo de panla semi novo',
            
            contact:'7198765-1233'
        },
        {
            name:'pia',
            slug:'pia',
            category:'material de construção',
            image:'/images/pia.jpg',
            description:'Pia de ceramica',
            
            contact:'7198765-1233'
        },
        {
            name:'sofa',
            slug:'sofa',
            category:'moveis',
            image:'/images/sofa.jpeg',
            description:'sofa semi novo',
            
            contact:'7198765-1233'
        },
        {
            name:'celular a20',
            slug:'celular-a20',
            category:'eletronico',
            image:'/images/a20.jpeg',
            description:'celuar A20 com um ano de uso',
            
            contact:'7198765-1233'
        },

    ]
}
export default data