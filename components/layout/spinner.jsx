import React, { Fragment } from 'react';
import Image from 'next/image';

const Spinner = () => {
  return (
    <Fragment>
      <div className="w-32 mx-auto">
        <Image
          src="/images/spinner.gif"
          alt="Loading..."
          layout="intrinsic"
          width={128}
          height={128}
        />
      </div>
    </Fragment>
  );
};

export default Spinner;
