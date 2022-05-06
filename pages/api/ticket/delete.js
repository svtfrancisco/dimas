import { delete_ticket } from "../../../app/models/Ticket";

export default async function TicketModify(req, res) {
  const deleted = await delete_ticket(req.query.id);
  if (deleted) {
    res.redirect("/", 200);
  } else {
    res.json({
      error: "TICKET_NOT_UPDATED",
    });
  }
}
