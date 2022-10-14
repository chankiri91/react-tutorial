import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// SquareクラスをReact.Componentクラスから作成する。
// 1マスの描画
class Square extends React.Component {
	// 状態によってUIを更新する, react要素を返す
	render() {
		// JSXを返す
		return (
			<button className='square'>
				{this.props.value}
			</button>
		);
	}
}

//ボードの描画
class Board extends React.Component {
	// Squareコンポーネントを返す
	renderSquare(i) {
		return <Square value={i}/>;
	}

	render() {
		const status = "Next player: X";

		return (
			// <div /> == React.createElement('div')
			<div>
				<div className='status'>{status}</div>
				<div className='board-row'>
					{this.renderSquare(0)}
					{this.renderSquare(1)}
					{this.renderSquare(2)}
				</div>
				<div className='board-row'>
					{this.renderSquare(3)}
					{this.renderSquare(4)}
					{this.renderSquare(5)}
				</div>
				<div className='board-row'>
					{this.renderSquare(6)}
					{this.renderSquare(7)}
					{this.renderSquare(8)}
				</div>
			</div>
		);
	}
}

// ボードと、プレースホルダーの描画
class Game extends React.Component {
	render() {
		return (
			<div className='game'>
				<div className='game-board'>
					<Board />
				</div>
				<div className='game-info'>
					<div>{/* status */}</div>
					<div>{/* TODO */}</div>
				</div>
			</div>
		);
	}
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);