type Props = {
    name:string
    link: string
}

export const Card = ({name, link} : Props) => {
    const handleDownload = async () => {
        try {
            const response = await fetch('http://localhost:5000'+link);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = name+'.json';
            a.click();
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return(
        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">{name}</h3>
            <button onClick={handleDownload}>Download</button>
        </div>
    );
};
