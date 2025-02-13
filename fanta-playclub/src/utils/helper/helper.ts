export const lolRoleImageSetter = (role: string) => {
    switch (role) {
        case "top laner":
            return "/images/roles/lol/top-laner-icon.png";
        case "jungler":
            return "/images/roles/lol/jungler-icon.png";
        case "mid laner":
            return "/images/roles/lol/mid-laner-icon.png";
        case "ad carry":
            return "/images/roles/lol/adc-icon.png";
        case "support":
            return "/images/roles/lol/support-icon.png";
        default:
            return "";
    }
};

export const valorantRoleImageSetter = (role: string) => {
    switch (role) {
        case "controller":
            return "/images/roles/valorant/controller-logo.jpg";
        case "duelist":
            return "/images/roles/valorant/duelist-logo.jpg";
        case "initiator":
            return "/images/roles/valorant/initiator-logo.jpg";
        case "sentinel":
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
        case "Hub Voghera":
            return "/images/voghera.jpg";
        case "Levelx55 Perugia":
            return "";
        case "Lobby E-Games Bari":
            return "";
        case "Parrot Sushi-Lan Roma":
            return "";
        case "PLB World Milano":
            return "";
        case "RedShift Gaming Messina":
            return "";
        case "Rift Esports Club Catanzaro":
            return "";
        case "Romagna Esports Club Cesena":
            return "";
        case "SpaceGames Salerno":
            return "";
        case "Spidibit Catania":
            return "";
        case "Titan Gaming Center Milano":
            return "";
    }
};
