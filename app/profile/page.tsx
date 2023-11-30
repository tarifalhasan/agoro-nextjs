import BottomNavigation from "@/components/BottomNavigation";
import Container from "@/components/Container";
import Arts from "@/components/profiles/Arts";
import Music from "@/components/profiles/Music";
import Votes from "@/components/profiles/Votes";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

import { RiSettings2Line } from "react-icons/ri";

const Profile = () => {
  return (
    <Container>
      <div className="flex flex-col min-h-screen pb-24">
        <BottomNavigation />
        <div className=" py-4 border-b border-neutral-50  flex items-center justify-between">
          <h3 className=" text-heading-3 text-white uppercase">profile</h3>
          <Link href={"/profile/edit-profile"}>
            <RiSettings2Line className="w-6 h-6 text-white" />
          </Link>
        </div>
        <div className=" py-5 space-y-5">
          <div className="flex items-center gap-10">
            <Avatar className=" w-20 h-20">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className=" text-title-1 font-semibold text-orange-30">
              17,000 sats earned
            </p>
          </div>
          <div>
            <h2 className=" text-xl font-medium text-white">
              17,000 sats earned
            </h2>
            <p className=" text-title-2 py-4">
              I like spending Bitcoins, going to church, and drinking coffees
              with psilocybin mushrooms.
            </p>
          </div>
        </div>
        <Tabs defaultValue="votes" className="  w-full">
          <TabsList className="flex items-center border-b rounded-none justify-between ">
            <TabsTrigger value="votes">Votes</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
            <TabsTrigger value="art">Art</TabsTrigger>
          </TabsList>
          <TabsContent value="votes">
            <Votes />
          </TabsContent>
          <TabsContent value="music">
            <Music />
          </TabsContent>
          <TabsContent value="art">
            <Arts />
          </TabsContent>
        </Tabs>
      </div>
    </Container>
  );
};

export default Profile;
