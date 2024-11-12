const Token = artifacts.require("MyToken");

const chai = await import("chai"); // Use dynamic import for chai
const chaiBN = await import("chai-bn"); // Use dynamic import for chai-bn
const chaiAsPromised = await import("chai-as-promised"); // Use dynamic import for chai-as-promised

const BN = web3.utils.BN;

chai.use(chaiBN.default(BN)); // Use .default for chai-bn
chai.use(chaiAsPromised.default); // Use .default for chai-as-promised

const { expect } = chai;
const { assert } = chai;

contract("MyToken", function (accounts) {
  it("all tokens should be in my account", async function () {
    let instance = await Token.deployed();
    let totalSupply = await instance.totalSupply();

    expect(await instance.balanceOf(accounts[0])).to.be.bignumber.equal(
      totalSupply
    );
  });
});
