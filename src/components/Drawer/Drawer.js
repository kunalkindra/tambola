export default function Drawer({ open, onClose, children }) {
	let drawerClasses = ['drawer', 'shadow', 'p-4'];
	if (open) drawerClasses.push('drawer-open');
	return (
		<div className={drawerClasses.join(' ')}>
			<button onClick={onClose} className="drawer__close btn btn-secondary rounded px-3">X</button>
			{children}
		</div>
	);
}
