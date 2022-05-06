import { Header, SubHeader } from "../../components/App";

export default function DebitCreate() {
  return (
    <main>
      <Header />
      <SubHeader title="Add Ticket" />
      <div>
        <div className="container">
          <form action="/api/ticket/create" method="POST">
            <div className="form-group mb-3">
              <label className="mb-2">Title</label>
              <input
                type="text"
                name="title"
                className="form-control form-control-lg"
                required
              />
            </div>
            <button type="submit" className="btn btn-lg btn-success">
              Save
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
