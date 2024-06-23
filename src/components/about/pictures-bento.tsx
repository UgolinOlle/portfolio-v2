import Image from 'next/image';

/**
 * @function PicturesBento
 * @description A component that displays a list of pictures in a bento style.
 * @returns {React.ReactElement}
 * @example <PicturesBento />
 */
export const PicturesBento: React.FC = (): React.ReactElement => {
  // -- Render
  return (
    <div className="w-full h-full flex flex-wrap justify-between gap-5">
      <Image
        src="/images/coding-1.jpg"
        alt="Picture 1"
        width={300}
        height={300}
        className="rounded-lg shadow-xl"
      />
      <Image
        src="/images/coding-1.jpg"
        alt="Picture 1"
        width={300}
        height={300}
        className="rounded-lg shadow-xl"
      />
      <Image
        src="/images/coding-1.jpg"
        alt="Picture 1"
        width={300}
        height={300}
        className="rounded-lg shadow-xl"
      />
      <Image
        src="/images/coding-1.jpg"
        alt="Picture 1"
        width={300}
        height={300}
        className="rounded-lg shadow-xl"
      />
    </div>
  );
};
