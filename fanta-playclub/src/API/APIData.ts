export interface HomePageVetrinaContent {
    type: string;
    title: string;
    content: string;
    img: string;
}

export interface Player {
    iD: number;
    riotID: string;
    cost: number;
    team: string;
    role: string;
    game: string;
}