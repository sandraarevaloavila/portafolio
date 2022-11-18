import work1 from '../../assets/eccomerreluciente.JPG'
import work2 from '../../assets/Portafolio.JPG'

export const projectsData = [
    {
        id:1,
        image: work1,
        title: 'Reluciente Aseo',
        category: 'backend',
        description: "Reluciente Aseo tiene como fin llevar a los hogares productos de aseo de calidad y a un buen precio, productos que cuiden de nuestras prendas y piel.",
        description2: 'Tecnologias Usadas',
        action1:'Python',
        action2: 'Django', 
        action3: 'SQL',
        action4: 'HTML',
        action5: 'CSS',
        action6: 'Bootstrap',
        web: 'https://ecommercerelucienteaseo.herokuapp.com/',
        code: 'https://github.com/sandraarevaloavila/RA.git',

    },
    {
        id:2,
        image: work2,
        title: 'Sandra Arevalo Portfolio',
        category: 'frontend',
        description: "Descripción de mi experiencia laboral como desarrolladora, estucios y habilidades",
        description2: 'Tecnologias Usadas',
        action1:'React',
        action2: 'Django', 
        action3: 'MongoDB',
        action4: '',
        action5: '',
        action6: '',
        web: '',
        code: 'https://github.com/sandraarevaloavila/portafolio.git',
    },
   
]

export const projectsNav = [
    {
        name: 'all',
    },
    {
        name: 'frontend',
    },
    {
        name: 'backend',
    },
]