import BottomNavigation from "@/components/BottomNavigation";
import Container from "@/components/Container";
import VoteCard from "@/components/common/VoteCard";

const Congrads = () => {
  const pathToImage = "/images/congrage.png";
  return (
    <Container>
      <div className="flex flex-col min-h-screen  pb-24">
        <BottomNavigation />
        <div className=" pt-14 ">
          <div className=" space-y-1 pb-5">
            <h2 className=" text-2xl font-bold text-white text-center">
              TOP CREATIONS
            </h2>
            <div className=" pt-2 border-y border-[#9E9E9E] pb-3">
              <p className=" text-title-1 text-[#9E9E9E] text-center">
                ALL TIME
              </p>
            </div>
          </div>
          {/* card */}
          <div className="flex flex-col gap-y-6">
            <VoteCard />
            <VoteCard />
            <VoteCard />
            <VoteCard />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Congrads;
