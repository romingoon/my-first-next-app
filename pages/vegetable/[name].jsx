import Link from 'next/link';
import { useRouter } from 'next/router';

const name = () => {
  const { query } = useRouter();

  return (
    <div>
      <h2>Hello!! {query.name}</h2>
      <Link href="/">Go to Main page</Link>
    </div>
  );
};

export default name;
