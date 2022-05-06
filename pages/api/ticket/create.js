import { create_ticket } from "../../../app/models/Ticket";

export default async function TicketCreate(req, res) {
  const created = await create_ticket({
    title: req.body.title,
  });
  if (created) {
    res.redirect("/", 200);
  } else {
    res.json({
      error: "TICKET_NOT_CREATED",
    });
  }
}
