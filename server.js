

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  let my_name = process.env.SECRET_NAME;
  while(true) {
    console.log(`Hey ${my_name} Microservices rock!`);
    await sleep(5000);
  }
}

main();
