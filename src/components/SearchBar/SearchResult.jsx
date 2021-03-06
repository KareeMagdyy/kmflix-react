import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
const SearchResult = ({ result, setQuery }) => {
  const location = useLocation();

  useEffect(() => {
    setQuery("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div className='max-h-[250px] absolute w-full overflow-x-hidden overflow-y-scroll rounded-b-md bg-black text-white '>
      {result?.length > 0 && (
        <>
          {result?.map((item) => (
            <Link key={item.id} to={`/movie/${item.id}`}>
              <p className='p-4 hover:bg-gray-500 cursor-pointer'>
                {item.title}
              </p>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default SearchResult;
