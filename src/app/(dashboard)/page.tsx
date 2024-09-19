import { TokenLaunchPad } from "@/components/home/token-launchpad";

export default function Home() {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-20 w-full">
      <div className="w-[400px]">
        <TokenLaunchPad />
      </div>
    </div>
  );
}
