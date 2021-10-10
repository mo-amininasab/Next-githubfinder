import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';

const Users = () => {
  const { data, loading, error } = useSelector((state) => state.matchedUsers);

  console.log(data.items ? true : false);

  return (
    <div className="grid grid-cols-3 mt-6 gap-4">
      {data.items &&
        data.items.map((user) => (
          <div
            key={user.id}
            className="flex flex-col justify-center items-center space-y-2 text-center bg-gray-200 px-8 py-4 rounded-sm border border-gray-400"
          >
            <Image
              src={user.avatar_url}
              alt="Avatar"
              width={64}
              height={64}
              className="w-32 rounded-full"
            />
            <h1 className="font-bold text-lg">{user.login}</h1>
            <Link href={`/user/${user.login}`}>
              <a className="bg-gray-900 py-1 px-2 text-sm text-white rounded-sm hover:opacity-90">
                More
              </a>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Users;
