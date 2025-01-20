export const roleImageSetter = (role: string) => {
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
    }
};
