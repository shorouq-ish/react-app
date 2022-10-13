function SingleDetail({ property, value, theme }) {
  return (
    <div data-theme={theme} className="detail">
      <div className="detailsLine">
        <span className="property">{property}</span>
        <span className="value">{value}</span>
      </div>
    </div>
  );
}
export default SingleDetail;
