import { Service } from "../../lib/classes/Service";

import type { RequestHandler } from "express";

export class SignupService extends Service {
  constructor({ DOMAIN }: { DOMAIN: string }) {
    super({ DOMAIN });
  }
  post: RequestHandler = (req, res) => {
    console.log("req", req);
    res.send({ greet: "hello" });
  };

  render: RequestHandler = (req, res) => {
    res.render(this.path, {
      title: "SIGNUP TITLE",
    });
  };
}
