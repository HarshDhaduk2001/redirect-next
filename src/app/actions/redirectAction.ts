"use server";

import { permanentRedirect } from "next/navigation";

export async function navigate() {
  permanentRedirect(process.env.RedirectURL || "");
}
