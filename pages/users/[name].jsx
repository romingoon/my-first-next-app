import fetch from 'isomorphic-unfetch';

const name = ({ user }) => {
  const username = user && user.name;
  return (
    <div>
      {username}
      <br />
      {user.bio}
      <br />
      {user.location}
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { name } = query;

  try {
    const res = await fetch(`https://api.github.com/users/${name}`);

    if (res.status === 200) {
      const user = await res.json();
      console.log(user);
      return { props: { user } };
    }
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};

export default name;
