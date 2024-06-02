type Props = {
    name: string;
    link: string;
    handleClick: (link: string, name: string) => void;
};

export const Button = ({ name, link, handleClick }: Props) => {
    const handleClickButton = () => {
        handleClick(link,name);
        console.log("Button")
    };

    return (
        <button onClick={handleClickButton}>{name}</button>
    );
};