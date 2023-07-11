import MyPic from '../assets/me.png';

const Hero = () => {
  return (
    <div> 
      <section className="bg-white dark:bg-gray-900 md:flex">
        <div className="lg:w-2/4 sm:w-full">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-8">
          <h1 className="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Hi! I Am SHIPLU
          </h1>
          <p className="w-full mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-0 dark:text-gray-400">
          Experienced Frontend Developer
          </p>

          <p className="w-full mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-0 dark:text-gray-400">
          I am not a techguru but I always try to make myself by learning technology and learning new programming languages.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Get started
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Learn more
            </a>
          </div>
        </div>
        </div>
        <div className="flex justify-center items-center  md:w-1/2">
          <img className="max-h-screen w-5/6 md:w-4/6" src={MyPic} alt="hero img" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
