import "../css/home.css";

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
    </main>
  );
}
