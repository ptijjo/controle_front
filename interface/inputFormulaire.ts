
export type InputsFormulaire = {
    email: string,
    chauffeurSignature: string,
    controllerSignature: string,
    ligne:string,
    numeroLigne: string,
    typeLigne: string,
    typeArret: string,
    zebra: string,
    pleineVoie: string,

    propreteExterieure: string;
    etatAffiche: string,
    presenceCadreAffichage:string,
    lieuControle: string,
    heurePrevue: string,
    heureReelle: string,
    date: Date,
    secteur: string,
    numeroParc: number,
    nom: string,
    prenom: string,
    affichageHoraire: string,
    respectItineraire?: boolean,
    affichageDestination: string,
    affichageLigne: string,
    affichageNumeroLigne: string,
    pictoEnfant: string,
    affichageTarif: string,
    depliantHoraire: string,
    affichageReglement: string,
    tenue?: boolean,
    
    temperature?: boolean,
    luminosite?: boolean,
   
    observationArret: string,
    observationProprete:string,
    meteo: string,
    client: string,

    //Bilettique
    billettiqueElectronique:string,
    billettiquePapier: string,
    fondCaisse: string,
    titreSecours: string,
    
    //Proprete interieur
    tableauDeBord: string,
    sol: string,
    vitres: string,
    sieges: string,
    observationInterieur: string,
    
    //Passagers
    nbreVoyageur: number,
    nbreVoyageurIrregulier: number,
    
}
