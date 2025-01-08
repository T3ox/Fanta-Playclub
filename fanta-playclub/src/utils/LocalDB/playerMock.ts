
// DB di prova
export interface Player {
    iD: number;
    nickname: string;
    immagine: string;
    costo: number;
    ruolo: string;
    rank: string;
    salalan: string;
    
  }
  
  export interface Players {
    lol: Player[];
    valorant: Player[];
  }
  
  export const players: Players = {
    lol: [

      {
        iD: 1,
        nickname: "ciao",
        immagine: "toplaner.png",
        costo: 1,
        ruolo: "Top Laner",
        rank: "Diamante 1",
        salalan: "Milano",
        
      },

    ],
    valorant: [

      {

        iD: 1,
        nickname: "bella",
        immagine: "Duelist.png",
        costo: 2,
        ruolo: "Duelist",
        rank: "Platino 1",
        salalan: "Voghera",
        
      },

      {

        iD: 2,
        nickname: "bella h",
        immagine: "Duelist.png",
        costo: 5,
        ruolo: "Duelist",
        rank: "Platino 18",
        salalan: "Milano",
        
      },
    ],
  };
