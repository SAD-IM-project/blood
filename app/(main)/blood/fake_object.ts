import { Object } from "./page";
import countries from "./countries";

export interface Blood {
    id: string;
    owner_id: string;
    owner_name: string;
    blood_type: string;
    rh: "+" | "-";
    sex: "male" | "female" | "other";
    age: number;
    tags: string[];
    country: string;
}

function randomName() {
    const names = ["John", "Jane", "Doe", "Smith", "Alex", "Sara", "Tom", "Jerry", "Alice", "Bob"];
    return names[Math.floor(Math.random() * names.length)];
}

function randomTags(){
    const bloodRelatedDiseases = [
        'Anemia',
        'Hemophilia',
        'Sickle Cell Disease',
        'Leukemia',
        'Lymphoma',
        'Thrombocytopenia',
        'Thalassemia'
      ];
    
      const generalDiseases = [
        'Diabetes',
        'Hypertension (High Blood Pressure)',
        'Cardiovascular Diseases',
        'Asthma',
        'Chronic Obstructive Pulmonary Disease (COPD)',
        'Cancer',
        'Arthritis',
        'Alzheimer’s Disease',
        'Obesity',
        'Influenza (Flu)'
      ];

    //   get random number of tags
    const numTags = Math.floor(Math.random() * 3) + 1;
    const tags = [];
    for (let i = 0; i < numTags; i++) {
        const tag = Math.random() > 0.5 ? bloodRelatedDiseases[Math.floor(Math.random() * bloodRelatedDiseases.length)] : generalDiseases[Math.floor(Math.random() * generalDiseases.length)];
        tags.push(tag);
    }
    return tags;
}

// generate fake data for blood
const generateBlood = (): Blood => {
    return {
        id: Math.random().toString(36).substring(7),
        owner_id: Math.random().toString(36).substring(7),
        owner_name: randomName(),
        blood_type: ["A", "B", "AB", "O"][Math.floor(Math.random() * 4)],
        rh: ["+", "-"][Math.floor(Math.random() * 2)] as "+" | "-",
        sex: ["male", "female", "other"][Math.floor(Math.random() * 3)] as "male"| "female" | "other",
        age: Math.floor(Math.random() * 100),
        tags: randomTags(),
        country: countries[Math.floor(Math.random() * countries.length)]
    };
};

export const generateFakeBloods = (num: number): Blood[] => {
    const bloods = [];
    for (let i = 0; i < num; i++) {
        bloods.push(generateBlood());
    }
    return bloods;
}