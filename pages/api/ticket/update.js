import { update_ticket_meta } from "../../../app/models/Ticket";

export default async function TicketUpdate(req, res) {
  const updated = await update_ticket_meta(req.query.id, {
    title: req.body.title,
  });
  if (updated) {
    res.redirect("/", 200);
  } else {
    res.json({
      error: "TICKET_NOT_UPDATED",
    });
  }
}
