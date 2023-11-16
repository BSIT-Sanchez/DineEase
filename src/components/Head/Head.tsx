import React, { FC } from 'react';

interface HeadProps {
  title?: string;
}

const Head: FC<HeadProps> = ({ title }) => {
  return (
    <div className='w-full bg-deepGray lg:h-64 h-40 relative overflow-hidden rounded-md'>
      <img src="https://res.cloudinary.com/dn60f1sgi/image/upload/v1700152209/Hotel%20Rooms/Ian_Schrager_and_John_Pawson_redefine_California_luxury_at_West_Hollywood_Edition_Hotel_vfj5z7.jpg" alt="aboutUs" className='w-full h-full object-cover' />
      <div className='absolute lg:top-24 top-16 w-full flex-colo '>
        <h1 className='text-2xl lg:text-h1 font-black text-tertiary-dark text-center'>
          {title && title}
        </h1>
      </div>
    </div>
  );
};
export default Head;