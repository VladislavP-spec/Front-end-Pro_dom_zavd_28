import React, { Component } from "react";
import Square from "./components/Square.jsx";
import calculateWinner from "./helpers/calculateWinner";

class Board extends Component {
    constructor(props) {
        super(props);
        const storedSquares = JSON.parse(localStorage.getItem("squares")) || Array(9).fill(null);

        this.state = {
            squares: storedSquares,
            xIsNext: true,
            winner: null,
        };
    }

    handleClick = (position) => {
        const { squares, xIsNext, winner } = this.state;

        if (squares[position] || winner) {
            return;
        }

        const newSquares = [...squares];
        newSquares[position] = xIsNext ? "X" : "O";

        this.setState(
            {
                squares: newSquares,
                xIsNext: !xIsNext,
                winner: calculateWinner(newSquares),
            },
            () => {
                // Після кожного кліку оновлюємо локальне сховище
                localStorage.setItem("squares", JSON.stringify(this.state.squares));
            }
        );
    };

    handleRestart = () => {
        // Очищаємо локальне сховище та скидаємо стан до початкового
        localStorage.removeItem("squares");
        this.setState({
            squares: Array(9).fill(null),
            xIsNext: true,
            winner: null,
        });
    };

    renderSquare = (i) => {
        return (
            <Square
                key={i}
                value={this.state.squares[i]}
                onClick={() => this.handleClick(i)}
            />
        );
    };

    render() {
        const { winner, xIsNext } = this.state;

        return (
            <div>
                <div className="status">{winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`}</div>
                <div className="board">
                    {this.state.squares.map((_, i) => this.renderSquare(i))}
                </div>
                <button onClick={this.handleRestart}>Почати нову гру</button>
            </div>
        );
    }
}

export default Board;
