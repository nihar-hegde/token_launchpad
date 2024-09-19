"use client";
import React, { ReactNode } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";
import { Navbar } from "@/components/shared/navbar";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ConnectionProvider
        endpoint={
          "https://solana-devnet.g.alchemy.com/v2/tqoA0HsqL3luasjokw97vxQxbgVyU_D6"
        }
      >
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div>
              <Navbar />
              <div>{children}</div>
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
};

export default layout;
