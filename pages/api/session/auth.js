import { getSession } from "../../../tools/session";

export default async function TicketCreate(req, res) {
  const session = await getSession(req, res);
  if (req.body.u === "francisco" && req.body.p === "123") {
    session.user = "francisco";
    await session.commit();
    console.log(session.user);
    res.redirect("/", 200);
  } else {
    res.json({
      error: "Invalid password",
    });
  }
}
