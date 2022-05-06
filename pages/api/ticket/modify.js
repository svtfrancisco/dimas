import { change_ticket_status } from "../../../app/models/Ticket";

export default async function TicketModify(req, res) {
  const updated = await change_ticket_status(req.query.id, req.query.status);
  if (updated) {
    res.redirect("/", 200);
  } else {
    res.json({
      error: "TICKET_NOT_UPDATED",
    });
  }
}
