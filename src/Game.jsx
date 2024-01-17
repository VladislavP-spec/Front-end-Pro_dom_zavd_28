// Game.jsx
import React from "react";
import Board from "./Board";
import { useBoard } from "./hooks/useBoard";

class Game extends React.Component {
    constructor(props) {
        super(props);
        const { squares, handleClick } = useBoard(Array(9).fill(null));
        this.squares = squares;
        this.handleClick = handleClick;
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const line of lines) {
            const [a, b, c] = line;
            if (squares[a] !== null && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    jumpTo(step) {
        // ...
    }

    render() {
        const winner = this.calculateWinner(this.squares);

        const moves = this.state.history.map((step, move) => {
            const desc = move ? "Перейти до ходу №" + move : "Початок гри";
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = "Переможець: " + winner;
        } else {
            status = "Наступний гравець: " + (this.state.xIsNext ? "x" : "0");
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={this.squares} onClick={this.handleClick} />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
                <button onClick={() => window.location.reload(false)}>Почати нову гру</button>
            </div>
        );
    }

    // Ваші інші методи та властивості класу
}

export default Game;
