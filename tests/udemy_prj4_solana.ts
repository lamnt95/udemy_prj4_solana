import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { UdemyPrj4Solana } from "../target/types/udemy_prj4_solana";

describe("udemy_prj4_solana", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.UdemyPrj4Solana as Program<UdemyPrj4Solana>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
