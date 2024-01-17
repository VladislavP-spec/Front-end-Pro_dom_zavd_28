// useBoard.jsx
import { useEffect, useState } from "react";
import calculateWinner from "../helpers/calculateWinner.js";

export function useBoard(initialState) {
    const [squares, setSquares] = useState(initialState);
    const [xIsNext, setXIsNext] = useState(true);

    const handleClick = (position) => {
        if (squares[position] || calculateWinner(squares)) {
            return;
        } else {
            const newSquares = [...squares];
            newSquares[position] = xIsNext ? 'x' : 0;
            setSquares(newSquares);
            setXIsNext(!xIsNext);
        }
    };

    useEffect(() => {
        const isWinner = calculateWinner(squares);
        if (isWinner) {
            alert(`Winner: ${isWinner}`);
        }
    }, [squares]);

    return {
        squares,
        handleClick,
    };
}
