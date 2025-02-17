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
            riotID: "Faker#GOAT",
            cost: 5,
            team: "Titan Gaming Center Milano",
            role: "Mid Laner",
        },
        {
            iD: 2,
            riotID: "Caps#KING",
            cost: 4,
            team: "RedShift Gaming Messina",
            role: "Mid Laner",
        },
        {
            iD: 3,
            riotID: "Chovy#ACE",
            cost: 5,
            team: "SpaceGames Salerno",
            role: "Mid Laner",
        },
        {
            iD: 4,
            riotID: "Oner#WOLF",
            cost: 3,
            team: "Hub Good Food & Gaming Zone Voghera",
            role: "Jungler",
        },
        {
            iD: 5,
            riotID: "Ruler#WIN",
            cost: 5,
            team: "Parrot Sushi-Lan Roma",
            role: "AD Carry",
        },
        {
            iD: 6,
            riotID: "Zeka#PRO",
            cost: 2,
            team: "Levelx55 Perugia",
            role: "Mid Laner",
        },
        {
            iD: 7,
            riotID: "Canyon#GOD",
            cost: 4,
            team: "Titan Gaming Center Milano",
            role: "Jungler",
        },
        {
            iD: 8,
            riotID: "Deft#EZ4",
            cost: 3,
            team: "RedShift Gaming Messina",
            role: "AD Carry",
        },
        {
            iD: 9,
            riotID: "Kerios#SUP",
            cost: 2,
            team: "SpaceGames Salerno",
            role: "Support",
        },
        {
            iD: 10,
            riotID: "ShowMaker#CLUT",
            cost: 5,
            team: "Hub Good Food & Gaming Zone Voghera",
            role: "Mid Laner",
        },
        {
            iD: 11,
            riotID: "Knight#STAR",
            cost: 4,
            team: "Parrot Sushi-Lan Roma",
            role: "Mid Laner",
        },
        {
            iD: 12,
            riotID: "JackeyLove#FURY",
            cost: 3,
            team: "Levelx55 Perugia",
            role: "AD Carry",
        },
        {
            iD: 13,
            riotID: "Tarzan#SMIT",
            cost: 2,
            team: "Titan Gaming Center Milano",
            role: "Jungler",
        },
        {
            iD: 14,
            riotID: "BeryL#SUPR",
            cost: 1,
            team: "RedShift Gaming Messina",
            role: "Support",
        },
        {
            iD: 15,
            riotID: "369#TANK",
            cost: 1,
            team: "SpaceGames Salerno",
            role: "Top Laner",
        },
        {
            iD: 16,
            riotID: "OTP Gandosds#EUW",
            cost: 1,
            team: "Hub Good Food & Gaming Zone Voghera",
            role: "Support",
        },
        {
            iD: 17,
            riotID: "Ziggler#EUW",
            cost: 4,
            team: "Hub Good Food & Gaming Zone Voghera",
            role: "Top Laner",
        },
        {
            iD: 18,
            riotID: "Reinegat#EUW",
            cost: 3,
            team: "Hub Good Food & Gaming Zone Voghera",
            role: "Mid Laner",
        },
        {
            iD: 19,
            riotID: "OTP Von Kiprus#EUW",
            cost: 3,
            team: "Hub Good Food & Gaming Zone Voghera",
            role: "Support",
        },
    ],
    valorant: [
        {
            iD: 16,
            riotID: "NT Intense #elf",
            cost: 1,
            team: "Hub Good Food & Gaming Zone Voghera", // Aggiornato
            role: "Sentinel",
        },
    ],
};
