export interface Player {
    iD: number;
    riotID: string;
    cost: number;
    team: string;
    role: string;
}

export interface Players {
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
            {
                iD: 1,
                riotID: "",
                team: "",
                cost: 0,
                role: "",
            },
            {
                iD: 2,
                riotID: "",
                cost: 0,
                team: "",
                role: "",
            },
            {
                iD: 3,
                riotID: "",
                cost: 0,
                team: "",
                role: "",
            },
            {
                iD: 4,
                riotID: "",
                cost: 0,
                team: "",
                role: "",
            },
            {
                iD: 5,
                riotID: "",
                cost: 0,
                team: "",
                role: "",
            },
        ],
        valorant: [
            {
                iD: 1,
                riotID: "",
                cost: 0,
                team: "",
                role: "",
            },
            {
                iD: 2,
                riotID: "",
                cost: 0,
                team: "",
                role: "",
            },
            {
                iD: 3,
                riotID: "",
                cost: 0,
                team: "",
                role: "",
            },
            {
                iD: 4,
                riotID: "",
                cost: 0,
                team: "",
                role: "",
            },
            {
                iD: 5,
                riotID: "",
                cost: 0,
                team: "",
                role: "",
            },
        ],
    },
};
