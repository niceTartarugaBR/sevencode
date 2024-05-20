import style from "../hero/hero.module.css";
import Globo2 from "../../assets/img/IMAGE.png";
import ButtonLine from "../buttonLine/buttonLine";
import Button from "../button/button";

function Hero() {
  return (
    <section className={style.Hero}>
      <div classeName={style.HeroWrapper}>
        <div className={style.heroContent}>
          <h2>Poderoso para Devs. Rápido e fácil uso.</h2>
          <p>
            Leve nossa IDE para sua equipe. Ninesevem oferece suporte a
            experiências para usuários avançados, novos consumidores e todos os
            demais.
          </p>
          <div className={style.containerBtn}>
            <ButtonLine link="/">Sobre nós</ButtonLine>
            <Button link="/">Saiba mais</Button>
          </div>
        </div>
        <div>
          <img src={Globo2} alt="Globo imagem" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
