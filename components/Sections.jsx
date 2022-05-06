export function SixGrid({ title, items, empty }) {
  return (
    <div className="container">
      <section className="mb-5">
        <header className="mb-4">
          <h4 className="mb-0 text-secondary">{title}</h4>
        </header>
        <div className="row">
          {items.length > 0 ? (
            items.map((item, index) => (
              <div className="col-6 mb-4" key={index}>
                {item}
              </div>
            ))
          ) : (
            <div className="col-12">{empty}</div>
          )}
        </div>
      </section>
    </div>
  );
}
