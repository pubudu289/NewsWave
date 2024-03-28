import { data } from "../data";
import Image from "next/image";
import dlogo from "../../../public/images/bnews.jpg";

const newsgrid = () => {
  return (
    <div className="grid md:grid-cols-4 auto-rows-[300px] gap-4 my-10">
      {data.map((item, i) => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <Image
            src={dlogo}
            alt="img"
            width={500}
            height={500}
            className="w-full"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 items-center">
              {item.title}
            </div>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default newsgrid;
