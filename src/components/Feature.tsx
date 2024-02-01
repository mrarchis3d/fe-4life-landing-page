import {
  CheckIcon
} from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Mejora el sistema inmune: ',
    description:
      '4Life investiga y desarrolla productos que educan diferentes tipos de células del sistema inmunológico, incluyendo las células asesinas naturales (NK), las células B, las células T y los macrófagos.',
    icon: CheckIcon,
  },
  {
    name: 'Somos pioneros en la Ciencia Transferceutical: ',
    description:
      '4Life ha sido pionero en la Ciencia Transferceutical™ y se dedica a seguir aprendiendo más acerca de los factores de transferencia.'
      +'Las instalaciones de fabricación de 4Life están certificadas por la National Sanitation Foundation (NSF)',
    icon: CheckIcon,
  },
  {
    name: 'La Mejor forma de mantenerte saludable',
    description:
      'La mejor defensa es una buena ofensiva, por lo que 4Life Transfer Factor ayuda a mantener un cuerpo saludable.'
      +' Cuando tu sistema inmunológico funciona en su punto máximo, todo tu cuerpo se beneficia, incluyendo tus niveles de energía',
    icon: CheckIcon,
  },
];

export default function Feature() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">
                conoce nuestros
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Beneficios
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              4Life utiliza procesos patentados para extraer factores de transferencia de calostro de vaca y yemas de huevo de pollo, 
              para luego secarlos y encapsularlos para su uso en productos de 4Life.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute top-1 left-1 h-5 w-5 text-blue-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="products.png"
            alt="Products"
            className="  rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
