import React from 'react';
import { RiCustomerService2Full, RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
          <p className='py-4'>
           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime debitis magni animi totam tenetur placeat ipsum atque quidem laudantium aspernatur deserunt, fugiat impedit delectus rem, est voluptates quisquam quia quam? Dicta maxime sit corrupti reprehenderit blanditiis eaque, laboriosam porro ipsum enim molestiae commodi. Esse nam consequatur aliquid quasi quia ex dolor, maxime error ducimus similique aut numquam magni maiores ea?
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur.</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
                <h3 className='py-2'>LEADING SERVICE</h3>
                <p className='py-1'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
          <div className='border text-center rounded-md'>
              <p className='pt-2'>GET AN ADDITIONAL 10% OFF</p>
              <p className='py-4'>FEW HOURS LEFT</p>
              <p className='bg-gray-800 text-gray-200 py-2 rounded-md'>BOOK NOW</p>
          </div>
          <form className='w-full'>
              <div className='flex flex-col my-2'>
                  <label>Destination</label>
                  <select className='border rounded-md p-2'>
                      <option></option>
                      <option>Goa</option>
                      <option>Manali</option>
                      <option>Ladakh</option>
                      <option>Kashmir</option>
                  </select>
              </div>
              <div className='flex flex-col my-4'>
                  <label>Check-In</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
              <div className='flex flex-col my-2'>
                  <label>Check-Out</label>
                  <input className='border rounded-md p-2' type="date" />
              </div>
                <button className='w-full my-4'>Confirm</button>
          </form>
      </div>
    </div>
  );
};

export default Search;