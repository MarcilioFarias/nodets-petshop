// Show all pets
// Sort by species
// Sort by name

type PetType = 'dog'|'cat'|'fish';

type Pet = {
    specie: PetType,
    image: string,
    name: string,
    color: string,
    gender: 'male'|'female'
};


//Data base example
const data: Pet[] = [
    {
        specie: 'dog',
        image: 'pastor-alemao.jpg',
        name: 'Pastor-alemão',
        color: 'Amarelo e Preto',
        gender: 'male'
    },
    {
        specie: 'dog',
        image: 'labrador.jpg',
        name: 'Labrador-retriever',
        color: 'Branco',
        gender: 'male'
    },
    {
        specie: 'dog',
        image: 'zwergspitz.jpg',
        name: 'Zwergspitz',
        color: 'Amarelo',
        gender: 'female'
    },
    {
        specie: 'dog',
        image: 'husky.jpg',
        name: 'Husky Siberiano',
        color: 'Branco e Preto',
        gender: 'male'
    },
    {
        specie: 'dog',
        image: 'golden.jpg',
        name: 'Golden Retriever',
        color: 'Amarelo',
        gender: 'male'
    },
    {
        specie: 'dog',
        image: 'poodle.jpg',
        name: 'Poodle',
        color: 'Branco',
        gender: 'female'
    },
    {
        specie: 'dog',
        image: 'bulldog.jpg',
        name: 'Bulldog',
        color: 'Branco e Amarelo',
        gender: 'male'
    },
    {
        specie: 'cat',
        image: 'persa.jpg',
        name: 'Persa',
        color: 'Amarelo',
        gender: 'male'
    },
    {
        specie: 'cat',
        image: 'mainecoon.jpg',
        name: 'Maine Coon',
        color: 'Preto e Branco',
        gender: 'male'
    },
    {
        specie: 'cat',
        image: 'bengal.jpg',
        name: 'Bengal',
        color: 'Branco, Preto e Amarelo',
        gender: 'female'
    },
    {
        specie: 'cat',
        image: 'siames.jpg',
        name: 'Siamês',
        color: 'Amarelo e Preto',
        gender: 'male'
    },
    {
        specie: 'cat',
        image: 'sphynx.jpg',
        name: 'Sphynx',
        color: 'Branco',
        gender: 'male'
    },
    {
        specie: 'fish',
        image: 'neon.jpg',
        name: 'Tetra Neon',
        color: 'Vermelho e Azul',
        gender: 'male'
    },
    {
        specie: 'fish',
        image: 'matogrosso.jpg',
        name: 'Mato Grosso',
        color: 'Laranja',
        gender: 'male'
    },
    {
        specie: 'fish',
        image: 'limpavidro.jpg',
        name: 'Limpa Vidro',
        color: 'Verde e Branco',
        gender: 'male'
    },
    {
        specie: 'fish',
        image: 'tanictis.jpg',
        name: 'Tanictis',
        color: 'Vermelho',
        gender: 'male'
    },
    {
        specie: 'fish',
        image: 'acara.jpg',
        name: 'Acará Bandeira',
        color: 'Preto',
        gender: 'male'
    },
];


export const Pet = {

    getAll: (): Pet[] => {
        return data;
    },
    getFromSpecie: (type: PetType): Pet[] => {
        return data.filter(item => item.specie === type);
    },
    getFromName: (name: string): Pet[] => {
        return data.filter(item => {
            if(item.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1) {
                return true;
            } else {
                return false;
            }
        });
    }

};