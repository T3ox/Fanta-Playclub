export interface HomePageVetrinaContent {
    type: string;
    title: string;
    content: string;
    list: string[];
    moreContent: string;
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

export interface Match {
    rows: MatchRow[]
}

export interface MatchRow {
    team: string,
    riotId: string,
    combatScore: number,
    kills: number,
    deaths: number,
    assists: number,
    economyRating: number,
    firstBlod: number,
    spikePlanted: number,
    spikeDefused: number,
}