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
import dynamic from "next/dynamic";
import { RiFlashlightLine } from "react-icons/ri";
import Container from "../Container";

const VoteModal = () => {
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
              value={100}
            />
          </div>
          <div className=" grid grid-cols-4 gap-2">
            <div className=" px-2 py-3 border border-orange-30 grid place-items-center">
              <p className=" text-title-1 py-2 text-white">25%</p>
            </div>

            <div className=" px-2 py-3 border border-orange-30 grid place-items-center">
              <p className=" text-title-1 py-2 text-white">50%</p>
            </div>
            <div className=" px-2 py-3 border border-orange-30 grid place-items-center">
              <p className=" text-title-1 py-2 text-white">75%</p>
            </div>
            <div className=" px-2 py-3 border border-orange-30 grid place-items-center">
              <p className=" text-title-1 py-2 text-white">100%</p>
            </div>
          </div>
          <Button>Vote</Button>
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
