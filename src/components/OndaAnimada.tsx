import { motion } from "framer-motion";

const ONDA_SUPERIOR =
  "M-0.372581 67.8176L45.4791 68.1776C91.3308 68.3576 183.034 69.0776 274.311 77.1776C365.801 85.2776 456.651 100.758 548.141 89.0576C639.418 77.3576 731.121 38.4776 822.398 39.5576C913.888 40.8176 1004.74 82.2176 1096.23 93.5576C1187.51 105.078 1279.21 86.3576 1370.49 80.4176C1461.98 74.4776 1552.83 80.9576 1644.32 89.7776C1735.59 98.4176 1827.3 109.218 1873.15 114.618L1919 120.018V0.0175781H1873.15C1827.3 0.0175781 1735.59 0.0175781 1644.32 0.0175781C1552.83 0.0175781 1461.98 0.0175781 1370.49 0.0175781C1279.21 0.0175781 1187.51 0.0175781 1096.23 0.0175781C1004.74 0.0175781 913.888 0.0175781 822.398 0.0175781C731.121 0.0175781 639.418 0.0175781 548.141 0.0175781C456.651 0.0175781 365.801 0.0175781 274.311 0.0175781C183.034 0.0175781 91.3308 0.0175781 45.4791 0.0175781H-0.372581V67.8176Z";

const ONDA_INFERIOR =
  "M1919 52.2176L1873.15 51.8576C1827.3 51.6776 1735.59 50.9576 1644.32 42.8576C1552.83 34.7576 1461.98 19.2776 1370.49 30.9776C1279.21 42.6776 1187.51 81.5576 1096.23 80.4776C1004.74 79.2176 913.888 37.8176 822.398 26.4776C731.121 14.9576 639.418 33.6776 548.141 39.6176C456.651 45.5576 365.801 39.0776 274.311 30.2576C183.034 21.6176 91.3308 10.8176 45.4791 5.4176L-0.372581 0.0175781V120.018H45.4791C91.3308 120.018 183.034 120.018 274.311 120.018C365.801 120.018 456.651 120.018 548.141 120.018C639.418 120.018 731.121 120.018 822.398 120.018C913.888 120.018 1004.74 120.018 1096.23 120.018C1187.51 120.018 1279.21 120.018 1370.49 120.018C1461.98 120.018 1552.83 120.018 1644.32 120.018C1735.59 120.018 1827.3 120.018 1873.15 120.018H1919V52.2176Z";

/** Onda de entrada — curva sem paredes verticais nas laterais (Evento → Galeria) */
const ONDA_ENTRADA =
  "M0 121 H1920 C1920 55 1780 32 1600 52 C1420 72 1280 22 1100 48 C920 74 780 28 600 50 C420 72 260 25 120 52 C60 68 20 42 0 121 Z";

interface OndaAnimadaProps {
  tipo: "superior" | "inferior" | "entrada";
  fill?: string;
  corAcima?: string;
}

const OndaSuperior = ({ fill = "#FF8F5A" }: { fill?: string }) => {
  const floatY = ["0%", "-2%", "0%"];

  return (
    <div className="w-full overflow-hidden leading-[0] relative h-[80px] sm:h-[96px] md:h-[110px] -mt-px">
      <motion.div
        className="absolute inset-x-0 w-full"
        style={{ height: "130%", top: "-15%" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        animate={{ y: floatY }}
        transition={{
          opacity: { duration: 0.6 },
          y: { repeat: Infinity, duration: 5, ease: "easeInOut" },
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1919 121"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          className="block w-full h-full"
        >
          <path d={ONDA_SUPERIOR} fill={fill} />
        </svg>
      </motion.div>
    </div>
  );
};

const OndaInferior = ({
  fill = "#FF8F5A",
  corAcima,
}: {
  fill?: string;
  corAcima?: string;
}) => {
  const acima = corAcima ?? fill;

  return (
    <div
      className="relative z-[1] w-full overflow-hidden leading-[0] block"
      style={{ backgroundColor: fill }}
      aria-hidden="true"
    >
      <div style={{ backgroundColor: acima }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1919 121"
          preserveAspectRatio="none"
          className="block w-full h-[72px] sm:h-[88px] md:h-[104px]"
        >
          <path d={ONDA_INFERIOR} fill={fill} />
        </svg>
      </div>
    </div>
  );
};

const OndaEntrada = ({
  fill = "#FF8F5A",
  corAcima,
}: {
  fill?: string;
  corAcima?: string;
}) => {
  const acima = corAcima ?? fill;

  return (
    <div
      className="relative z-[1] w-full overflow-hidden leading-[0] block"
      style={{ backgroundColor: fill }}
      aria-hidden="true"
    >
      <div style={{ backgroundColor: acima }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 121"
          preserveAspectRatio="none"
          className="block w-full h-[72px] sm:h-[88px] md:h-[104px]"
        >
          <path d={ONDA_ENTRADA} fill={fill} />
        </svg>
      </div>
    </div>
  );
};

const OndaAnimada = ({
  tipo,
  fill = "#FF8F5A",
  corAcima,
}: OndaAnimadaProps) => {
  if (tipo === "entrada") {
    return <OndaEntrada fill={fill} corAcima={corAcima} />;
  }
  if (tipo === "inferior") {
    return <OndaInferior fill={fill} corAcima={corAcima} />;
  }
  return <OndaSuperior fill={fill} />;
};

export default OndaAnimada;
