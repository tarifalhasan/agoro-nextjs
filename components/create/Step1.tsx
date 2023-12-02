import { FC } from "react";
interface UploadTypeS {
  uploadType: "visual-art" | "music";
}
interface Step1Props {
  onNext: (value: UploadTypeS) => void;
}

const Step1: FC<Step1Props> = ({ onNext }) => {
  return (
    <div>
      <h2 className=" text-heading-3 font-semibold py-5">
        I want to upload...
      </h2>
      <div className=" space-y-5">
        <div
          onClick={() => onNext({ uploadType: "visual-art" })}
          className=" w-full cursor-pointer h-[270px] grid place-items-center  border border-orange-30"
        >
          <h2 className=" text-heading-3 font-semibold">VISUAL ART.</h2>
        </div>
        <h2 className=" text-heading-3 font-semibold text-center">or</h2>
        <div
          onClick={() => onNext({ uploadType: "music" })}
          className=" w-full h-[270px] cursor-pointer grid place-items-center  border border-orange-30"
        >
          <h2 className=" text-heading-3 font-semibold">MUSIC.</h2>
        </div>
      </div>
    </div>
  );
};

export default Step1;
