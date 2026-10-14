import Image from 'next/image';
import type { Ref } from 'react';
import Heading from '@/components/Heading/Heading';
import Button from '@/components/Button/Button';

interface SectionHighlightProps {
  index: number;
  elementRef: Ref<HTMLElement> | undefined;
  data: {
    id: number | string;
    img: string;
    title?: {
      variant?: string;
      text?: string;
    };
    text: string;
    button?: {
      text?: string;
      href: string;
      target: boolean;
    };
  };
  stacked?: boolean;
}

export default function SectionHighlight({
  index,
  data,
  elementRef,
  stacked,
}: SectionHighlightProps) {
  const alternatingSides =
    index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row';

  const isStacked = stacked ? 'mb-0' : 'mb-14 shadow-2xl rounded-lg';

  const boxRadiused = () => {
    if (stacked) {
      return '';
    }
    return index % 2 == 0 ? 'md:rounded-r-lg' : 'md:rounded-l-lg';
  };

  const imageRadiused = () => {
    if (stacked) {
      return '';
    }
    return index % 2 !== 0
      ? 'rounded-t-lg md:rounded-t-none md:rounded-r-lg'
      : 'rounded-t-lg md:rounded-t-none md:rounded-l-lg';
  };

  return (
    <section
      key={data.id}
      ref={elementRef}
      className={`flex flex-col ${alternatingSides} ${isStacked}`}
    >
      <div className="w-full md:w-1/2">
        <Image
          className={`object-cover aspect-3/2 md:aspect-square lg:aspect-3/2 ${imageRadiused()}`}
          loading={`${index <= 1 ? 'eager' : 'lazy'}`}
          src={data.img}
          alt={data?.title?.text ?? ''}
          width={800}
          height={600}
        />
      </div>
      <div
        className={`flex flex-col justify-center w-full md:w-1/2 space-y-3 p-9 bg-neutral-100 dark:bg-neutral-900 transition duration-500 ease-in-out ${boxRadiused()}`}
      >
        {data?.title?.text && (
          <Heading variant={data?.title?.variant}>{data?.title?.text}</Heading>
        )}
        <p>{data.text}</p>
        {data.button && (
          <Button
            href={data.button.href}
            target={data.button.target ? true : false}
          >
            {data.button.text}
          </Button>
        )}
      </div>
    </section>
  );
}
