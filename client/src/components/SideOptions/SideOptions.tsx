import { ChangeEventHandler } from "react";
import { Data } from "../../data/Data"
import { Button } from "./Button"

type Props = {
    handleClick: (link: string, name: string) => void;
    handleInput: (victims:number) => void,
    victims: number
};

export const SideOptions = ({handleClick,handleInput,victims}:Props) => {
    const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value;
        handleInput(+value)
    }
    return(

        <aside id="default-sidebar" className="fixed top-16 left-0 z-40 w-64 h-screen transition-transform -translate-x-full md:translate-x-0" aria-label="Sidenav">
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <ul className="space-y-2">
                {
                        Data.filter(res=> res.name != "Conflicts 💀 history").map(res => (
                            <Button name={res.name} link={res.link} handleClick={handleClick}/>
                        ))
                    }
                    <li>
                        <p>Number of victims in conflicts:</p>
                    </li>
                    <li>
                        <input className="w-full" onChange={handleChange} value={victims} type="number" min="0"></input>
                    </li>
                </ul>
        </div>
        </aside>
    )
}