function FeatureCard({ title, description }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <br />
      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;