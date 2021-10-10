import React, { Fragment } from 'react';
import Link from 'next/link';
import axios from 'axios';

const UserDetails = ({ userDetails }) => {
  const {
    hireable,
    avatar_url,
    name,
    location,
    bio,
    html_url,
    login,
    company,
    blog,
    followers,
    following,
    public_repos,
    public_gists,
  } = userDetails;
  return (
    <Fragment>
      <div className="flex flex-col space-y-2">
        <Fragment>
          <section className="flex items-center space-x-3 mb-2">
            <Link href="/">
              <a className="bg-light border border-gay-500 px-3 py-1 rounded-sm">
                Back To Search
              </a>
            </Link>
            <h3>
              Hireable:{' '}
              {hireable ? (
                <span className="fas fa-check text-success"></span>
              ) : (
                <span className="fas fa-times-circle text-primary"></span>
              )}
            </h3>
          </section>
          <section className="flex border border-gray-400 bg-light rounded-sm px-8 py-4">
            <div className="flex flex-col justify-center items-center space-y-3 w-1/2">
              <img
                src={avatar_url}
                alt="Avatar"
                className="w-40 rounded-full"
              />
              <h1 className="text-3xl font-bold">{name}</h1>
              <h3>Location: {location}</h3>
            </div>
            <div className="flex flex-col w-1/2 items-start justify-center">
              {bio && (
                <Fragment>
                  <h2 className="text-xl font-semibold">Bio</h2>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a
                href={html_url}
                target="_blank"
                className="bg-dark text-white py-2 px-4 my-2 rounded-sm"
              >
                Visit Github Profile
              </a>
              <ul>
                {login && (
                  <li>
                    <span className="font-bold">Username</span>: {login}
                  </li>
                )}
                {company && (
                  <li>
                    <span className="font-bold">Company</span>: {company}
                  </li>
                )}
                {blog && (
                  <li>
                    <span className="font-bold">Website</span>: {blog}
                  </li>
                )}
              </ul>
            </div>
          </section>

          <section className="flex border space-x-3 text-xs justify-center items-center border-gray-400 bg-light rounded-sm px-8 py-4">
            <div className="bg-danger text-white px-2 py-1 rounded-md">
              Followers: {followers}
            </div>
            <div className="bg-success text-white px-2 py-1 rounded-md">
              Following: {following}
            </div>
            <div className="bg-white text-black px-2 border border-gray-400 py-1 rounded-md">
              Public Repos: {public_repos}
            </div>
            <div className="bg-dark text-white px-2 py-1 rounded-md">
              Public Gists: {public_gists}
            </div>
          </section>
        </Fragment>
      </div>
    </Fragment>
  );
};

export default UserDetails;

export async function getServerSideProps({ params }) {
  const url = `https://api.github.com/users/${params.login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
  const { data } = await axios.get(url);

  return {
    props: {
      userDetails: data,
    },
  };
}
