import { useState } from "react";
import { Chart} from "../Chart";
import { SideOptions } from "../SideOptions";


export const ChartPage = () => {
    const [link, setLink] = useState("/res/copper/getAll");
    const [name, setName] = useState("Copper price history");
    const handleClick = (link:string,name:string) => {
        console.log("ChartPage")
        setLink(link)
        setName(name)
    };
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <SideOptions handleClick={handleClick}/>
                    <Chart link={link} name={name}/>
            </div>
        </section>
      )
  };