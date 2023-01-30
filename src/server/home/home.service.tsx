import { Service } from "../../lib/classes/Service";
import React from "react";
import Server, { renderToString } from "react-dom/server";
import type { RequestHandler } from "express";
import { Hello } from "./a";

export class HomeService extends Service {
  constructor({ DOMAIN }: { DOMAIN: string }) {
    super({ DOMAIN });
  }

  render: RequestHandler = (req, res) => {
    console.log("Hello", Hello);
    res.sendFile(this.PWD + "/app/dist/index.html");
  };

  ssrRender: RequestHandler = (req, res) => {
    const html = renderToString(<Hello />);
    console.log("html", html);
    res.send({ hi: "hi" });
  };
}
