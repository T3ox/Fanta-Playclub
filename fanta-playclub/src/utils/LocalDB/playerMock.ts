import { Player } from "./userMock";

// DB di prova
export interface Players {
    lol: Player[];
    valorant: Player[];
}

export const players: Players = {
    lol: [
        {
            iD: 1,
            riotID: "ShadowFox",
            cost: 3,
            team: "Hub Voghera", // Aggiornato
            role: "Top Laner",
        },
        {
            iD: 2,
            riotID: "BlueStorm",
            cost: 5,
            team: "Levelx55 Perugia", // Aggiornato
            role: "Jungler",
        },
        {
            iD: 3,
            riotID: "InfernoFox",
            cost: 2,
            team: "Parrot Sushi-Lan Roma", // Aggiornato
            role: "Mid Laner",
        },
        {
            iD: 4,
            riotID: "FrostByte",
            cost: 4,
            team: "RedShift Gaming Messina", // Aggiornato
            role: "AD Carry",
        },
        {
            iD: 5,
            riotID: "CrimsonBlade",
            cost: 1,
            team: "SpaceGames Salerno",
            role: "Support",
        }, // Aggiornato
        {
            iD: 6,
            riotID: "PhantomClaw",
            cost: 3,
            team: "Titan Gaming Center Milano", // Aggiornato
            role: "Top Laner",
        },
        {
            iD: 7,
            riotID: "VenomStrike",
            cost: 2,
            team: "Hub Voghera", // Aggiornato
            role: "Jungler",
        },
        {
            iD: 8,
            riotID: "DarkNebula",
            cost: 5,
            team: "Levelx55 Perugia", // Aggiornato
            role: "Mid Laner",
        },
        {
            iD: 9,
            riotID: "StormCaller",
            cost: 4,
            team: "Parrot Sushi-Lan Roma", // Aggiornato
            role: "AD Carry",
        },
        {
            iD: 10,
            riotID: "SkyBreaker",
            cost: 2,
            team: "RedShift Gaming Messina", // Aggiornato
            role: "Support",
        },
        {
            iD: 11,
            riotID: "NightFury",
            cost: 5,
            team: "SpaceGames Salerno", // Aggiornato
            role: "Top Laner",
        },
        {
            iD: 12,
            riotID: "SolarWind",
            cost: 1,
            team: "Titan Gaming Center Milano", // Aggiornato
            role: "Jungler",
        },
        {
            iD: 13,
            riotID: "ThunderFist",
            cost: 3,
            team: "Hub Voghera", // Aggiornato
            role: "Mid Laner",
        },
        {
            iD: 14,
            riotID: "IronTusk",
            cost: 2,
            team: "Levelx55 Perugia",
            role: "AD Carry",
        }, // Aggiornato
        {
            iD: 15,
            riotID: "VoidHunter",
            cost: 4,
            team: "Parrot Sushi-Lan Roma", // Aggiornato
            role: "Support",
        },
    ],
    valorant: [
        {
            iD: 16,
            riotID: "NT Intense #elf",
            cost: 1,
            team: "Hub Voghera", // Aggiornato
            role: "Sentinel",
        },
    ],
};
