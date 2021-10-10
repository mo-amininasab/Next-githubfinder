import React, { Fragment } from 'react';
import Spinner from '../../components/layout/spinner';

const UserDetails = () => {
  return <div>Hello From User Details</div>;
};

export default UserDetails;

export async function getServerSideProps({ params }) {
  console.log(params);

  return {
    props: {
      data: 2
    }
  }
}
