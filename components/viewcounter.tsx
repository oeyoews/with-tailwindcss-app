import { FiEye } from 'react-icons/fi';

import { kv } from '@vercel/kv';

async function ViewCounter(params: { slug: string }) {
  const { slug } = params;
  if (!slug) {
    console.log(`${slug} not found`);
    return;
  }
  const views = await kv.incr(slug);

  return (
    <>
      <FiEye className="inline ml-2 mr-1" />{' '}
      {Intl.NumberFormat('en-us').format(views)} views
    </>
  );
}

export default ViewCounter;
