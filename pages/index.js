import Counter from '../components/Counter';

function Home() {
  const counters = [{ title: 'Counter 1' }, { title: 'Counter 2' }, { title: 'Counter 3' }];
  // counters is the variable. Counter 1 and 2 is the string
  return (
    <>
      {counters.map((counter) => (
        <Counter key={counter.title} title={counter.title} />
      ))}
    </>
  );
}

export default Home;
