import { BsTrash3Fill } from "react-icons/bs";
const Items = ({ orders }) => {
  return (
    <div className="overflow-x-auto flex justify-center font-['Inter']">
      <table className="table">
        <thead>
          <tr>
            {/* <th className="bg-[#d1a054] text-white uppercase font-['Inter']"></th> */}
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
          {orders.map((item) => (
            <tr key={item._id}>
              <td>
                <div className="avatar">
                  <div className="w-8 rounded">
                    <img src={item.image} alt={item.name} />
                  </div>
                </div>
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button className="btn btn-xs">
                  <BsTrash3Fill />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Items;
