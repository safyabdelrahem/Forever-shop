import { assets } from '../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 my-10 mt-40 text-sm max-w-6xl mx-auto p-4">
      <div className="flex flex-col items-center">
        <img src={assets.logo} className='mb-5 w-32' alt="Logo" />
        <p className='text-gray-600 text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-600 text-center'>
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600 text-center'>
          <li>01145951738</li>
          <li>safynazabdelraheem@gmail.com</li>
        </ul>
      </div>
      <div className="col-span-full text-center mt-10">
        <hr className="border-gray-300 mb-4" />
        <p className='text-sm text-gray-600'>
          Copyright 2024 @forever.com - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
