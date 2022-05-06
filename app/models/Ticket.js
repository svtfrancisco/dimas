import mongoose from "mongoose";
import "../../tools/database";

const Ticket =
  mongoose.models.Ticket ||
  mongoose.model(
    "Ticket",
    new mongoose.Schema({
      title: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        required: true,
        enum: ["completed", "backlog", "headline"],
        default: "backlog",
      },
      createdAt: {
        type: Date,
        required: true,
        default: new Date(),
      },
      deletedAt: {
        type: Date,
        default: null,
      },
    })
  );

export function create_ticket(ticket) {
  return Ticket.create({ ...ticket, deletedAt: null });
}

export function get_ticket_by_status(status) {
  return Ticket.find({ status, deletedAt: null })
    .then((items) =>
      items.map((item) => ({
        ...item._doc,
        _id: new String(item._id).toString(),
      }))
    )
    .then(JSON.stringify)
    .then(JSON.parse);
}

export function get_ticket_by_id(id) {
  return Ticket.findOne({ _id: mongoose.Types.ObjectId(id), deletedAt: null })
    .then(JSON.stringify)
    .then(JSON.parse);
}

export function change_ticket_status(_id, status) {
  return Ticket.updateOne({ _id: mongoose.Types.ObjectId(_id) }, { status });
}

export function update_ticket_meta(_id, meta) {
  return Ticket.updateOne({ _id: mongoose.Types.ObjectId(_id) }, { ...meta });
}

export function delete_ticket(_id) {
  return Ticket.updateOne(
    { _id: mongoose.Types.ObjectId(_id) },
    { deletedAt: new Date() }
  );
}
