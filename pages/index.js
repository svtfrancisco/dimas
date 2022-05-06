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
      <div>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    );
  }
  return (
    <main>
      <div>
        Signed in as {session.user.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
      <Header />
      <SubHeader title="Tickets">
        <Link href="/ticket/create">
          <button className="btn btn-success btn-lg">Add </button>
        </Link>
      </SubHeader>
      <SixGrid
        title="Headline"
        items={headline.map((ticket) => (
          <TicketCard ticket={ticket} />
        ))}
        empty={
          <div className="alert alert-secondary">Headline is empty now!</div>
        }
      />
      <SixGrid
        title="Backlog"
        items={backlog.map((ticket) => (
          <TicketCard ticket={ticket} />
        ))}
        empty={
          <div className="alert alert-secondary">Backlog is empty now!</div>
        }
      />
    </main>
  );
}
