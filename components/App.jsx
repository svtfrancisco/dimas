export function Header({ children }) {
  return (
    <div className="my-2 container">
      <header className="d-flex justify-content-between">
        <div>
          <h2 className="text-primary mb-0 py-3">Dimas</h2>
        </div>
        <div>{children}</div>
      </header>
    </div>
  );
}

export function SubHeader({ title, children }) {
  return (
    <header className="d-flex mb-5 bg-light py-3">
      <div className="container d-flex align-items-center justify-content-between">
        <h3 className="mb-0">{title}</h3>
        <div>{children}</div>
      </div>
    </header>
  );
}
