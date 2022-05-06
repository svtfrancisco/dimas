import Link from "next/link";
import { useMemo } from "react";

export function TicketCard({ ticket }) {
  const modifyLink = useMemo(() => {
    const status = ticket.status === "backlog" ? "headline" : "backlog";
    return `/api/ticket/modify?id=${ticket._id}&status=${status}`;
  }, [ticket]);

  const completeLink = useMemo(() => {
    return `/api/ticket/modify?id=${ticket._id}&status=completed`;
  }, [ticket]);

  const ticketAge = useMemo(() => {
    const date = new Date(ticket.createdAt);
    return date.toLocaleTimeString("pt-BR");
  }, [ticket]);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="mb-0">{ticket.title}</h5>
        <p className="text-muted">{ticketAge}</p>
      </div>
      <div className="card-footer d-flex justify-content-between">
        <div className="d-flex gap-4">
          <Link href={"/ticket/update/?id=" + ticket._id} passHref>
            <span className="d-flex gap-2 pointer-link">
              <span className="material-symbols-outlined">settings</span>
              <span>Edit</span>
            </span>
          </Link>
          <Link href={modifyLink} passHref>
            <span className="d-flex gap-2 pointer-link">
              <span className="material-symbols-outlined">
                {ticket.status === "headline"
                  ? "arrow_downward"
                  : "arrow_upward"}
              </span>
              <span>
                Send to {ticket.status === "backlog" ? "Headline" : "Backlog"}
              </span>
            </span>
          </Link>
        </div>
        {ticket.status === "headline" && (
          <div>
            <Link href={completeLink} passHref>
              <span className="d-flex gap-2 pointer-link">
                <span className="material-symbols-outlined">check</span>
                <span>Complete</span>
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
