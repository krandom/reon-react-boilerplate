const Button = ({
	type = 'primary',
	children = null,
	label = null,
	disabled = false,
	className = null,
	onClick,
	style = {},
}) => {

	return (
		<div
			className={`btn btn__${type} ${className} ${disabled && 'btn__disabled'}`}
			style={style}
			disabled={disabled}
			onClick={() => {
				if (disabled)
					return;

				if (onClick)
					onClick();
			}}
		>
			{label || children}
		</div>
	);
};

export default Button;
