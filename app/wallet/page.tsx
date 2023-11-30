import BottomNavigation from "@/components/BottomNavigation";
import Container from "@/components/Container";
import { HistoryItem } from "@/interfaces/type";
import { cn } from "@/lib/utils";
import { FC } from "react";
import { FaPlus } from "react-icons/fa6";

const Wallet: FC = () => {
  const history_data: HistoryItem[] = [
    {
      type: "withdraw",
      time: "1 hours ago",
      sats: "18,000",
      title: "WITHDRAW",
    },
    {
      type: "wins",
      time: "1 hours ago",
      sats: "18,000",
      title: "WINS",
    },
    {
      type: "create_revenue",
      time: "9 hours ago",
      sats: "18,000",
      title: "CREATOR REVENUE",
    },
    {
      type: "create_revenue",
      time: "9 hours ago",
      sats: "18,000",
      title: "CREATOR REVENUE",
    },
    {
      type: "create_revenue",
      time: "9 hours ago",
      sats: "18,000",
      title: "CREATOR REVENUE",
    },

    {
      type: "create_revenue",
      time: "9 hours ago",
      sats: "18,000",
      title: "CREATOR REVENUE",
    },
    {
      type: "create_revenue",
      time: "9 hours ago",
      sats: "18,000",
      title: "CREATOR REVENUE",
    },
    {
      type: "create_revenue",
      time: "9 hours ago",
      sats: "18,000",
      title: "CREATOR REVENUE",
    },
    {
      type: "create_revenue",
      time: "9 hours ago",
      sats: "18,000",
      title: "CREATOR REVENUE",
    },
    {
      type: "create_revenue",
      time: "9 hours ago",
      sats: "18,000",
      title: "CREATOR REVENUE",
    },
    {
      type: "create_revenue",
      time: "9 hours ago",
      sats: "18,000",
      title: "CREATOR REVENUE",
    },
    {
      type: "create_revenue",
      time: "9 hours ago",
      sats: "18,000",
      title: "CREATOR REVENUE",
    },

    {
      type: "create_revenue",
      time: "9 hours ago",
      sats: "18,000",
      title: "CREATOR REVENUE",
    },
    {
      type: "create_revenue",
      time: "9 hours ago",
      sats: "18,000",
      title: "CREATOR REVENUE",
    },
  ];
  return (
    <Container>
      <div className="flex flex-col min-h-screen pb-24">
        <BottomNavigation />
        <div className=" pt-10">
          <div className=" py-3 space-y-[4px]">
            <p className=" text-title-1  text-neutral-20 text-center">
              My balance
            </p>
            <h2 className="text-center text-heading-1 text-white">
              1,523,000 <span className=" text-orange-30">SATS</span>
            </h2>
          </div>
          <div className=" border-b border-neutral-40 py-4 flex items-center justify-center gap-5">
            <div className=" space-y-[4px] flex flex-col  items-center ">
              <button className=" focus:outline-none border border-orange-50 p-2">
                <FaPlus className=" w-6 h-6 text-orange-30" />
              </button>
              <p className=" text-center text-pragraph-1 font-bold text-orange-30">
                TOP UP
              </p>
            </div>
            <div className=" flex flex-col  items-center space-y-[4px]">
              <button className=" focus:outline-none border border-orange-50 p-2">
                <FaPlus className=" w-6 h-6 text-orange-30" />
              </button>
              <p className=" t text-pragraph-1 font-bold text-orange-30">
                WITHDRAW
              </p>
            </div>
          </div>
        </div>
        <div className=" p-4">
          <h2 className="  text-title-1 text-white">History</h2>
          <ul className=" pt-3 space-y-5">
            {history_data.map((data, index) => (
              <li className={cn("")} key={index}>
                <div className=" flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className=" w-10 h-10 bg-neutral-50 flex items-center justify-center"></div>
                    <div>
                      <p className=" text-pragraph-1 text-white font-bold">
                        WITHDRAW
                      </p>
                      <p className=" text-pragraph-1  text-neutral-30 font-medium">
                        1 hours ago
                      </p>
                    </div>
                  </div>
                  {data.type === "withdraw" ? (
                    <h2 className="text-danger uppercase text-base font-bold">
                      - {data.sats} Sats
                    </h2>
                  ) : (
                    <h2 className="text-success uppercase text-base font-bold">
                      + {data.sats} Sats
                    </h2>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Wallet;
