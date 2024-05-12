import { Fragment } from 'react';

import { Container } from '@/components/common/container';
import { Head } from '@/components/features/head';
import { useText } from '@/hooks/useText';

const stacks = [
  'Javascript',
  'Typescript',
  'Go',
  'MySQL',
  'PostgreSQL',
  'Docker',
  'Visual Studio Code',
  'React.js',
  'Next.js',
  'Nest.js',
];

export default function HomePage() {
  const { text } = useText(stacks, 1000);

  return (
    <Fragment>
      <div className="select-none bg-black">
        <Head />
        <Container className="flex h-screen text-start text-white">
          <div className="m-auto rounded-lg border p-5 shadow-md shadow-blue-500">
            <h1 className="text-4xl font-semibold lg:text-5xl">
              Tannatee Juchan
            </h1>
            <p className="text-md lg:text-lg">
              Contact for work ➡️ ju.tannatee2543@gmail.com
            </p>
            <div className="my-2 h-0.5 bg-blue-500"></div>

            <p className="text-start">{text}</p>
          </div>
        </Container>
      </div>
    </Fragment>
  );
}
