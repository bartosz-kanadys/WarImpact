import {Card} from "./Card"

export const Download = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">JSON files with data we use</h2>
                </div>
                <div className="space-y-8 lg:grid lg:grid-cols-5 sm:gap-6 xl:gap-10 lg:space-y-0">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </section>
    );
}
