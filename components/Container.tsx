import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}
const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        " max-w-[768px] xl:max-w-[468px] bg-background mx-auto px-3"
      )}
    >
      {children}
    </div>
  );
};

export default Container;
