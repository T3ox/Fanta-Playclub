import React from 'react';
import Button from '../../atoms/Button/button';
import ChooseGameSectionProps  from './types';
import './style.scss';

const ChooseGameSection: React.FC<ChooseGameSectionProps> = () => (
    <section >
        <Button label="League of Leagend" onClick={() => console.log("Button 1 clicked!")} /> 
        <Button label="Valorant" onClick={() => console.log("Button 2 clicked!")} />
    </section>
);

export default ChooseGameSection;


