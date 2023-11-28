import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

const SplashScreen = () => {
  return (
    <Container>
      <div className=" flex items-center justify-center min-h-screen">
        <Link href={"/"}>
          <Image src={"/images/logo.svg"} alt="logo" width={263} height={89} />
        </Link>
      </div>
    </Container>
  );
};

export default SplashScreen;
