import React, { useState } from 'react';

// Custom Hooks
import { usePlayer } from '../hooks/userPlayer';
import { useStage } from '../hooks/useStage';
// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
// Styled Components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

const Tetris = () => {

    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player] = usePlayer();
    const [stage, setStage] = useStage(player);

    console.log('re-render');
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={stage}/>
                <aside>
                    {gameOver ? (
                        <Display gamveOver={gameOver} text="Game Over" />
                    ) : (
                        <div>
                        <Display text="Score" />
                        <Display text="Rows" />
                        <Display text="Level" />
                    </div>
                    )}
                    <StartButton />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;