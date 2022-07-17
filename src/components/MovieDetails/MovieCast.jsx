import unavailable from "../../assets/image-unavailable.jpg";
import { v4 as uuid } from "uuid";
import PlainRow from "../UI/PlainRow";
import CastCard from "../UI/CastCard";

const MovieCast = ({ movieCastAndCrew }) => {
  let actors = movieCastAndCrew?.cast?.slice(0, 22);

  const renderActors = actors?.map((actor) => (
    <CastCard
      img={actor.profile_path}
      name={actor.name}
      character={actor.character}
    />
  ));

  return (
    <>
      <div className='container mx-auto p-6'>
        <h1 className='   text-white text-4xl  font-bold mb-5'>Cast</h1>
        <p className='bg-red-600 w-[80px]  h-[1px]'></p>
      </div>
      <PlainRow
        title={false}
        rowId='cast'
        children={renderActors}
        classes=' p-6'
      />
    </>
  );
};

export default MovieCast;

// <>
//   <div className='container mx-auto p-6'>
//     <h1 className='   text-white text-4xl  font-bold mb-5'>Cast</h1>
//     <p className='bg-red-600 w-[80px]  h-[1px]'></p>
//   </div>

//   <div className='container mx-auto text-white p-6 grid grid-col-1  gap-5 md:grid-cols-2 2xl:grid-cols-3 '>
//     {actors?.map((actor) => (
//       <div key={uuid()} className='flex gap-3 md:items-center'>
//         <img
//           src={
//             actor.profile_path
//               ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
//               : unavailable
//           }
//           alt={actor.name}
//           className='md:w-[100px] w-[80px] h-[80px] rounded-full md:h-[100px]'
//           loading='lazy'
//         />
//         <div>
//           <h1 className='text-lg front-medium'>{actor.name}</h1>
//           <h2 className='text-gray-300'>{actor.character}</h2>
//         </div>
//       </div>
//     ))}
//   </div>
// </>
