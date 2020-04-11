export default function NumbersTable({ numbers }) {
	const boxes = [];
	for (let i = 1; i <= 90; i++) {
		let activeClass = numbers.includes(i) ? 'numbers-table__box--active' : '';
		boxes.push(<div className={`numbers-table__box ${activeClass}`}><span>{i}</span></div>)
	}
	
	return (
		<div className="numbers-table">
			{boxes}
		</div>
	)
}
