class Service {
  constructor(arg) {
    this.arg = arg;
  }
  log = () => {
    console.log("arg!", this.arg);
  };
}
function main() {
  const a = new Service("hahaha");
  a.log();
}
main();
