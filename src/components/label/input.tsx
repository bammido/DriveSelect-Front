type LabelContentProps = {
    children: React.ReactNode;
    text?: string;
} | {
    text: string;
    children?: React.ReactNode;
}

type ILabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & LabelContentProps

export default function Label({text, children, ...rest}: ILabelProps) {
    const defaultClass = "block mb-2 text-sm font-medium text-white"

    return <label className={defaultClass} {...rest} >{children || text}</label>
}