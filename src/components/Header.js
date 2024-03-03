import { useContext } from 'react';
import { Context } from '../App';

function Filters({ props }) {
  const jobs = useContext(Context);

  return (
    <li>
      <button
        className='filter inline pl-2 pt-2 pb-2 indent-1 rounded-lg relative'
        onClick={() => jobs.userSetFilter(jobs.userFilter.filter((prop) => props !== prop))}
      >
        <span className='font-bold mr-2'>{props}</span>
      </button>
    </li>
  );
}

function Header() {
  const jobs = useContext(Context);

  return (
    <>
      <img
        src='./images/bgHeaderDesktop.svg'
        alt='background image'
        className='-mb-16 w-[100%] bg-img'
        aria-hidden='true'
      />
      {jobs.userFilter.length === 0 ? null : (
        <section className='filters flex justify-between w-[80%] max-w-[80%] mx-auto p-8 rounded-xl'>
          <ul className='flex gap-4'>
            {jobs.userFilter.map((filter) => (
              <Filters
                key={filter}
                props={filter}
              />
            ))}
          </ul>
          <span
            className='clear my-auto font-bold'
            onClick={() => jobs.userSetFilter([])}
          >
            Clear
          </span>
        </section>
      )}
    </>
  );
}

export default Header;
