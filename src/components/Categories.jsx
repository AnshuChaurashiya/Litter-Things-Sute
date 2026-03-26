// import React from "react"
// import { ChevronDown } from "lucide-react"

// export const Categories = () => {
//   const categories = [
//     {
//       name: "Home & Living",
//       items: ["Art Prints", "Coasters", "Fridge Magnets", "Keychains", "Wall Decor"],
//     },
//     {
//       name: "Fashion",
//       items: ["Jewelry", "Bags", "Hair Accessories"],
//     },
//     {
//       name: "Stationery",
//       items: ["Notebooks", "Pens", "Sticky Notes"],
//     },
//     {
//       name: "Travel",
//       items: ["Passport Covers", "Luggage Tags"],
//     },
//     {
//       name: "Kids",
//       items: ["Toys", "School Items"],
//     },
//     {
//       name: "Bundles",
//       items: ["Bracelets Bundle", "Earrings Bundle"],
//     },
//   ]

//   return (
//     <div className="hidden md:flex w-full justify-center bg-gray-200 z-0 py-3">

//       {categories.map((menu, index) => (
//         <div key={index} className="relative group px-10">

//           {/* Category Name + Icon */}
//           <div className="flex items-center gap-1 cursor-pointer group">
//             <p className="hover:text-teal-500 transition">
//               {menu.name}
//             </p>

//             <ChevronDown
//               size={16}
//               className="transition-transform z-10 duration-300 group-hover:rotate-180"
//             />
//           </div>

//           {/* Dropdown */}
//           <div
//             className="absolute left-0 right-0 top-10 w-40 z-10  bg-white/90 backdrop-blur-md shadow-2xl rounded-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-4 scale-95 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out"
//           >
//             {menu.items.map((item, i) => (
//               <p
//                 key={i}
//                 className="px-3 py-2 text-sm rounded-md hover:bg-teal-50 hover:text-teal-500 hover:translate-x-2 transition-all duration-200 cursor-pointer"
//               >
//                 {item}
//               </p>
//             ))}
//           </div>

//         </div>
//       ))}

//     </div>
//   )
// }

// export default Categories;

import React from "react"
import { useNavigate } from "react-router-dom"

const categories = [
  {
    name: "Home & Living",
    img: "https://images.unsplash.com/photo-1493666438817-866a91353ca9",
  },
  {
    name: "Fashion",
    img: "https://images.unsplash.com/photo-1521334884684-d80222895322",
  },
  {
    name: "Stationery",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350",
  },
  {
    name: "Travel",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    name: "Kids",
    img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74",
  },
  {
    name: "Bundles",
    img: "https://images.unsplash.com/photo-1607082349566-187342175e2f",
  },
]

export default function Categories() {
  const navigate = useNavigate()

  return (
    <section className="px-4 md:px-10 lg:px-16 mt-12">

      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
          Shop by Categories
        </h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          Explore our wide range of collections
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-5">

        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => navigate(`/category/${cat.name}`)}
            className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
          >

            {/* Image */}
            <img
              src={cat.img}
              alt={cat.name}
              className="h-32 sm:h-36 md:h-40 lg:h-44 w-full object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 flex items-center justify-center transition duration-300">
              <p className="text-white font-semibold text-sm md:text-lg tracking-wide transform group-hover:scale-110 transition duration-300">
                {cat.name}
              </p>
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}