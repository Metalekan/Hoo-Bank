import { card } from "../assets";
import styles, { layout } from "../../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Find a better card deal <br className="sm:block hidden" /> in a few
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          eligendi, dolorum blanditiis, alias, recusandae optio nemo laudantium
          officia architecto dignissimos esse est laborum maiores. Quibusdam
          recusandae rerum doloribus iusto omnis.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="bill" className="w-[100%] h-[100%] relative z-[5] object-cover" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>
    </section>
  );
};

export default CardDeal;
