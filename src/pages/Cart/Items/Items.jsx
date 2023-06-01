const Items = () => {
  return (
    <div className="overflow-x-auto flex justify-center">
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
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
          </tr>

          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>

          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Items;
