import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';

export default function MetodosPago() {
  return (
    <div
      className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32"
      id="newsletter"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-5">
              Métodos de pago
            </h2>
            <p className="text-md text-white">Usamos todos los medios de pagos, incluyendo: pagos por tarjeta de crédito, Bancolombia, Efecty, PSE y transferencias bancarias. 
            <br/> ¿Tienes dudas? <br/> Comunícate con Nosotros a las lineas: <br/> Whatsapp: +57 (315) 252 5423
            <br/>Facebook: http://facebook/4lifeshopbogota</p>
          </div>
          <div className=" bg-white/75 md:p-10 p-4 md:rounded-full rounded-lg items-center grid md:grid-cols-6 grid-cols-3  gap-2">
              <div className="flex flex-col items-start">
                  <img src="efecty.png"/>
              </div>
              <div className="flex flex-col items-start">
                  <img src="sured.png"/>
              </div>
              <div className="flex flex-col items-start">
                  <img src="pse.png"/>
              </div>
              <div className="flex flex-col items-start">
                  <img src="bancolombia.png"/>
              </div>
              <div className="flex flex-col items-start">
                  <img src="mastercard.png"/>
              </div>
              <div className="flex flex-col items-start">
                  <img src="visa.png"/>
              </div>
            </div>
        </div>
      </div>
      <svg
        className="absolute top-0 left-1/2 -z-10 h-[42.375rem] -translate-x-1/2 blur-3xl xl:-top-6"
        viewBox="0 0 1155 678"
        fill="none"
      >
        <path
          fill="url(#09dbde42-e95c-4b47-a4d6-0c523c2fca9a)"
          fillOpacity=".8"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="09dbde42-e95c-4b47-a4d6-0c523c2fca9a"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1609DF" />
            <stop offset={1} stopColor="#80FDFF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
