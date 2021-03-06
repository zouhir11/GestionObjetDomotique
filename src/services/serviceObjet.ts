export class serviceObjet {

    objets=
     [
        {
             id: 1,
             nomDObjet: "nom1",
             emplacementDOobjet: "emplcae1",
             statutDObjet: false,
             estConnecte: true
        },
        {
            id: 2,
            nomDObjet: "nom2",
            emplacementDOobjet: "emplcae2",
            statutDObjet: true,
            estConnecte: false
       },
       {
        id: 3,
        nomDObjet: "nom3",
        emplacementDOobjet: "emplcae3",
        statutDObjet: true,
        estConnecte: false
       }

    ]

   afficher()
   {
      
       return this.objets;
   }

   allum(obj: any)
   {
    for(let objet of this.objets)
    {
        if(objet.id === obj.id )
        objet.statutDObjet=true;
    }
   }

   ettend(obj: any)
   {
    for(let objet of this.objets)
    {
        if(objet.id === obj.id )
        objet.statutDObjet=false;
    }
   }

   connect(obj: any)
   {
    for(let objet of this.objets)
    {
        if(objet.id === obj.id )
        objet.estConnecte=true;
    }
   }

   deconnect(obj: any)
   {
    for(let objet of this.objets)
    {
        if(objet.id === obj.id )
        objet.estConnecte=false;
    }
   }


   allumerT()
   {
    for(let objet of this.objets)
    {
        objet.statutDObjet=true;
    }
   }

   ettendreT()
   {
    for(let objet of this.objets)
    {
        objet.statutDObjet=false;
    }
   }


   connecterT()
   {
    for(let objet of this.objets)
    {
        objet.estConnecte=true;
    }
   }

   deconnecterT()
   {
    for(let objet of this.objets)
    {
        objet.estConnecte=false;
    }
   }

   ajouterO(nomDObjet: string, emplacementDOobjet: string, statutDObjet: boolean, estConnecte: boolean )
   {
    const objet =
    {
    id: 0,
    nomDObjet: '',
    emplacementDOobjet: '',
    statutDObjet: false,
    estConnecte: false
    }
    
    objet.nomDObjet= nomDObjet,
    objet.emplacementDOobjet= emplacementDOobjet,
    objet.statutDObjet= statutDObjet,
    objet.estConnecte= estConnecte;
    objet.id=this.objets[(this.objets.length-1)].id+ 1;
    this.objets.push(objet);
    
   }

}