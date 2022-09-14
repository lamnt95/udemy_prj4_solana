const assert = require("assert")
const anchor = require("@project-serum/anchor")

const { SystemProgram } = anchor.web3

describe("test", () => {
  const provider = anchor.Provider.local();
  anchor.setProvider(provider);
  const calculator = anchor.web3.Keypair.generate();
  const program = anchor.workspace.UdemyPrj4Solana;
  if ("it", async () => {
    await program.rpc.create(
      "Hello solana",
      {
        accounts: {
          calculator: calculator.publicKey,
          user: provider.wallet.publicKey,
          systemProgram: SystemProgram.programId
        },
        signer: [calculator]
      }
    );
    const account = await program.account.calculator.fetch(calculator.publicKey);
    assert.ok(account.greeting === "Hello solana")
  });
})