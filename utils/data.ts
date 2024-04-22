// eslint-disable-next-line no-unused-vars
let bcrypt = require('bcryptjs');



interface Certificals {
    name:string;
    slug:string;
    category:string;
    image:string;
    description:string;
    duration: string;
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
            name:'Curso 1',
            slug:'curso1',
            category:'tech',
            image:'/public/images/certifical01.jpg',
            description:'curso1',
            duration:'d/h',
            date:'10/09/2011',
            contact:'7198765-1233'
        },
        {
            name:'Curso 2',
            slug:'curso2',
            category:'heath',
            image:'/public/images/certifical02.jpg',
            description:'curso 2',
            duration:'d/h',
            date:'10/12/2022',
            contact:'7198765-1233'
        },
        {
            name:'Curso 3',
            slug:'curso3',
            category:'heath',
            image:'/public/images/certifical03.jpg',
            description:'curso 3',
            duration:'d/h',
            date:'10/12/2022',
            contact:'7198765-1233'
        },
       

    ]
}
export default data