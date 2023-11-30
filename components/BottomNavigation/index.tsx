"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC, ReactNode } from "react";
import {
  RiAddLine,
  RiHome3Line,
  RiTrophyLine,
  RiWalletLine,
} from "react-icons/ri";
import Container from "../Container";

interface IBottomNavigation {
  icon: ReactNode;
  href: string;
}

const BottomNavigation: FC = () => {
  const router = useRouter();
  const pathName = usePathname();
  const data: IBottomNavigation[] = [
    {
      icon: <RiHome3Line />,
      href: "/",
    },
    {
      icon: <RiTrophyLine />,
      href: "/trophy",
    },
    {
      icon: <RiAddLine />,
      href: "/create",
    },
    {
      icon: <RiWalletLine />,
      href: "/wallet",
    },
  ];

  console.log(pathName);

  return (
    <Container className="  ">
      <div className="flex z-[9999] border-t  border-neutral-40 max-w-[768px] xl:max-w-[468px] mx-auto w-full left-0 right-0  fixed bottom-0 l h-[75px]  justify-between items-center gap-2 shrink-0 pt-4 pb-8 px-4 border-t-neutral-40 bg-neutral-60">
        <nav className="flex items-center w-full justify-between">
          {data.map((link, index) => (
            <Link
              href={link.href}
              className={cn(
                "text-3xl ",
                pathName.startsWith(`${link.href}`) && pathName === link.href
                  ? "text-orange-30"
                  : "text-white"
              )}
              key={index}
            >
              {link.icon}
            </Link>
          ))}
          <Link href={"/profile"}>
            <Avatar
              className={cn(
                pathName.startsWith("/profile") &&
                  "border-[2px] border-orange-30"
              )}
            >
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </Link>
        </nav>
      </div>
    </Container>
  );
};

export default BottomNavigation;
