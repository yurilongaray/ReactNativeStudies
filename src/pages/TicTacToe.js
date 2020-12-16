import React, { useState } from "react";
import { Button } from 'react-native';

const rowStyle = {
  display: "flex"
};

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 40,
  color: "black"
};
const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid"
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column"
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
  textAlign: "center"
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px"
};

const player1 = "X";
const player2 = "O";
const availableValues = [player1, player2];
let winner = "None";

function checkValuesAndChooseWinner(row) {
  if (
    row.every((value) => value === row[0] && availableValues.includes(value))
  ) {
    winner = row[0];
  }
}

function checkHorizontalRows(board) {
  for (const row of board) {
    checkValuesAndChooseWinner(row);
  }
}

function checkVerticalRows(board) {
  for (let x = 0; x < board.length; x++) {
    const verticalValues = [];

    for (let y = 0; y < board.length; y++) {
      verticalValues.push(board[y][x]);
    }

    checkValuesAndChooseWinner(verticalValues);
  }
}

function checkLeftToRight(board) {
  const leftToRightValues = board.map((v, i) => board[i][i]);

  checkValuesAndChooseWinner(leftToRightValues);
}

function checkRightToLeft(board) {
  const rightToLeftValues = [];
  let indexColum = 0;

  for (let index = 2; index >= 0; index--) {
    rightToLeftValues.push(board[index][indexColum]);
    indexColum++;
  }

  checkValuesAndChooseWinner(rightToLeftValues);
}

function checkDiagonalRows(board) {
  checkLeftToRight(board);
  checkRightToLeft(board);
}

function checkResults(board) {
  if (board) {
    checkHorizontalRows(board);
    checkVerticalRows(board);
    checkDiagonalRows(board);
  }
}

function onClickAction({ line, column, player, setPlayer, board, setValue }) {
  const nextPlayer = player.toUpperCase() === player1 ? player2 : player1;

  board[line][column] = player;
  setPlayer(nextPlayer);
  checkResults(board);
  setValue(player);
}

export function Square({ line, column, player, setPlayer, board }) {
  const [value, setValue] = useState(board[line][column]);

  return (
    <div
      className="square"
      onClick={() =>
        !board[line][column]
          ? onClickAction({ line, column, player, setPlayer, board, setValue })
          : ''
      }
      style={squareStyle}
    >
      {board[line][column]}
    </div>
  );
}

function getNewBoard() {

  return [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
}

export function Board() {
  const [player, setPlayer] = useState(player1);
  const [board, setBoard] = useState(getNewBoard());

  console.log('board', board)

  if (winner !== "None") {
    return (
      <div style={instructionsStyle}> The Winner is: {winner} </div>
    );
  }

  return (
    <div style={containerStyle} className="gameBoard">
      <div className="status" style={instructionsStyle}>
        Next player: {player}
      </div>
      <Button
        style={buttonStyle}
        onClick={() =>
          setBoard(getNewBoard())
        }
      >
        Reset
      </Button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square
            line={0}
            column={0}
            player={player}
            setPlayer={setPlayer}
            board={board}
          />
          <Square
            line={0}
            column={1}
            player={player}
            setPlayer={setPlayer}
            board={board}
          />
          <Square
            line={0}
            column={2}
            player={player}
            setPlayer={setPlayer}
            board={board}
          />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square
            line={1}
            column={0}
            player={player}
            setPlayer={setPlayer}
            board={board}
          />
          <Square
            line={1}
            column={1}
            player={player}
            setPlayer={setPlayer}
            board={board}
          />
          <Square
            line={1}
            column={2}
            player={player}
            setPlayer={setPlayer}
            board={board}
          />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square
            line={2}
            column={0}
            player={player}
            setPlayer={setPlayer}
            board={board}
          />
          <Square
            line={2}
            column={1}
            player={player}
            setPlayer={setPlayer}
            board={board}
          />
          <Square
            line={2}
            column={2}
            player={player}
            setPlayer={setPlayer}
            board={board}
          />
        </div>
      </div>
    </div>
  );
}

export default function TicTacToe() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  );
}