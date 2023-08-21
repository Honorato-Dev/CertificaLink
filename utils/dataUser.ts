let bcrypt = require('bcryptjs');
interface User {
    name:string;
    email: string;
    password: string
    isAdmin: boolean;
}
interface Data {

    users: User[];
}

const data:Data = {
    users: [
        {
            name:'Debora',
            email:'debora@parquedasarvores.com',
            password:bcrypt.hashSync('cpdaythe'),
            isAdmin: true, 
         },

    ]
}

export default data