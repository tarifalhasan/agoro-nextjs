import BottomNavigation from "@/components/BottomNavigation";
import Container from "@/components/Container";
import VoteCard from "@/components/common/VoteCard";
import { Button } from "@/components/ui/button";

const Congrads = () => {
  const pathToImage = "/images/congrage.png";
  return (
    <Container>
      <div className="flex flex-col min-h-screen  pb-24">
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
          <VoteCard />
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
