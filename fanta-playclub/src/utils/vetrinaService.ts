export default interface VetrinaData {
    text: string;
    description: string;
    image: string;
}

export const vetrina1: VetrinaData = {
    text: "Quisque faucibus",
    description: "Sed imperdiet molestie quam, sed auctor libero maximus at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In posuere accumsan dui,",
    image: require("../utils/Images/chillGuy.jpg")
};

export const vetrina2: VetrinaData = {
    text: "Ipsum Lorem",
    description: "Aenean placerat ipsum non turpis tincidunt volutpat. Suspendisse ac leo tempus mauris convallis faucibus a quis sem. Aliquam eleifend nulla in tortor ullamcorper",
    image: require("../utils/Images/criceto.jpg")
};

export const vetrina3: VetrinaData = {
    text: "Lorem Ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra nunc a nisl sollicitudin, vel suscipit dui suscipit. Nam non urna faucibus, porta mi et, vehicula velit. Sed tincidunt elementum mi sed finibus",
    image: require("../utils/Images/chillGuy.jpg")
};