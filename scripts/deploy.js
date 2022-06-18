const { parseUnits, FormatTypes } = require("ethers/lib/utils");

async function main() {
  const MiE = await ethers.getContractFactory("MiEToken");
  console.log("Deploying MiE...");
  const miE = await MiE.deploy(parseUnits("1000000"));
  await miE.deployed();
  console.log("MiE deployed at", miE.address);
  console.log(
    "MiE abi: ",
    JSON.stringify(JSON.parse(miE.interface.format(FormatTypes.json), null, 2))
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//MiE deployed at 0x1CA074c9698d988DB65abd1619e07A6D5F206eb2
//MiE abi:  [{"type":"constructor","payable":false,"inputs":[{"type":"uint256","name":"initialSupply"}]},{"type":"event","anonymous":false,"name":"Approval","inputs":[{"type":"address","name":"owner","indexed":true},{"type":"address","name":"spender","indexed":true},{"type":"uint256","name":"value","indexed":false}]},{"type":"event","anonymous":false,"name":"Transfer","inputs":[{"type":"address","name":"from","indexed":true},{"type":"address","name":"to","indexed":true},{"type":"uint256","name":"value","indexed":false}]},{"type":"function","name":"allowance","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address","name":"owner"},{"type":"address","name":"spender"}],"outputs":[{"type":"uint256"}]},{"type":"function","name":"approve","constant":false,"payable":false,"inputs":[{"type":"address","name":"spender"},{"type":"uint256","name":"amount"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"balanceOf","constant":true,"stateMutability":"view","payable":false,"inputs":[{"type":"address","name":"account"}],"outputs":[{"type":"uint256"}]},{"type":"function","name":"burn","constant":false,"payable":false,"inputs":[{"type":"uint256","name":"amount"}],"outputs":[]},{"type":"function","name":"burnFrom","constant":false,"payable":false,"inputs":[{"type":"address","name":"account"},{"type":"uint256","name":"amount"}],"outputs":[]},{"type":"function","name":"decimals","constant":true,"stateMutability":"pure","payable":false,"inputs":[],"outputs":[{"type":"uint8"}]},{"type":"function","name":"decreaseAllowance","constant":false,"payable":false,"inputs":[{"type":"address","name":"spender"},{"type":"uint256","name":"subtractedValue"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"increaseAllowance","constant":false,"payable":false,"inputs":[{"type":"address","name":"spender"},{"type":"uint256","name":"addedValue"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"name","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"symbol","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"string"}]},{"type":"function","name":"totalSupply","constant":true,"stateMutability":"view","payable":false,"inputs":[],"outputs":[{"type":"uint256"}]},{"type":"function","name":"transfer","constant":false,"payable":false,"inputs":[{"type":"address","name":"to"},{"type":"uint256","name":"amount"}],"outputs":[{"type":"bool"}]},{"type":"function","name":"transferFrom","constant":false,"payable":false,"inputs":[{"type":"address","name":"from"},{"type":"address","name":"to"},{"type":"uint256","name":"amount"}],"outputs":[{"type":"bool"}]}]
