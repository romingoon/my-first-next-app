import Link from 'next/link';

const Tomato = () => {
  return (
    <div>
      <h1>Tomato Page</h1>
      <h2>Link to Main page</h2>
      <Link href="/">Go to Main page</Link>
    </div>
  );
};

export default Tomato;
