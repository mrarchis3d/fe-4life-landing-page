import { getXataClient } from '@/xata';

const xata = getXataClient();

const records = await xata.db.products
  .select([
    'xata_id',
    'code',
    'image',
    'long_description',
    'order',
    'prev_price',
    'price',
    'saving',
    'short_description',
    'title',
    'url',
  ])
  .getAll();

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

export const getProducts = () => records;

export const getFeaturedProducts = (featuredValues?: string[]) => {
  const sortedProducts = records.sort((a) => {
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

export const findByCode = function (code: string) {
  return records.find((x) => x.code === code.toUpperCase())!;
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
