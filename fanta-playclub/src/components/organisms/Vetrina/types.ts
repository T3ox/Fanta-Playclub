export default interface VetrinaProps {
    type: string; 
    title: string; 
    description: VetrinaContent ; 
    image: string; 
}

export interface VetrinaContent {
    content: string;
    moreContent: string;
    list: string[];
}