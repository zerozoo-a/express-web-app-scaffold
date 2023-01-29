import { Service, type RequestHandler } from "../../lib/classes/Service";

export class SignupService extends Service {
  constructor({ DOMAIN }: { DOMAIN: string }) {
    super({ DOMAIN });
  }
  post: RequestHandler = (req, res) => {
    console.log("req", req);
    res.send({ greet: "hello" });
  };

  render: RequestHandler = (req, res) => {
    console.log("this.path", this.path);
    res.render(this.path, {
      title: "SIGNUP TITLE",
    });
  };
}
