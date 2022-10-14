import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// SquareクラスをReact.Componentクラスから作成する。
// 1マスの描画
class Square extends React.Component {
	// stateをもたせる
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		value: null,
	// 	};
	// }


	// 状態によってUIを更新する, react要素を返す
	render() {
		// JSXを返す
		return (
			<button 
				className='square' 
				onClick={() => {
					this.props.onClick();
				}}
			>
				{/* {this.props.value} */}
				{ this.props.value }
			</button>
		);
	}
}

//ボードの描画
class Board extends React.Component {

	// どのマス目に何が入っているのかを管理
	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null),
		};
	}

	handleClick(i) {
		const squares = this.state.squares.slice();
		squares[i] = 'X';
		this.setState({squares: squares});
	}

	// Squareコンポーネントを返す
	renderSquare(i) {
		return (
			<Square 
				value={ this.state.squares[i] }
				onClick = {() => this.handleClick(i)}
			/>
		);
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