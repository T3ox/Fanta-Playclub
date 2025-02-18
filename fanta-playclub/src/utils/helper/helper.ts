export const lolRoleImageSetter = (role: string) => {
    switch (role) {
        case "Top Laner":
            return "/images/roles/lol/top-laner-icon.png";
        case "Jungler":
            return "/images/roles/lol/jungler-icon.png";
        case "Mid Laner":
            return "/images/roles/lol/mid-laner-icon.png";
        case "AD Carry":
            return "/images/roles/lol/adc-icon.png";
        case "Support":
            return "/images/roles/lol/support-icon.png";
        default:
            return "";
    }
};

export const valorantRoleImageSetter = (role: string) => {
    switch (role) {
        case "Controller":
            return "/images/roles/valorant/controller-logo.jpg";
        case "Duelist":
            return "/images/roles/valorant/duelist-logo.jpg";
        case "Initiator":
            return "/images/roles/valorant/initiator-logo.jpg";
        case "Sentinel":
            return "/images/roles/valorant/sentinel-logo.jpg";
        default:
            return "";
    }
};

export const teamImageSetter = (team: string) => {
    switch (team) {
        case "Another World Caserta":
            return "";
        case "Esplace Genova":
            return "";
        case "Gamever Napoli":
            return "";
        case "Hub Good Food & Gaming Zone Voghera":
            return "/images/hub-voghera.jpg";
        case "Levelx55 Perugia":
            return "/images/levelx55-perugia.jpeg";
        case "Lobby E-Games Bari":
            return "";
        case "Parrot Sushi-Lan Roma":
            return "/images/parrot_sushi-roma.png";
        case "PLB World Milano":
            return "";
        case "RedShift Gaming Messina":
            return "/images/red_shift-messina.jpeg";
        case "Rift Esports Club Catanzaro":
            return "";
        case "Romagna Esports Club Cesena":
            return "";
        case "SpaceGames Salerno":
            return "/images/space_games-salerno.jpeg";
        case "Spidibit Catania":
            return "";
        case "Titan Gaming Center Milano":
            return "/images/titan_gaming_center-milano.jpeg";
    }
};
