/** @format */

import React from "react";

const DataTable = () => {
  return (
    <div className="px-4 py-3 @container">
      <div className="flex overflow-hidden rounded-xl border border-[#E9DFCE] bg-[#FFFFFF]">
        <table className="flex-1">
          <thead>
            <tr className="bg-[#FFFFFF]">
              {/* Define table headers */}
              <th className="table-column px-4 py-3 text-left text-[#A18249] text-sm font-medium">
                Action
              </th>
              <th className="table-column px-4 py-3 text-left text-sm font-medium">
                Actor ID
              </th>
              <th className="table-column px-4 py-3 text-left text-sm font-medium">
                First Name
              </th>
              <th className="table-column px-4 py-3 text-left text-sm font-medium">
                Last Name
              </th>
              <th className="table-column px-4 py-3 text-left text-sm font-medium">
                Last Update
              </th>
              <th className="table-column px-4 py-3 text-left text-sm font-medium">
                Film
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-t-[#E9DFCE]">
              <td className="px-4 py-2 text-sm font-bold">X, Edit, View</td>
              <td className="px-4 py-2 text-sm font-normal">182</td>
              <td className="px-4 py-2 text-sm font-normal">DEBBIE</td>
              <td className="px-4 py-2 text-sm font-normal">AKROYD</td>
              <td className="px-4 py-2 text-sm font-normal">
                15 February 2006 4:34 am
              </td>
              <td className="px-4 py-2 text-sm font-bold">Show</td>
            </tr>
            {/* Additional rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
