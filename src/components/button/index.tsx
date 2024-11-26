type ButtonContentProps = {
    children: React.ReactNode;
    text?: string;
} | {
    text: string;
    children?: React.ReactNode;
}

// type ButtonType = {
//     variant?: 'default' | 'dark' | 'solid-purple' | 'outlined-purple';
// }

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonContentProps;

export default function Button({children, text}: ButtonProps) {
    const defaultClass = "focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-green-600 hover:bg-green-700 focus:ring-green-800"
    
    return <button className={defaultClass} >{children || text}</button>
}