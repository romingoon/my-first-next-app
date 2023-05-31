import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const router = useRouter();

  return (
    <div>
      <button type="button" onClick={() => router.push('/tomato')}>
        Go to Tomato page
      </button>
      <p>이름</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: '12px' }}
      />
      <button type="button" onClick={() => router.push(`/vegetable/${name}`)}>
        {name} 페이지로 이동
      </button>
    </div>
  );
};

export default App;
