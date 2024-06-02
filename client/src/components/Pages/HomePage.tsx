export const HomePage = () => {
    return (
    <section className="bg-white dark:bg-gray-900">
      <div className=" max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className=" w-full">
              <h1 className="text-center max-w-5xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Projekt na integrację systemów</h1>
              <p className="max-w-5xl text-center mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Projekt przedstawia wpływ konfliktów na ceny surowców za pomocą wykresów, oraz udostępniania danych</p>
          </div>
          <div className=" lg:mt-0 lg:col-span-5 ">
              <img src="src/resources/chartImage.png" alt="mockup"/>
          </div>
      </div>
  </section>
  )
};