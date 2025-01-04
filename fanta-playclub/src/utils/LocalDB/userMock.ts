export interface Player {
    iD: number;
    riotID: string;
    image: string;
    cost: number;
}

interface Players {
    lol: Player[];
    valorant: Player[];
}

interface UserMock {
    googleToken: string;
    nome: string;
    nickname: string;
    players: Players;
}

export const userMock: UserMock = {
    googleToken: "12345",
    nome: "Franco Rossi",
    nickname: "Frank",
    players: {
        lol: [
            { iD: 1, riotID: "", image: "", cost: 0 },
            { iD: 2, riotID: "", image: "", cost: 0 },
            { iD: 3, riotID: "", image: "", cost: 0 },
            { iD: 4, riotID: "", image: "", cost: 0 },
            { iD: 5, riotID: "", image: "", cost: 0 },
        ],
        valorant: [
            { iD: 1, riotID: "", image: "", cost: 0 },
            { iD: 2, riotID: "", image: "", cost: 0 },
            { iD: 3, riotID: "", image: "", cost: 0 },
            { iD: 4, riotID: "", image: "", cost: 0 },
            { iD: 5, riotID: "", image: "", cost: 0 },
        ],
    },
};
