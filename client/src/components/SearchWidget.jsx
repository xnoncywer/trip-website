
// import { useState } from "react";
// import { Plane, Hotel, Palmtree, Search } from "lucide-react";

// export default function SearchWidget() {
//   const [tab, setTab] = useState("flights");

//   const tabs = [
//     { id: "flights", name: "Flights", icon: Plane },
//     { id: "hotels", name: "Hotels", icon: Hotel },
//     { id: "holidays", name: "Holidays", icon: Palmtree },
//   ];

//   return (
//     <section className="relative z-10 mx-auto -mt-20 max-w-7xl px-5 lg:px-8">
//       <div className="rounded-3xl bg-white p-6 shadow-2xl md:p-8">

//         <div className="mb-7 flex flex-wrap gap-3">
//           {tabs.map(({ id, name, icon: Icon }) => (
//             <button
//               key={id}
//               type="button"
//               onClick={() => setTab(id)}
//               className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
//                 tab === id
//                   ? "bg-orange-500 text-white"
//                   : "bg-gray-100 text-gray-600 hover:bg-gray-200"
//               }`}
//             >
//               <Icon size={18} />
//               {name}
//             </button>
//           ))}
//         </div>

//         <form
//           onSubmit={(e) => {
//             e.preventDefault();
//             alert("Search UI ready. Supplier API integration comes next.");
//           }}
//           className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
//         >

//           {tab !== "hotels" && (
//             <>
//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-gray-700">
//                   From
//                 </label>
//                 <input
//                   required
//                   placeholder="Departure city"
//                   className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-orange-500"
//                 />
//               </div>

//               <div>
//                 <label className="mb-2 block text-sm font-semibold text-gray-700">
//                   To
//                 </label>
//                 <input
//                   required
//                   placeholder="Destination"
//                   className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-orange-500"
//                 />
//               </div>
//             </>
//           )}

//           {tab === "hotels" && (
//             <div>
//               <label className="mb-2 block text-sm font-semibold text-gray-700">
//                 Destination
//               </label>
//               <input
//                 required
//                 placeholder="City or hotel"
//                 className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-orange-500"
//               />
//             </div>
//           )}

//           <div>
//             <label className="mb-2 block text-sm font-semibold text-gray-700">
//               {tab === "hotels" ? "Check-in" : "Departure"}
//             </label>
//             <input
//               type="date"
//               required
//               min={new Date().toISOString().split("T")[0]}
//               className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-orange-500"
//             />
//           </div>

//           <div>
//             <label className="mb-2 block text-sm font-semibold text-gray-700">
//               {tab === "hotels" ? "Check-out" : "Return"}
//             </label>
//             <input
//               type="date"
//               required
//               min={new Date().toISOString().split("T")[0]}
//               className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-orange-500"
//             />
//           </div>

//           <div className="md:col-span-2 lg:col-span-4">
//             <button
//               type="submit"
//               className="flex w-full items-center justify-center gap-3 rounded-xl bg-orange-500 p-4 font-bold text-white transition hover:bg-orange-600"
//             >
//               <Search size={20} />
//               Search {tab}
//             </button>
//           </div>

//         </form>
//       </div>
//     </section>
//   );
// }


import { useState } from "react";
import { Plane, Hotel, Palmtree, Search } from "lucide-react";

export default function SearchWidget() {
  const [tab, setTab] = useState("flights");

  const tabs = [
    { id: "flights", name: "Flights", icon: Plane },
    { id: "hotels", name: "Hotels", icon: Hotel },
    { id: "holidays", name: "Holidays", icon: Palmtree },
  ];

  const today = new Date().toISOString().split("T")[0];

  function handleSearch(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const searchData = Object.fromEntries(formData.entries());

    console.log("Search Type:", tab);
    console.log("Search Data:", searchData);

    alert(`${tab} search submitted successfully!`);
  }

  return (
    <section className="relative z-10 mx-auto -mt-20 max-w-7xl px-5 lg:px-8">
      <div className="rounded-3xl bg-white p-6 shadow-2xl md:p-8">

        <div className="mb-7 flex flex-wrap gap-3">
          {tabs.map(({ id, name, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition ${
                tab === id
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Icon size={18} />
              {name}
            </button>
          ))}
        </div>

        <form
          onSubmit={handleSearch}
          className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
        >

          {tab === "flights" && (
            <>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  From
                </label>
                <input
                  name="from"
                  required
                  placeholder="Departure city"
                  className="w-full rounded-xl border border-gray-200 p-4 outline-none transition focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  To
                </label>
                <input
                  name="to"
                  required
                  placeholder="Destination city"
                  className="w-full rounded-xl border border-gray-200 p-4 outline-none transition focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Departure
                </label>
                <input
                  name="departure"
                  type="date"
                  min={today}
                  required
                  className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Return
                </label>
                <input
                  name="return"
                  type="date"
                  min={today}
                  className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-orange-500"
                />
              </div>
            </>
          )}

          {tab === "hotels" && (
            <>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Destination
                </label>
                <input
                  name="destination"
                  required
                  placeholder="City or hotel"
                  className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Check-in
                </label>
                <input
                  name="checkIn"
                  type="date"
                  min={today}
                  required
                  className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Check-out
                </label>
                <input
                  name="checkOut"
                  type="date"
                  min={today}
                  required
                  className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Guests
                </label>
                <select
                  name="guests"
                  className="w-full rounded-xl border border-gray-200 bg-white p-4 outline-none focus:border-orange-500"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
              </div>
            </>
          )}

          {tab === "holidays" && (
            <>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Destination
                </label>
                <input
                  name="destination"
                  required
                  placeholder="Where do you want to go?"
                  className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Departure Date
                </label>
                <input
                  name="departure"
                  type="date"
                  min={today}
                  required
                  className="w-full rounded-xl border border-gray-200 p-4 outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Travellers
                </label>
                <select
                  name="travellers"
                  className="w-full rounded-xl border border-gray-200 bg-white p-4 outline-none focus:border-orange-500"
                >
                  <option value="1">1 Traveller</option>
                  <option value="2">2 Travellers</option>
                  <option value="3">3 Travellers</option>
                  <option value="4">4 Travellers</option>
                  <option value="5">5+ Travellers</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Duration
                </label>
                <select
                  name="duration"
                  className="w-full rounded-xl border border-gray-200 bg-white p-4 outline-none focus:border-orange-500"
                >
                  <option value="3-5 days">3–5 Days</option>
                  <option value="6-8 days">6–8 Days</option>
                  <option value="9-12 days">9–12 Days</option>
                  <option value="13+ days">13+ Days</option>
                </select>
              </div>
            </>
          )}

          <div className="md:col-span-2 lg:col-span-4">
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-orange-500 p-4 font-bold text-white transition hover:bg-orange-600"
            >
              <Search size={20} />
              Search {tab}
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}