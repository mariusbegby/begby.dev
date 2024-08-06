type TextGradientProps = {
	from?: string;
	to?: string;
	via?: string;
	text: string;
};

export default function TextGradient(props: TextGradientProps) {
	const from = props.from || "from-blue-400";
	const to = props.to || "to-sky-400";
	const via = props.via || "via-indigo-400";

	return (
		<span
			className={`animate-text-gradient bg-white bg-gradient-to-r bg-clip-text text-transparent ${from} ${via} ${to}`}
		>
			{props.text}
		</span>
	);
}
