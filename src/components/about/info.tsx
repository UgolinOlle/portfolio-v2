import React from 'react';

import { Heading } from '../ui/headers';
import { PicturesBento } from './pictures-bento';

export const AboutInfo: React.FC = (): JSX.Element => {
  // -- Render
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full max-w-2xl flex flex-col gap-3 items-start">
        <Heading variant="h2">About Me</Heading>
        <p className="text-lg text-gray-700/75 text-justify">
          I am a software engineer with a passion for full stack development. I
          am an open source contributor with a passion for giving back to the
          community. I am a full stack developer with a passion for building
          scalable solutions.
        </p>
      </div>
      <PicturesBento />
    </div>
  );
};
