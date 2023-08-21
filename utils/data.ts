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

interface Vacancies {
            name:string,
            slug:string,
            company:string,
            category:string,
            image:string,
            location:string,
            requirements:string,
            description:string,
            wage:string,
            contact:string,
}

interface Products {
    name:string;
    slug:string;
    category:string;
    image:string;
    description:string;
    price:string;
    contact:string;

}


interface User {
    name:string;
    email: string;
    password: string
    isAdmin: boolean;
}

interface Data {
    news: News[];
    services: Services[];
    vacancies:Vacancies[];
    products: Products[];
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
       
        {
            name:'Victor',
            email:'victor@parquedasarvores.com',
            password:bcrypt.hashSync('123456'),
            isAdmin: false, 
         },
         {
            name:'Síndico',
            email:'sindico@parquedasarvores.com',
            password:bcrypt.hashSync('cpdaxhtz'),
            isAdmin: true, 
         },
    ],
    news:[
        {
            title:'Dicas Passeio com cachorro no condomínio',
            slug:'dicas-cachorro',
            data:'01/01/2023',
            category: 'informativo',
            image:'/images/dog.jpg',
            description:'Ao passear com seu animal, é obrigatório o uso da coleira guia. Para cães de grande porte e/ou temperamento agressivo é obrigatório o uso de focinheira. Evite acidentes;',
            

        },
        {
            title:'Dengue pode ser fatal!',
            slug:'dengue',
            data:'01/02/2023',
            category: 'informativo',
            image:'/images/dengue.jpg',
            description:'Explosão de casos requer cuidados em sua unidade para evitar essa doença perigosa. Faça sua parte! Dengue hemorrágica é a mais grave. Pode levar a morte! Atenção aos sintomas: febre alta; dor de cabeça, articulações e atrás dos olhos; fraqueza. Monitore espaços que acumulam água; encha de terra pratos de plantas e limpe comedouros de pets; tampe os ralos; adote o uso de repelentes e inseticidas.',
            

        },
        {
            title:'Realinhameto da coleta de lixo ',
            slug:'coleta-de-lixo',
            data:'23/05/2023',
            category: 'informativo',
            image:'/images/coletadelixo.jpg',
            description:'Dando continuidade á campanha de redução de custos com a coleta, onde obtivemos sucesso na 1ª etapa "eliminando domingos e feriados", informamos que a partir desta data 24/05/2023, a coleta de lixo está suspensa as quintas-feiras. As coletas de podas continuam as quartas e sexta-feiras.'

        },
      
        {
            title:'Atualização cartográfica ',
            slug:'zoneamento',
            data:'19/05/2023',
            category: 'informativo',
            image:'/images/zoneamento.jpg',
            description:'Viemos através deste, comunica-los o acesso da nossa equipe técnica para áreas internas desde condomínio, cujo objetivo é a atualização cartográfica, fotográfica e de logradouros. Arealização do trabalho deverá começar na data 29/05/2023. A sua colaboração é indispensável para o exito da atualização cadastral dos imoveis. realizando medições nas unidades imobiliárias comuns e autônomas. Ademais, também iremos necessitar dos dados cadastrais do proprietário, tais como: endereço de correspondência, e_mail e telefones para contato. '

        },
    
        {
            title:' ATENÇÃO! Animais soltos no condomínio',
            slug:'animais-soltos',
            data:'15/04/2023',
            category: 'informativo',
            image:'/images/animaissoltos.jpg',
            description:'Apesar da campanha de conscientização referente a animais soltos no condomínio, continuamos tendo muitas ocorrências, reclamações e registros diariamente, e antes que ocorra algo mais grave, precisamos voltar nossa atenção e tratar este assunto importante para a manutenção da boa convivência, tranquilidade e harmonia condominal.'

        },
        {
            title:' Portão para entrada de prestadores de serviço',
            slug:'portao-alternativo',
            data:'28/05/2023',
            category: 'informativo',
            image:'/images/portaoalternativo.jpg',
            description:'Foi realizado a instalação de um portão de acesso de prestadores de serviço que, antes utilizavam a mesma entrada dos condôminos para uma passagem exclussiva, a qual estaremos reativando em 30/05/2023, com o intuíto de melhorar o fluxo, segurança e organização. '

        },
        {
            title:' Festa Junina Parque das Árvores',
            slug:'festa-junina',
            data:'30/05/2023',
            category: 'informativo',
            image:'/images/festajunina.jpg',
            description:'Convidamos nossos vizinhos e amigos para dançar um gostoso forró no nosso clube! Início: 19h som mecânico Das 21h às 23h Trio nordestino Sela de Gancho. Venha se deliciar com uma boa comida típica e arrastar o pé!  Ocê é nosso convidado!'

        },
    ],
    services:[
        {
            name:' Aluguel de Equipamentos e ferramentas elétricas',
            company:'DSN Aluguel de Equipamentos',
            slug:'dsn-equipamentos',
            category:'construção',
            image:'/images/aluguelequipamentos.jpg',
            description:'Aluguel de material para contrução e reforma. Bitoneira, andames, ferrametas elétrica em geral',
            location:'Parque das Árvores',
            schedule:'08:00/17:00',
            contact:'71984405257'
        },
        {
            name:'Refrigreen Seu confornto é a nossa prioridade',
            company:'Refrigreen',
            slug:'refrigreen',
            category:'manutenção de eletrodoméstico',
            image:'/images/refrigreen.jpg',
            description:'Mautenção e reparos de: geladeira, freezer, frigobar, micro-ondas, lava e seca, maquina de lavar, ar-condicionado',
            location:'Parque das Árvores',
            schedule:'08:00/17:00',
            contact:'71993308066'
        },
        {
            name:'Açaí Delivery',
            company:'Quero + Açaí Barra do Jacuípe ',
            slug:'quero-mais-acai',
            category:'alimentos',
            image:'/images/queromaisacai.jpg',
            description:'Melhor açaí e hambúrguer da Linha Verde, Delivery',
            location:'Bosque Guaraípe',
            schedule:'13:00/18:00',
            contact:'71983534043'
        },
        {
            name:'Mudanças e Transporte de Cargas',
            company:'Marcos Bomfim Carreto',
            slug:'carreto-marcos',
            category:'carreto',
            image:'/images/carreto.jpg',
            description:'Fazemos mudanças e transporte de cargas.',
            location:'Parque das Árvores',
            schedule:'08:00/17:00',
            contact:'71988704828'
        },
        {
            name:'Confeitaria Artesanal Maria Geane',
            company:'Delícias da Dinda',
            slug:'delicias-da-dinda',
            category:'alimentos',
            image:'/images/deliciasdadinda.jpg',
            description:'Serviços de confeitaria com excelência e qualidade',
            location:'Parque das Árvores',
            schedule:'08:00/17:00',
            contact:'71999449494'
        },
        {
            name:'Pizzaria Hamburgueria Pastelaria',
            company:'Canto do Sol Empório & Pizzaria',
            slug:'canto-do-sol-pizzaria',
            category:'autos',
            image:'/images/cantodosolpizzaria.jpg',
            description:'serviço de lava-jato de qualidade',
            location:'Principal',
            schedule:'08:00/17:00',
            contact:'71999874064'
        },
      
    ],
    vacancies:[
        {
            name:'Açogueiro',
            slug:'acougueiro',
            company:'Mercadinho da Villa',
            category:'gastronomia',
            image:'',
            location:'açougue jacuípe',
            requirements:'4 anos de exp',
            description:'cortes e pesagem',
            wage:'a combinar',
            contact:'(71)98765-4321',


        },
        {
            name:'Vendedor',
            slug:'vendedor',
            company:'Pisos Atacado',
            category:'vendas',
            image:'',
            location:'art pedras',
            requirements:'3 anos de exp',
            description:'atendimento ao cliente',
            wage:'a combinar',
            contact:'(71)98765-4321',


        },
        {
            name:'Pedreiro',
            slug:'pedreio',
            company:'Construtora Litoral',
            category:'construção',
            image:'',
            location:' condominos da região',
            requirements:'2 anos de exp',
            description:'reboco e levante',
            wage:'a combinar',
            contact:'(71)98765-4321',


        },
        {
            name:'Padeiro',
            slug:'padeiro',
            company:'Padaria Silva',
            category:'gatronomia',
            image:'',
            location:'Rua da flores',
            requirements:'3 anos de exp',
            description:'fazer pães',
            wage:'a combinar',
            contact:'(71)98765-4321',


        },
        {
            name:'Recepcionista ',
            slug:'recepcionista',
            company:'telegas',
            category:'atendimento',
            image:'',
            location:'Bosque Guaraípe',
            requirements:'1 ano de exp',
            description:'atendente de chamados ',
            wage:'a combinar',
            contact:'(71)98765-4321',


        },
        {
            name:'Técnico em refrigração',
            slug:'refrigeracao',
            company:'TEF',
            category:'manutençao',
            image:'',
            location:'Rua Das Flores',
            requirements:'2 anos de exp',
            description:'manutenção em refrigeradores e ar-condicionados',
            wage:'a combinar',
            contact:'(71)98765-4321',


        }
      
    ],
    products:[
        {
            name:'cadeira de plastico',
            slug:'cadeira-de-plastico',
            category:'moveis',
            image:'/images/cadeiradeplastico.jpeg',
            description:'cadei ra de plastico nova',
            price:'70',
            contact:'7198765-1233'
        },
        {
            name:'Maquina de lavar',
            slug:'maquina-de-lavar',
            category:'eletrodomestico',
            image:'/images/maquinadelavar.jpeg',
            description:'Maquina de lavar em excelente estado',
            price:'400',
            contact:'7198765-1233'
        },
        {
            name:'cg 125',
            slug:'cg-125',
            category:'auto',
            image:'/images/cg125.jpg',
            description:'honda cg 125 2006',
            price:'4100',
            contact:'7198765-1233'
        },
        {
            name:'Jogo de panelas',
            slug:'jogo-de-panelas',
            category:'utensilios',
            image:'/images/jogodepanelas.jpeg',
            description:'jogo de panla semi novo',
            price:'150',
            contact:'7198765-1233'
        },
        {
            name:'pia',
            slug:'pia',
            category:'material de construção',
            image:'/images/pia.jpg',
            description:'Pia de ceramica',
            price:'250',
            contact:'7198765-1233'
        },
        {
            name:'sofa',
            slug:'sofa',
            category:'moveis',
            image:'/images/sofa.jpeg',
            description:'sofa semi novo',
            price:'300',
            contact:'7198765-1233'
        },
        {
            name:'celular a20',
            slug:'celular-a20',
            category:'eletronico',
            image:'/images/a20.jpeg',
            description:'celuar A20 com um ano de uso',
            price:'800',
            contact:'7198765-1233'
        },

    ]
}
export default data