import { lazy } from 'react';
import { esliderData } from '@/assets/js/data';
import PageTitle from '@/components/PageTitle/PageTitle';
import Eslider from '@/components/Eslider/Eslider';
//@ts-ignore
// const Eslider = lazy(() => import('@/components/Eslider/Eslider.tsx'));

interface EsliderViewProps {
  data: {
    id: number;
    image: string;
    text: string;
  }[];
};

export default function EsliderView({ data }: EsliderViewProps) {
  return (
    <section>
      <div className="mb-12">
        <PageTitle title="EasySlider" />
      </div>
      <div>
        <Eslider data={esliderData} />
      </div>
    </section>
  );
}
