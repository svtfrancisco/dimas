import Link from "next/link";
import { TicketCard } from "../components/Ticket";
import { Header, SubHeader } from "../components/App";
import { SixGrid } from "../components/Sections";
import { get_ticket_by_status } from "../app/models/Ticket";
import { useSession, signIn, signOut } from "next-auth/react";
export async function getServerSideProps({ req, res }) {
  const headline = await get_ticket_by_status("headline");
  const backlog = await get_ticket_by_status("backlog");

  return {
    props: {
      headline,
      backlog,
    },
  };
}

export default function Index({ backlog, headline }) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <main>
        <Header>
          <div className="d-flex gap-3 align-items-center py-2">
            <div>Not signed in</div>
            <button onClick={() => signIn()} className="btn btn-primary">
              Sign in
            </button>
          </div>
        </Header>
        <section className="container py-5">
          <div className="alert alert-secondary">
            You need be logged in to use dimas
          </div>
        </section>
      </main>
    );
  }
  return (
    <main>
      <Header>
        <div
          className="d-flex gap-3 align-items-center py-2"
          style={{ lineHeight: 1 }}
        >
          <div>Signed in as {session.user.name}</div>
          <div onClick={() => signOut()} className="pointer-link">
            <span className="material-symbols-outlined">logout</span>
          </div>
        </div>
      </Header>
      <SubHeader title="Tickets">
        <Link href="/ticket/create" passHref>
          <button className="btn btn-success btn-lg">Add </button>
        </Link>
      </SubHeader>
      <SixGrid
        title="Headline"
        items={headline.map((ticket) => (
          <TicketCard key={ticket._id} ticket={ticket} />
        ))}
        empty={
          <div className="alert alert-secondary">Headline is empty now!</div>
        }
      />
      <SixGrid
        title="Backlog"
        items={backlog.map((ticket) => (
          <TicketCard key={ticket._id} ticket={ticket} />
        ))}
        empty={
          <div className="alert alert-secondary">Backlog is empty now!</div>
        }
      />
    </main>
  );
}
