import { data } from "../data";
import Image from "next/image";
import dlogo from "../../../public/images/bnews.jpg";

const newsgrid = () => {
  return (
    <div className="grid md:grid-cols-4 md:auto-rows-[300px] gap-4">
      {data.map((item, i) => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300">
          <Image src={dlogo} alt="img" width={500} height={500} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-0 items-center">
              {item.title}
            </div>
            <div className="text-gray-700 text-sm">
              <p className="my-1">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default newsgrid;
