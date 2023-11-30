import BottomNavigation from "@/components/BottomNavigation";
import Container from "@/components/Container";

export default function Home() {
  return (
    <Container>
      <main className=" flex flex-col min-h-screen pb-20">
        <BottomNavigation />
      </main>
    </Container>
  );
}
