// app/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import './Page.css';

const Page = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/aboutme');
  };

  return (
    <div className="centered-container">
      <h1>Hey, I'm Luke!</h1>
      <button className="action-button" onClick={handleClick}>
        Go to About Me
      </button>
    </div>
  );
};

export default Page;
