import "../css/home.css";
import imgPerfil from "../assets/perfil.jpg"


export default function Home() {
  return (
    <main>
      
      <section className="caja">
        <div className="contenido">
          <p className="texto-ini">Hola, mi nombre es</p>
          <h2>André Bayona</h2>
          <div className="caja-presentacion">
            <p>
              <span>
                Soy estudiante de Ingeniería de Software con enfoque en
                desarrollo <br />
                Backend, con interés en buenas prácticas, arquitectura y
                rendimiento.
              </span>
            </p>
          </div>
          <div className="caja-redes">
            <div className="centrando-redes">
              <a href="https://github.com/andrebm99" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/andrebayona/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="caja flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4 items-center justify-center flex" id="aboutme">
          <div className="about">
            <h3 className="">Sobre mi</h3>
            <p>
              Hola, mi nombre es André Bayona y soy estudiante de Ingeniería de
              Software, con un fuerte interés en el desarrollo Backend y la
              construcción de soluciones eficientes y escalables. Desde 2024,
              desarrollo aplicaciones de escritorio y aplicaciones web, lo que
              me ha permitido fortalecer mis bases en programación, lógica y
              buenas prácticas de desarrollo. Durante este proceso, he trabajado
              con distintas tecnologías, enfocándome especialmente en el diseño
              de backend, arquitectura de aplicaciones y rendimiento. Soy un
              apasionado de la tecnología y el aprendizaje continuo. Disfruto
              enfrentar nuevos retos, mejorar mis habilidades técnicas y aplicar
              buenas prácticas para crear software mantenible, seguro y de
              calidad.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4 items-center justify-center flex" id="aboutme">
          <div className="about">
            <img src={imgPerfil} alt="André Bayona"/>
          </div>
        </div>
      </section>
    </main>
  );
}
