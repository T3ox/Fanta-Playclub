export interface Player {
    iD: number;
    riotID: string;
    image: string;
    cost: number;
}

export interface Players {
    lol: Player[];
    valorant: Player[];
}

interface UserMock {
    googleToken: string;
    nome: string;
    nickname: string;
    points: Points;
    players: Players;
}

interface Points {
    lol: number;
    valorant: number;
}

export const userMock: UserMock = {
    googleToken: "12345",
    nome: "Franco Rossi",
    nickname: "Frank",
    points: {
        lol: 2,
        valorant: 2,
    },
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
