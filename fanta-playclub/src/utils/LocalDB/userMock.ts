export interface Player {
    iD: number;
    riotID: string;
    cost: number;
    team: string;
    role: string;
    game: string;
    points: number;
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
                game: "",
                points: 0,
            },
            {
                iD: 2,
                riotID: "",
                cost: 0,
                team: "",
                role: "",
                game: "",
                points: 0,
            },
            {
                iD: 3,
                riotID: "",
                cost: 0,
                team: "",
                role: "",
                game: "",
                points: 0,
            },
            {
                iD: 4,
                riotID: "",
                cost: 0,
                team: "",
                role: "",
                game: "",
                points: 0,
            },
            {
                iD: 5,
                riotID: "",
                cost: 0,
                team: "",
                role: "",
                game: "",
                points: 0,
            },
        ],
        valorant: [
            {
                iD: 1,
                riotID: "",
                cost: 0,
                team: "",
                role: "",
                game: "",
                points: 0,
            },
            {
                iD: 2,
                riotID: "",
                cost: 0,
                team: "",
                role: "",
                game: "",
                points: 0,
            },
            {
                iD: 3,
                riotID: "",
                cost: 0,
                team: "",
                role: "",
                game: "",
                points: 0,
            },
            {
                iD: 4,
                riotID: "",
                cost: 0,
                team: "",
                role: "",
                game: "",
                points: 0,
            },
            {
                iD: 5,
                riotID: "",
                cost: 0,
                team: "",
                role: "",
                game: "",
                points: 0,
            },
        ],
    },
};
