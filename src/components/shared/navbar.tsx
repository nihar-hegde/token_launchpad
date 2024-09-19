"use client";
import {
  WalletDisconnectButton,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";

export const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-end w-full fixed h-50 p-2 ">
      <div className="flex flex-row gap-2 items-center ">
        <WalletMultiButton />
        <WalletDisconnectButton />
      </div>
    </nav>
  );
};
