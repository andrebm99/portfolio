import "../css/home.css";
import imgPerfil from "../assets/perfil.jpg";
import Snowfall from "react-snowfall";

export default function Home() {
  return (
    <main>
      <Snowfall color="white" />

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
        <div
          className="w-full md:w-1/2 p-4 items-center justify-center flex"
          id="aboutme"
        >
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
        <div
          className="w-full md:w-1/2 p-4 items-center justify-center flex"
          id="aboutme"
        >
          <div className="about">
            <img src={imgPerfil} alt="André Bayona" />
          </div>
        </div>
      </section>
      <section className="caja-skills">
        <div className="titulo-skills">
          <h3>Skills</h3>
        </div>
        <div className="seccion-skills">
          <div className="shortcut">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s"
              alt="JavaScript"
            />
            JavaScript
          </div>
          <div className="shortcut">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
              alt="TypeScript"
            />
            TypeScript
          </div>
          <div className="shortcut">
            <img
              src="https://docs.nestjs.com/assets/logo-small-gradient.svg"
              alt="NestJS"
            />
            NestJS
          </div>
          <div className="shortcut">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Angular_gradient_logo.png/1200px-Angular_gradient_logo.png"
              alt="Angular"
            />
            Angular
          </div>
          <div className="shortcut">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
              alt="React"
            />
            React
          </div>

          <div className="shortcut">
            <img
              src="https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png"
              alt="Java"
            />
            Java
          </div>
          <div className="shortcut">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/1200px-Spring_Boot.svg.png"
              alt="Spring Boot"
            />
            Spring Boot
          </div>
          <div className="shortcut">
            <img
              src="https://images.icon-icons.com/2415/PNG/512/mysql_original_wordmark_logo_icon_146417.png"
              alt="JavaScript"
            />
            MySQL
          </div>
          <div className="shortcut">
            <img
              src="https://images.icon-icons.com/2415/PNG/512/postgresql_plain_wordmark_logo_icon_146390.png"
              alt="PostgreSQL"
            />
            PostgreSQL
          </div>
        </div>
      </section>
    </main>
  );
}
