import { get_ticket_by_id } from "../../app/models/Ticket";
import { Header, SubHeader } from "../../components/App";
import Link from "next/link";
export async function getServerSideProps(context) {
  let ticket = await get_ticket_by_id(context.query.id);
  return {
    props: {
      ticket,
    },
  };
}

export default function DebitUpdate({ ticket }) {
  return (
    <div>
      <Header />
      <SubHeader title="Update Ticket" />
      <div className="container">
        <section className="mb-5">
          <form action={"/api/ticket/update?id=" + ticket._id} method="POST">
            <div className="form-group mb-3">
              <label className="mb-2">Title</label>
              <input
                type="text"
                name="title"
                defaultValue={ticket.title}
                className="form-control form-control-lg"
                required
              />
            </div>
            <button type="submit" className="btn btn-lg btn-success">
              Save
            </button>
          </form>
        </section>
        <section>
          <Link href={"/api/ticket/delete?id=" + ticket._id} passHref>
            <button className="btn btn-danger">Delete ticket</button>
          </Link>
        </section>
      </div>
    </div>
  );
}
