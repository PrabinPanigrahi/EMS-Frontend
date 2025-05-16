// import React from 'react';

// const SummaryCard =({icon, text, number, color}) => {
//    return(
//     <div className='rounded flex bg-white'>
//         <div className={`text-3xl flex justify-center items-center ${color} text-white px-4`}>
//             {icon}
//         </div>
//         <div className='pl-4 py-1'>
//             <p className='text-lg font-semibold'>{text}</p>
//             <p className='text-xl font-bold'>{number}</p>
//         </div>
//     </div>
//    )

// }

// export default SummaryCard

// SummaryCard.jsx (Responsive Version)
import React from 'react';

const SummaryCard = ({ icon, text, number, color }) => {
  return (
    <div className='rounded-lg flex bg-white shadow-sm hover:shadow-md transition-shadow'>
      <div className={`text-white p-3 md:p-4 flex items-center ${color}`}>
        <div className="text-xl md:text-2xl">{icon}</div>
      </div>
      <div className='pl-3 pr-2 py-2 md:pl-4 md:pr-3 flex-1'>
        <p className='text-sm md:text-base font-medium text-gray-600'>{text}</p>
        <p className='text-lg md:text-xl font-bold text-gray-800'>{number}</p>
      </div>
    </div>
  )
}

export default SummaryCard

