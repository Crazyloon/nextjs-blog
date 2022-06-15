import Image from "next/image";

const UnderConstruction = () => {
  return (
    <div className="-mt-8 h-[50vh] text-center relative">
      <Image src="/svg/under-construction.svg" layout="fill" />
    </div>
  );
};

export default UnderConstruction;
