/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import ChevronIcon from "../chevronIcon";
import Button from "../button";

interface IOptionDropDown<T = any> {
    label: string;
    value: T;
}

interface DropDownProps<T = any> {
    options: IOptionDropDown<T>[];
    onChange: (value: T) => void;
    value: T;
    emptyMessage?: string;
}

export default function DropDown<T = any>({ onChange, options, emptyMessage = 'Selecione uma opção' }: DropDownProps<T>) {
    const [active, setActive] = useState(false)
    const [value, setValue] = useState<IOptionDropDown | null>(null)
    
    function handleChange(option: IOptionDropDown<T>) {
        onChange(option.value)
        setValue(option)
        setActive(false)
    }

return <div>
        <Button variant="blue" onClick={() => setActive(prev => !prev)}>{ value? value.label : emptyMessage } <ChevronIcon /></Button>

        <div id="dropdown" className={`z-10 ${active? '': 'hidden'} divide-y divide-gray-100 rounded-lg shadow w-44 bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-200">
                {
                    options.map(option=> <li key={option.label}>
                        <span 
                            className="block px-4 py-2 hover:bg-gray-600 hover:text-white" 
                            onClick={() => handleChange(option)}>{option.label}</span>
                    </li>)
                }
            </ul>
        </div>
    </div>
}