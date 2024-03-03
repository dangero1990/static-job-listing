import { useContext } from 'react';
import { Context } from '../App';

function FilterButton({ props }) {
  const context = useContext(Context);

  function filterData() {
    if (!context.userFilter.includes(props)) {
      context.userSetFilter([...context.userFilter, props]);
    } else {
      context.userSetFilter(context.userFilter.filter((item) => item !== props));
    }
  }

  return (
    <li>
      <button
        onClick={filterData}
        value={props}
        className={context.userFilter.includes(props) ? 'tool px-4 py-2 rounded-lg font-bold active' : 'tool px-4 py-2 rounded-lg font-bold'}
      >
        {props}
      </button>
    </li>
  );
}

function Card({ newJob, featured, company, logo, position, postedAt, contract, location, role, level, languages, tools, id }) {
  return (
    <article
      id={id}
      className='grid grid-cols-[auto_2fr_1fr] p-8 card rounded-xl'
    >
      <img
        className=' ml-4 mr-4'
        src={logo}
        alt={company}
      />
      <div className='mt-auto mb-auto'>
        <h3 className='company_name font-bold inline mr-4'>{company}</h3>
        {newJob ? <span className='new mr-4 pr-2 pl-2 font-bold rounded-xl'>NEW!</span> : null}
        {featured ? <span className='featured mr-4 pr-2 pl-2 font-bold rounded-xl'>FEATURED</span> : null}
        <h2 className='font-bold'>{position}</h2>
        <ul className='flex gap-8 list-disc posting'>
          <li>{postedAt}</li>
          <li>{contract}</li>
          <li>{location}</li>
        </ul>
      </div>
      <ul className='flex gap-2 mt-auto mb-auto justify-self-end'>
        <FilterButton props={role} />
        <FilterButton props={level} />
        {languages.map((language) => (
          <FilterButton
            key={language}
            props={language}
          />
        ))}
        {tools.map((tool) => (
          <FilterButton
            key={tool}
            props={tool}
          />
        ))}
      </ul>
    </article>
  );
}

function Main() {
  const context = useContext(Context);
  const filteredJobs = context.userFilter.length === 0 ? context.userJobs.data : context.userJobs.data.filter((job) => context.userFilter.every((filter) => Object.values(job).some((item) => (Array.isArray(item) ? item.includes(filter) : item === filter))));

  return (
    <section className='m-auto w-[80%] max-w-[80%] grid gap-4'>
      {filteredJobs.map((job) => (
        <Card
          id={job.id}
          key={job.id}
          company={job.company}
          logo={job.logo}
          newJob={job.new}
          featured={job.featured}
          position={job.position}
          role={job.role}
          level={job.level}
          postedAt={job.postedAt}
          contract={job.contract}
          location={job.location}
          languages={job.languages}
          tools={job.tools}
        />
      ))}
    </section>
  );
}

export default Main;
