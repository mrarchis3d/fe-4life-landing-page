export type Product = {
  code: string;
  title: string;
  image: string;
  description: string;
  price: string;
  prevPrice?: string;
  saving?: string;
  url: string;
};

export enum productCodes {
  RIOVIDA = 'RIOVIDA',
  TFPLUS = 'TFPLUS',
  TFBCV = 'TFBCV',
  RENUVO = 'RENUVO',
  BOOST = 'BOOST',
  COLLAGEN = 'COLLAGEN',
  FIBRE = 'FIBRE',
  PAQ_INICIO_ACELERADO = 'PAQ_INICIO_ACELERADO',
  PAQ_CUIDADO_BIENESTAR = 'PAQ_CUIDADO_BIENESTAR',
}

const productsData: Product[] = [
  {
    code: productCodes.TFPLUS,
    title: '4Life® Transfer Factor Plus™ Tri-Factor® Formula',
    image: 'tf_plus.png',
    description: `La fórmula exclusiva 4Life Transfer Factor Plus brinda el máximo nivel de 
        nuestros ingredientes patentados. 
        Una ingesta adecuada de Zinc ayuda a fortalecer las defensas del organismo, 
        4Life Transfer Factor Plus aporta <strong>22% del VDR de zinc por cápsula.</strong>`,
    price: '$204.500',
    prevPrice: '$272.000',
    url: '',
  },
  {
    code: productCodes.TFBCV,
    title: '4Life Transfer Factor® BCV+',
    image: 'tf_bcv.png',
    description: `Con el respaldo nutricional de 4Life® y las bondades de la Vitamina A, la Vitamina C, 
        la Vitamina E, Niacina, Vitamina B6, Vitamina B12, Potasio, Zinc, el Ácido Fólico, Magnesio, selenio, 
        cobre y nutrientes de fuente vegetal. El producto Transfer Factor BCV+ contiene 2.24 mg de tiamina. <strong>La Tiamina (Vitamina B1) 
        puede contribuir a la salud del corazón.</strong>`,
    price: '$202.200',
    prevPrice: '$268.900',
    url: '',
  },
  {
    code: productCodes.RENUVO,
    title: '4Life Transfer Factor Renuvo®',
    image: 'tf_renuvo.png',
    description: `4Life Transfer Factor Renuvo contiene la exclusiva fórmula trifactor, vitaminas 
        y minerales como Zinc, Vitamina D3, así como otros nutrientes de origen natural que contribuyen a  fortalecer el sistema inmune.  
        Contiene <strong>30% del VDR de vitamina D3</strong>  por porción además de 
        7,4 mg de zinc equivalente a <strong>49% del VDR de zinc</strong> por porción.`,
    price: '$185.700',
    prevPrice: '$247.000',
    url: '',
  },
  {
    code: productCodes.BOOST,
    title: '4LIFE TF-BOOST',
    image: 'tf_boost.jpg',
    description: `Este producto, exclusivo de 4Life, contiene vitamina C, D, B2 y zinc. 
        Ingredientes que hacen ser a 4Life TF-Boost un gran alimento. Prueba su delicioso sabor 
        y disfruta de todos sus beneficios. Contiene: <strong>Excelente fuente de vitamina C, D, B2 y zinc.
        Además de 1000 mg de la mezcla Transfer Factor</strong>`,
    price: '$80.000',
    prevPrice: '$106.400',
    url: '',
  },
  {
    code: productCodes.COLLAGEN,
    title: '4Life Transfer Factor Collagen',
    image: 'tf_collagen.png',
    description: `Es una deliciosa y refrescante bebida que contiene colágeno y péptidos de 
        colágeno obtenidos a partir de fuentes naturales. Además de ser una formula exclusiva de 4Life;
        es una bebida rica en vitamina A y vitamina C. Contine vitamina E, así como colores y sabores
        naturales. <strong>Excelente fuente de vitamina A y C. Buena fuente de vitamina E.</strong>`,
    price: '$145.900',
    prevPrice: '$194.000',
    url: '',
  },
  {
    code: productCodes.FIBRE,
    title: 'Fibre System',
    image: 'tf_fiber.png',
    description: `Fibre System es una mezcla nutricional y herbal, muy útil para el bienestar del 
        organismo. Combina los beneficios nutricionales del psyllium, cáscara sagrada, nuez negra, genciana,
        arándano, ciruela pasa, papaya y piña, entre otros. 
        <strong> Contiene 25 ingredientes herbales que benefician a tu organismo. </strong>`,
    price: '$145.900',
    prevPrice: '$194.000',
    url: '',
  },
  {
    code: productCodes.PAQ_INICIO_ACELERADO,
    title: 'Paquete de Inicio Acelerado Fundamental',
    image: 'paq_inicioacelerado.jpg',
    description: `Combina los productos estrella de 4Life que son ideales para tu bienestar general. 
          <strong>¡Adquiere ya tu paquete y maximiza tus ganancias!</strong> Aprovecha esta gran oportunidad que solo 4Life te da: <br/>
          5 - 4Life® Transfer Factor Plus™ Tri-Factor® Formula <br/>
          5 - 4Life Transfer Factor RioVida® Tri-Factor® Formula<br/>
          5 - 4Life Transfer Factor® Tri-Factor® Formula<br/>
          1 - Maletín 4Life - Imagen de referencia `,
    price: '$1.820.000',
    saving: '$607.000',
    url: '',
  },
  {
    code: productCodes.PAQ_CUIDADO_BIENESTAR,
    title: 'Cuidado y Bienestar 4Life',
    image: 'cuidadobienestar.png',
    description: `En 4Life, nos interesa tu bienestar, y nos complace presentarte este excepcional paquete que reúne productos premium. 
        Obtén el tuyo ahora y experimenta todos los beneficios. ¡Cuida de tu bienestar con 4Life! Contiene: <br/>
        1 - 4Life® Transfer Factor Plus™ Tri-Factor® Formula<br/>
        2 - 4Life Transfer Factor RioVida® Tri-Factor® Formula<br/>
        1 - 4Life Transfer Factor Collagen<br/>
        1 - 4Life Transfer Factor® Tri-Factor® Formula RioVida STIX™<br/>
        2 - 4Life TF-Boost`,
    price: '$747.000',
    saving: '$246.500',
    url: '',
  },
  {
    code: productCodes.RIOVIDA,
    title: '4Life Transfer Factor RioVida® Tri-Factor® Formula',
    image: 'riovida.jpg',
    description: `4Life Transfer Factor RioVida Tri-Factor Formula, 
    contiene ademas concentrado de jugo de granada, mora azul, manzana, 
    uva y un bajo contenido de proteínas extraídas del suero de leche 
    y yema de huevo, que lo convierten en una bebida con valor nutricional, 
    con un delicioso sabor a frutas. <strong> Contiene 4Life Transfer Factor. </strong>`,
    price: '$116.100',
    saving: '$38.300',
    url: '',
  },
];

export const getProducts = (): Product[] => productsData;

export const getFeaturedProducts = (featuredValues?: string[]): Product[] => {
  const sortedProducts = productsData.sort((a) => {
    const codeA = a.code.toUpperCase();
    if (codeA.startsWith('PAQ_')) {
      return -1;
    } else {
      return 0;
    }
  });
  if (featuredValues !== undefined && featuredValues!.length > 0) {
    const sortedFeatures = sortedProducts.sort((a) => {
      const codeA = a.code.toUpperCase();
      if (featuredValues.find((x) => x.toUpperCase() == codeA)) {
        return -1;
      } else {
        return 0;
      }
    });
    return sortedFeatures;
  }
  return sortedProducts;
};

export const findByCode = function (code: string): Product | null {
  return productsData.find((x) => x.code === code.toUpperCase())!;
};

export const PanelProTFText = `Pro-TF es una proteína de suero de leche y huevo de alto rendimiento, sometida 
        a pruebas independientes y universitarias y diseñada para respaldar tu transformación corporal—sin 
        importar cuál sea tu meta de acondicionamiento físico. `;

export const featuresPanelProTF = [
  'Promueve la musculatura magra y la capacidad del cuerpo para quemar grasa',
  'Proporciona 20 g de proteína por porción',
  'Respalda el control de peso en combinación con una dieta sana y ejercicio',
  'Incluye aminoácidos de cadena ramificada BCAA en una proporción de 2:1:1.',
  'Activa el sistema inmunitario en el transcurso de dos horas con 4Life Transfer Factor',
  'Cada gramo de la mezcla proteínica Pro-TF es superior en cuanto a quemar grasa y metabolizar los macronutrientes',
];
