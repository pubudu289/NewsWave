import { data } from "../data";
import Image from "next/image";
import NewsImage from "../../../public/images/bnews.jpg";

const latestnews = () => {
  return (
    // <div className="grid grid-cols-1 md:auto-rows-[50px] gap-1 mx-2">
    //   {data.map((item, i) => (
    //     <div className="max-w-md rounded overflow-hidden shadow-lg  p-2">
    //       <div className="flex">
    //         <Image
    //           className="flex"
    //           src={NewsImage}
    //           alt="img"
    //           width={100}
    //           height={100}
    //         />
    //         <div className="text-center p-1 shrink">
    //           <h3 className="text-center">{item.title}</h3>
    //           <p className="text-sm">{item.description}</p>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>

    <div>
      {data.map((item, i) => (
        <div className="bg-white rounded-lg flex flex-row p-1 border-3 gap-1 mt-1 shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
          <div className="mt-1">
            <Image
              className="left-0 w-13 h-14"
              src={NewsImage}
              alt="img"
              width={100}
              height={100}
            />
          </div>

          <div className=" grow ">
            <h1 className="font-bold text-[13px]">{item.title}</h1>
            <p className="text-gray-700 text-[11px]">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default latestnews;
