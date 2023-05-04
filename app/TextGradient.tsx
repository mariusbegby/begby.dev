type TextGradientProps = {
    from?: string;
    to?: string;
    via?: string;
    text: string;
};

export default function TextGradient(props: TextGradientProps) {
    const from = props.from || 'from-blue-400';
    const to = props.to || 'to-rose-400';
    const via = props.via || 'via-purple-400';

    return (
        <span
            className={`bg-clip-text text-transparent bg-gradient-to-r ${from} ${via} ${to} animate-text-gradient bg-white`}>
            {props.text}
        </span>
    );
}
