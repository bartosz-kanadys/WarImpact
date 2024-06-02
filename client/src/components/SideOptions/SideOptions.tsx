import { Data } from "../../data/Data"
import { Button } from "./Button"

type Props = {
    handleClick: (link: string, name: string) => void;
};

export const SideOptions = ({handleClick}:Props) => {
    return(

        <aside id="default-sidebar" className="fixed top-16 left-0 z-40 w-64 h-screen transition-transform -translate-x-full md:translate-x-0" aria-label="Sidenav">
        <div className="overflow-y-auto py-5 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <ul className="space-y-2">
                <li>
                    <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg aria-hidden="true" className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                        <span className="ml-3">Overview</span>
                    </a>
                </li>
                {
                        Data.filter(res=> res.name != "Conflicts 💀 history").map(res => (
                            <Button name={res.name} link={res.link} handleClick={handleClick}/>
                        ))
                    }
                </ul>
        </div>
        </aside>
    )
}