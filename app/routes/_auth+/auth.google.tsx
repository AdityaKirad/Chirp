import { redirect, type ActionFunctionArgs } from "@remix-run/node";
import { authenticator } from "~/services/authenticator.server";

export const loader = () => redirect("/");

export const action = async ({ request }: ActionFunctionArgs) => authenticator.authenticate("google", request);
