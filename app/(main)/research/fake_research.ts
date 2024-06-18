import countries from "../blood/countries";

export interface Research {
  id: string;
  research_name: string;
  corporation_id: string;
  corporation_name: string;
  quota: number;
  tags: string[];
  country: string;
  price: number;
}

function randomResearchName() {
  const name = [
    "Erythrocyte Deformability Analysis",
    "Thrombocyte Aggregation Study",
    "Hematopoietic Stem Cell Characterization",
    "Plasma Protein Interaction Mapping",
    "Leukocyte Activation Response Test",
    "Hemoglobin Variant Identification Assay",
    "Coagulation Cascade Profiling",
    "Serum Biomarker Discovery",
    "Red Blood Cell Lifespan Determination",
    "Cytokine Release Measurement",
    "Immune Cell Phenotyping via Flow Cytometry",
    "MicroRNA Expression in Anemia",
    "Genetic Screening for Thalassemia",
    "Blood-Brain Barrier Permeability Assessment",
    "Antibody-Antigen Binding Affinity Test",
    "Monocyte-Macrophage Differentiation Pathway Analysis",
    "Blood Microbiome Diversity Study",
    "Ex Vivo Platelet Function Test",
    "Oxidative Stress Markers in Blood Cells",
    "Epigenetic Modifications in Hematologic Malignancies"
  ];

  return name[Math.floor(Math.random() * name.length)];
}

function randomCorporationName() {
  const name = [
    "BioGenix Corp",
    "NaturaLife Technologies",
    "GenEra Innovations",
    "EcoBio Solutions",
    "BioSynthesis Inc.",
    "LifePulse Biotech",
    "TerraGene Sciences",
    "VitalBio Labs",
    "BioFusion Enterprises",
    "AquaVita Biotechnologies",
  ];

  return name[Math.floor(Math.random() * name.length)];
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

export const generateFakeResearch = (num: number): Research[] => {
  const data = [];
  for (let i = 0; i < num; i++) {
    data.push({
      id: Math.random().toString(36).substring(7),
      corporation_id: Math.random().toString(36).substring(7),
      corporation_name: randomCorporationName(),
      quota: Math.floor(Math.random() * 100) * 1000,
      tags: randomTags(),
      country: countries[Math.floor(Math.random() * countries.length)],
      price: Math.floor(Math.random() * 100) * 100,
      research_name: randomResearchName()
    });
  }
  return data;
};
