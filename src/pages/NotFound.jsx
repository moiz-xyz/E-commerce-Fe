import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 h-[620px] bg-cover bg-center px-4 md:px-0"
      style={{ backgroundImage: `url('/Assets/pattern_bg.png')` }}
    >
      <h1 className="text-[70px] md:text-[100px] font-bold">OOPS!</h1>
      <h3 className="text-[20px] md:text-[26px] font-semibold mb-3">Page not found</h3>
      <p className="text-sm md:text-base text-center mb-4">
        Sorry, we couldn't find the page you were looking for. <br />
        We suggest that you return to the home page.
      </p>
      <Link
        to="/"
        className="uppercase text-white bg-black text-sm font-medium py-5 px-10 sm:px-16 md:px-36 hover:bg-gray-800 transition duration-300"
      >
        Go Back
      </Link>
    </div>
  );
};

export default NotFound;
