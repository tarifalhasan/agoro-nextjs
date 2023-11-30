import BottomNavigation from "@/components/BottomNavigation";
import Container from "@/components/Container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { AiFillPauseCircle } from "react-icons/ai";
import { RiFlashlightLine } from "react-icons/ri";

const Congrads = () => {
  const pathToImage = "/images/congrage.png";
  return (
    <Container>
      <div className="flex flex-col min-h-screen  pb-20">
        <BottomNavigation />
        <div className=" pt-14 ">
          <div className=" space-y-1 pb-5">
            <h2 className=" text-2xl font-bold text-white text-center">
              CONGRATULATIONS!
            </h2>
            <h2 className=" text-2xl font-bold text-orange-30 text-center">
              YOU WON <br /> +6,000 SATS
            </h2>
          </div>
          {/* card */}
          <div
            style={{
              background: `url(${pathToImage}), lightgray 50%`,
            }}
            className=" w-full m-0 p-0 !bg-contain relative !bg-top !bg-no-repeat  !max-w-full block !mx-auto pb-[113%]  rounded-lg"
          >
            <div className="flex absolute left-0 right-0 bottom-0 h-[70px] px-4 items-center justify-between">
              <div className="flex items-center gap-1">
                <Avatar className="border border-orange-30">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p className=" text-title-2 text-white">RAREFACTION</p>
              </div>
              <div className="flex flex-col items-center">
                <RiFlashlightLine className=" w-4 h-4 text-white" />
                <p className=" text-pragraph-1 text-white font-medium">1240</p>
              </div>
            </div>
          </div>
          <div className="flex relative overflow-hidden after:absolute after:bottom-0 after:left-0 after:right-0 after:bg-orange-30 after:h-[1.5px] after:w-[34%]  border border-orange-50  h-[49px] px-4 items-center justify-between">
            <div className="flex items-center gap-1">
              <Avatar className="border border-orange-30 w-[35px] h-[35px]">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <p className=" text-title-2 text-white">UNLIMITE</p>
            </div>
            <div>
              <AiFillPauseCircle className="w-6 h-6 text-orange-30 " />
            </div>
          </div>
          <div className=" pt-5 space-y-5">
            <Button variant={"outline"} className=" w-full">
              DOWNLOAD
            </Button>
            <Button className=" w-full">SHARE</Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Congrads;
