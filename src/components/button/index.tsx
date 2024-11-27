type ButtonContentProps = {
    children: React.ReactNode;
    text?: string;
} | {
    text: string;
    children?: React.ReactNode;
}

interface IButtonVariants {
    variant?: 'default' | 'green'| 'blue'
}

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & ButtonContentProps & IButtonVariants;

export default function Button({children, text, variant, ...rest}: ButtonProps) {
    const defaultClass = "focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 bg-green-600 hover:bg-green-700 focus:ring-green-800"
    
   let className = ''

    switch (variant) {
        case 'blue':
                className = "text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
            break;
        
        case 'green':
                className = defaultClass
            break;
    
        default:
            className = defaultClass
            break;
    }

    return <button className={className} {...rest} >{children || text}</button>
}