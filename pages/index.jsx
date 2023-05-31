import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

import { useRouter } from 'next/router';
import { useState } from 'react';

const App = () => {
  const [userName, setUserName] = useState('');
  return (
    <>
      <div>
        <label>
          userName :
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>

        <p> {userName} 깃허브 검색 하기</p>
        <Link href={`/users/${userName}`}>검색하기</Link>
      </div>
    </>
  );
};

export default App;
