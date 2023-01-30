import { Service } from "../../lib/classes/Service";
import path from "path";

import type { RequestHandler } from "express";

export class HomeService extends Service {
  constructor({ DOMAIN }: { DOMAIN: string }) {
    super({ DOMAIN });
  }

  render: RequestHandler = (req, res) => {
    res.sendFile(this.PWD + "/app/dist/index.html");
  };
}
