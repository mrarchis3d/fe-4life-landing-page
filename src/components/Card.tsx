import type { Product } from '@/data/products';
import { SeeMore } from './SeeMore';

const Card: React.FC<Product> = ({
  title,
  image,
  price,
  prevPrice,
  description,
  url,
  saving,
}) => {
  return (
    <div className="link-card flex p-1 bg-white">
      <div className="p-4 text-center">
        <img className="m-auto rounded-2xl" src={image} alt={title} />
        <h1 className="md:text-md">
          <strong>{title}</strong>
        </h1>
        <SeeMore body={description} />
        <br />
        <br />
        <div className="block">
          <a href={url} className="inline-flex items-center">
            <div className="flex p-2 transition hover:ease-out duration-300 bg-red-600 hover:bg-red-500 rounded-md ">
              <div className="mr-1 m-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 fill-red-100"
                >
                  <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>
              </div>
              <div className="border-l-2 border-red-300 pl-2">
                {prevPrice ? (
                  <>
                    <p className="text-sm line-through leading-3 text-red-200">
                      {prevPrice}
                    </p>
                  </>
                ) : (
                  <></>
                )}
                {saving ? (
                  <>
                    <p className="text-sm font-semibold text-green-500 p-1 bg-slate-100 rounded-full shadow-md">
                      AHORRO: {saving}
                    </p>
                  </>
                ) : (
                  <></>
                )}

                <p className="md:text-md text-slate-100">
                  {saving ? <></> : <p className="text-sm"></p>}
                  {price}
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
