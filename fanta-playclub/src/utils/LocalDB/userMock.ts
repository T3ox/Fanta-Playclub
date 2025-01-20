export interface Player {
    iD: number;
    fullName: string;
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
                fullName: "Matteo Vattimo",
                riotID: "Teo#alone",
                team: "Hub Voghera",
                cost: 1,
                role: "top laner",
            },
            {
                iD: 2,
                fullName: "",
                riotID: "",
                cost: 0,
                team: "",
                role: "",
            },
            {
                iD: 3,
                fullName: "",
                riotID: "",
                cost: 0,
                team: "",
                role: "",
            },
            {
                iD: 4,
                fullName: "",
                riotID: "",
                cost: 0,
                team: "",
                role: "",
            },
            {
                iD: 5,
                fullName: "",
                riotID: "",
                cost: 0,
                team: "",
                role: "",
            },
        ],
        valorant: [
            {
                iD: 1,
                fullName: "",
                riotID: "",
                cost: 0,
                team: "",
                role: "",
            },
            {
                iD: 2,
                fullName: "",
                riotID: "",
                cost: 0,
                team: "",
                role: "",
            },
            {
                iD: 3,
                fullName: "",
                riotID: "",
                cost: 0,
                team: "",
                role: "",
            },
            {
                iD: 4,
                fullName: "",
                riotID: "",
                cost: 0,
                team: "",
                role: "",
            },
            {
                iD: 5,
                fullName: "",
                riotID: "",
                cost: 0,
                team: "",
                role: "",
            },
        ],
    },
};
