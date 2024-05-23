"use server";

import { permanentRedirect } from "next/navigation";

export async function navigate() {
  permanentRedirect(process.env.SuccessRedirectURL || "http://localhost:3000/success/destination");
}
