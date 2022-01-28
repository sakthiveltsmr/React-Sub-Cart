import "./App.css";
export const Subs = (props) => {
  console.log(props);
  let user = (
    <p>
      <i className="fas fa-check"></i>
      <b>{props.user}</b>
    </p>
  );
  let storage = (
    <p>
      <i className="fas fa-check"></i>
      {props.storage}
    </p>
  );
  let upProjects = (
    <p>
      <i className="fas fa-check"></i>Unlimited public Projects
    </p>
  );
  let caccess = (
    <p>
      <i className="fas fa-check"></i>Community access
    </p>
  );
  let privatePro;
  if (props.private)
    privatePro = (
      <p>
        <i className="fas fa-check"></i>Unlimited private Projects
      </p>
    );
  else
    privatePro = (
      <p className="muted">
        <i className="fas fa-times"></i>Unlimited Private Projects
      </p>
    );
  let phone;
  if (props.phone)
    phone = (
      <p>
        <i className="fas fa-check"></i>Dedicated phone support
      </p>
    );
  else
    phone = (
      <p className="muted">
        <i className="fas fa-times"></i>Dedicated phone support
      </p>
    );
  let domain = props.domain;
  if (domain)
    domain = (
      <p>
        <i className="fas fa-check"></i>
        <b>{domain}</b>
      </p>
    );
  else
    domain = (
      <p className="muted">
        <i className="fas fa-times"></i>Free Subdomain
      </p>
    );
  let report;
  if (props.report)
    report = report = (
      <p>
        <i className="fas fa-check"></i>Monthly Status Reports
      </p>
    );
  else
    report = (
      <p className="muted">
        <i className="fas fa-times"></i>Monthly Status Reports
      </p>
    );
  return (
    <>
      <div className="card">
        <div className="header">
          <p>{props.cardType}</p>
        </div>
        <div className="price">
          <h1>
            $0<span className="smallPrice">/ Month</span>
          </h1>
        </div>
        <hr />
        <ul>
          <li>{user}</li>
          <li>{storage}</li>
          <li>{upProjects}</li>
          <li>{caccess}</li>
          <li>{privatePro}</li>
          <li>{phone}</li>
          <li>{domain}</li>
          <li>{report}</li>
        </ul>
        <button className="button">Check</button>
      </div>
    </>
  );
};
