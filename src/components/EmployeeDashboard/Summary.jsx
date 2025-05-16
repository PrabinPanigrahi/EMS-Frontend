// import React from 'react';
// import { FaUser } from 'react-icons/fa'
// import { useAuth } from '../../context/authContext';

// const SummaryCard =() => {
//     const {user} = useAuth()
//    return(
//     <div className='rounded flex bg-white px-4 py-4'>
//         <div className={`text-3xl flex justify-center items-center bg-teal-600 text-white px-4 py-3`}>
//             <FaUser />
//         </div>
//         <div className='pl-4 py-1'>
//             <p className='text-lg font-semibold'>Welcome Back,</p>
//             <p className='text-xl font-bold'>{user.name}</p>
//         </div>
//     </div>
//    )

// }

// export default SummaryCard


// import React from 'react';
// import { FaUser } from 'react-icons/fa';
// import { useAuth } from '../../context/authContext';

// const SummaryCard = () => {
//     const { user } = useAuth();
    
//     return (
//         <div className='rounded-lg flex flex-col sm:flex-row bg-white px-4 py-4 shadow-sm'>
//             {/* Icon container - centered on mobile, left-aligned on larger screens */}
//             <div className={`text-2xl sm:text-3xl flex justify-center sm:justify-start items-center bg-teal-600 text-white px-4 py-3 w-12 h-12 sm:w-auto sm:h-auto mx-auto sm:mx-0 mb-3 sm:mb-0`}>
//                 <FaUser />
//             </div>
            
//             {/* Text content */}
//             <div className='sm:pl-4 py-1 text-center sm:text-left'>
//                 <p className='text-base sm:text-lg font-semibold'>Welcome Back,</p>
//                 <p className='text-lg sm:text-xl font-bold truncate' title={user.name}>
//                     {user.name}
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default SummaryCard;



import React from 'react';
import { FaUser } from 'react-icons/fa';
import { useAuth } from '../../context/authContext';

const SummaryCard = () => {
    const { user } = useAuth();
    
    return (
        <div className='rounded-lg flex flex-col sm:flex-row bg-white p-4 shadow-sm mx-4 sm:mx-6 lg:ml-10 mt-2'>
            {/* Icon container with responsive sizing */}
            <div className='text-2xl sm:text-3xl flex-shrink-0 flex justify-center items-center bg-teal-600 text-white w-12 h-12 sm:w-14 sm:h-14 rounded-lg'>
                <FaUser />
            </div>
            
            {/* Text content with proper spacing */}
            <div className='mt-3 sm:mt-0 sm:ml-4 flex-1 min-w-0'>
                <p className='text-base sm:text-lg  font-semibold text-gray-600'>Welcome Back,</p>
                <p className='text-lg sm:text-xl font-bold text-gray-800 break-words leading-tight'>
                    {user.name}
                </p>
            </div>
        </div>
    );
};

export default SummaryCard;



