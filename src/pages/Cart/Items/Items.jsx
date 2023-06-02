const Items = ({ orders }) => {
  return (
    <div className="overflow-x-auto flex justify-center font-['Inter']">
      <table className="table">
        <thead>
          <tr>
            <th className="bg-[#d1a054] text-white uppercase font-['Inter']"></th>
            <th className="bg-[#d1a054] text-white uppercase font-['Inter']">
              Item Image
            </th>
            <th className="bg-[#d1a054] text-white uppercase font-['Inter']">
              Item Name
            </th>
            <th className="bg-[#d1a054] text-white uppercase font-['Inter']">
              Price
            </th>
            <th className="bg-[#d1a054] text-white uppercase font-['Inter']">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            <tr key={order._id}>
              <th>1</th>
              <td>
                <img src={order.image} alt={order.name} />
              </td>

              <td>Name: {order.name}</td>
              <td>Price: {order.price}</td>
              <td>
                <button className="btn">delete</button>
              </td>
            </tr>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Items;
