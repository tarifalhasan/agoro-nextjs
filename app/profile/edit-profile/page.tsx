"use client";
import Container from "@/components/Container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { RiArrowLeftLine, RiEdit2Line } from "react-icons/ri";

const EditProfile = () => {
  const router = useRouter();
  return (
    <Container>
      <div className=" pt-4 flex flex-col min-h-screen">
        <button
          onClick={() => router.back()}
          className=" p-4 flex items-center gap-3 border-b border-neutral-40"
        >
          <RiArrowLeftLine className="w-6 h-6" />
          <span className=" text-heading-3">EDIT PROFILE</span>
        </button>
        <div className=" py-4 flex flex-col items-center  gap-y-4">
          <Avatar className="w-[100px] h-[100px]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-1">
            <p className="text-base underline font-medium text-orange-30">
              Change Profile Picture
            </p>
            <RiEdit2Line className="w-6 h-6 text-orange-30" />
          </div>
        </div>
        <form className=" space-y-4">
          <div className=" space-y-2">
            <Label>Username</Label>
            <Input placeholder="NameofArtist" />
          </div>
          <div className=" space-y-2">
            <div className="flex items-center justify-between">
              <Label>Username</Label>
              <p className=" text-title-2 font-medium text-neutral-30">
                (Max 1000 words)
              </p>
            </div>
            <Textarea className="h-[150px]" placeholder="NameofArtist" />
          </div>
          <div className=" space-y-2">
            <Label>Default Vote Amount</Label>
            <Input placeholder="10" />
          </div>
          <Button type="submit" className=" w-full">
            save
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default EditProfile;
