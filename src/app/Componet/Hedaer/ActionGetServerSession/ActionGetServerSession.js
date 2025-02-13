"use server";

import { getServerSession } from "next-auth";

export async function GetSessonData() {
  let Session = await getServerSession();

  return Session;
}
