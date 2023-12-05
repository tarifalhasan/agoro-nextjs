"use client";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { RiFlashlightLine } from "react-icons/ri";
import Container from "../Container";

const VoteModal = () => {
  const [voteAmount, setVoteAmount] = useState(100);
  const router = useRouter();
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Update the vote amount when the input changes
    setVoteAmount(Number(e.target.value)); // Convert the value to a number
  };

  const handleVote = () => {
    // Handle the vote with the selected voteAmount
    console.log("Voted:", voteAmount); // You can perform your

    router.push("/vote-result");
  };

  const handleVotePercentage = (percentage: number) => {
    // Function to update the vote amount based on a percentage value
    const amount = (percentage / 100) * 100; // Adjust this calculation as needed
    setVoteAmount(amount);
  };

  return (
    <Container className=" relative overflow-hidden">
      <AlertDialog>
        <AlertDialogTrigger className=" w-full">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button className=" w-full uppercase" type="button">
                  VOTE
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Press and hold to vote </p>
                <p>a custom amount!</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </AlertDialogTrigger>
        <AlertDialogContent className="max-w-[760px] border-transparent xl:max-w-[460px]">
          <div className=" flex-col flex items-center  gap-y-6">
            <RiFlashlightLine className=" w-16 h-16 text-orange-30" />
          </div>
          <div className=" space-y-3">
            <p className=" text-center text-title-1 text-white">
              You are about to vote
            </p>
            <input
              className=" w-full text-center text-[1.75em] font-bold text-white bg-neutral-50 border border-neutral-40 px-3 py-4 flex items-center justify-center"
              value={voteAmount}
              onChange={handleInputChange}
            />
          </div>
          <div className=" grid grid-cols-4 gap-2">
            <button
              className={cn(
                "px-2 py-3 border border-orange-30 grid place-items-center",
                voteAmount === 25 ? "bg-orange-30" : ""
              )}
              onClick={() => handleVotePercentage(25)}
            >
              <p className=" text-title-1 py-2 text-white">25%</p>
            </button>
            <button
              className={cn(
                "px-2 py-3 border border-orange-30 grid place-items-center",
                voteAmount === 50 ? "bg-orange-30" : ""
              )}
              onClick={() => handleVotePercentage(50)}
            >
              <p className=" text-title-1 py-2 text-white">50%</p>
            </button>
            <button
              className={cn(
                "px-2 py-3 border border-orange-30 grid place-items-center",
                voteAmount === 75 ? "bg-orange-30" : ""
              )}
              onClick={() => handleVotePercentage(75)}
            >
              <p className=" text-title-1 py-2 text-white">75%</p>
            </button>
            <button
              className={cn(
                "px-2 py-3 border border-orange-30 grid place-items-center",
                voteAmount === 100 ? "bg-orange-30" : ""
              )}
              onClick={() => handleVotePercentage(100)}
            >
              <p className=" text-title-1 py-2 text-white">100%</p>
            </button>
          </div>
          <Button onClick={handleVote}>Vote</Button>
          <AlertDialogCancel asChild>
            <Button variant={"outline"} className=" uppercase">
              Cancel
            </Button>
          </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </Container>
  );
};

export default dynamic(() => Promise.resolve(VoteModal), {
  ssr: false,
});
