import React from 'react';
import { StyledDisplay } from './styles/StyledDisplay';

const Display = ({ gamveOver, text }) => (
    <StyledDisplay gamveOver={gamveOver}>{text}</StyledDisplay>
)

export default Display;