import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { CursorArrowRaysIcon } from '@heroicons/react/24/outline';

export interface ZommInterface {
  src: string;
  alt?: string;
  width?: string;
}

export const ZoomableImage: React.FC<ZommInterface> = ({ src, alt, width }) => (
  <Zoom>
    <img
      alt={alt ? alt : 'no image found'}
      src={src}
      width={width ? width : '500'}
    />
    <p className=" pointer-events-none rounded-t-lg rounded-l-lg bg-orange-500 p-1 text-xs text-slate-100 absolute bottom-10 right-0 text-center transform-cpu">
      Ampliar
      <CursorArrowRaysIcon className="h-6"></CursorArrowRaysIcon>
    </p>
  </Zoom>
);
