const LocationCard = ({ icon, children }) => {
  return (
    <div>
      <div>{icon}</div>
      <div>
        <h1>Phone</h1>
      </div>
      {children}
    </div>
  );
};

export default LocationCard;
