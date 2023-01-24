import { Router } from "express";
import { SignupService } from "./signup.service";

export const signupService = new SignupService({ DOMAIN: `/signup/signup` });

export const signupController = Router();

signupController.get("", signupService.render);
