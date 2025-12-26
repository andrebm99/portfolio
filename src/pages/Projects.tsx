import "../css/projects.css";
import portfolio_ini from "../assets/img/portfolio.png";
import img_administrador from "../assets/img/administrador.png"; 
import portafolio_actual from "../assets/img/portafolio_react_nest.png";
import nagova from "../assets/img/nagova.png";

export default function Projects() {
  return (
    <section className="contenedor">
      <div className="max-w-sm rounded overflow-hidden shadow-lg tarjetas">
        <div className="h-48 overflow-hidden rounded-t">
          <img
            src={portfolio_ini}
            alt="Projecto"
            className="w-full"
          />
        </div>

        <div className="px-6 py-4">
          <div className="font-bold mb-2">
            <h3 className="text-xl text-white">Portfolio</h3>
          </div>
          <p className="mb-2">
            Este fue mi primer proyecto web, desarrolado como proyecto académico
            para el curso de Taller de Programación Web. A través de este
            proyecto fortalecé mis bases en HTML, CSS y JavaScript,
            comprendiendo la estructura de una web, el estilizado de interfaces
            y la creación de scripts para dotar la interactividad de la
            aplicación.
          </p>
            <a
            href="https://github.com/andrebm99/portfolio_andrebm"
            target="_blank"
            type="button"
            rel="noopener noreferrer"
            className="inline-flex m-2 items-center bg-red-500 text-white px-4 py-2 rounded-md transition-transform duration-100 ease-out active:scale-[0.94]"
          >
            Repositorio
          </a>
          <a
            href="https://andrebm.vercel.app/"
            target="_blank"
            type="button"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-indigo-300 text-black px-4 py-2 rounded-md transition-transform duration-100 ease-out active:scale-[0.94]"
          >
            Deploy
          </a>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #HTML
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #CSS
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #JavaScript
          </span>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg tarjetas">
        <div className="h-48 overflow-hidden rounded-t">
          <img
            src="https://kinsta.com/wp-content/uploads/2022/06/nest-js-logo.png"
            alt="Projecto"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold mb-2">
            <h3 className="text-xl text-white">Reto Tecnico</h3>
          </div>
          <p className="mb-2">
            Este reto de programación me permitió identificar mis principales áreas de mejora al programar. Durante el desarrollo aprendí a documentar una API con Swagger, implementar autenticación con JWT y consumir una API externa. Para este reto, implementé dos arreglos paginados de 10 en 10: uno para almacenar las fusiones de dos Pokémon obtenidos desde la PokeAPI y otro para guardar datos ingresados por el usuario. 
          </p>
          <a
            href="https://github.com/andrebm99/RetoTecnicoDevLum.git"
            target="_blank"
            type="button"
            rel="noopener noreferrer" /* noopener: seguridad noreferrer: privacidad*/
            className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-md transition-transform duration-100 ease-out active:scale-[0.94]"
          >
            Repositorio
          </a>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #NestJS
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #TypeScript
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #JWT
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Swagger
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Node.JS
          </span>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg tarjetas">
        <div className="h-48 overflow-hidden rounded-t">
          <img
            src={portafolio_actual}
            alt="Projecto"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold mb-2">
            <h3 className="text-xl text-white">Portfolio Actual</h3>
          </div>
          <p className="mb-2">
            Mi portafolio está desarrollado con NestJS para el Backend y React para el Frontend. Utilicé Amazon DynamoDB como base de datos no relacional en la nube. 
            Para el despliegue de la API, implementé una arquitectura serverless usando AWS Lambda, API Gateway y S3. 
            Configuré correctamente CORS para garantizar una comunicación segura y eficiente entre el frontend y backend. 
          </p>
          <a
            href="https://github.com/andrebm99/portfolio"
            target="_blank"
            type="button"
            rel="noopener noreferrer" /* noopener: seguridad noreferrer: privacidad*/
            className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-md transition-transform duration-100 ease-out active:scale-[0.94]"
          >
            Repositorio
          </a>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #NestJS
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #TypeScript
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #React
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #AWS
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #DynamoDB
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Lambda
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #API Gateway
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #S3
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #JWT
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Swagger
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Node.JS
          </span>
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg tarjetas">
        <img
          src={img_administrador}
          alt="Projecto"
          rel="noopener noreferrer"
          className="w-full"
        />
        <div className="px-6 py-4">
          <div className="font-bold mb-2">
            <h3 className="text-xl text-white">Sistema de Hoteles</h3>
          </div>
          <p className="mb-2">
            En este proyecto del curso Integrador 1 estuve a cargo del módulo administrativo del sistema. El rol de administrador permite gestionar reservas, registrar habitaciones segun disponibilidad, crear roles para futuros colaboradores y subir URL de Power BI apra la visualización de las finanzas. El sistema está orientado a hoteles que se encuentran en etapa inicial. Además, para este proyecto utilicé un servicio ECS para la gestion de la base de datos MySQL.
          </p>
          <a
            href="https://github.com/andrebm99/sistema_hoteles_integrador"
            target="_blank"
            type="button"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-md transition-transform duration-100 ease-out active:scale-[0.94]"
          >
            Repositorio
          </a>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #HTML
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #CSS
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #JavaScript
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Spring Boot
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Java
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #MySQL
          </span>
        </div>
        
      </div>

      <div className="max-w-sm rounded overflow-hidden shadow-lg tarjetas">
        <div className="h-48 overflow-hidden rounded-t">
          <img
            src={nagova}
            alt="Projecto"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold mb-2">
            <h3 className="text-xl text-white">NaGova</h3>
          </div>
          <p className="mb-2">
            Este proyecto corresponde a una tienda de ropa que cuenta con una página de presentación, una sección de tienda y un apartado de contacto. 
            El backend fue desarrollado con Spring Boot, exponiendo una API contactada a una base de datos MySQL la cual fue desplegada en AWS RDS.
            El frontend, desarrollado de forma sencilla con HTML, CSS y JavaScript, corresponde a los requerimientos académicos de la universidad.  
          </p>
          <a
            href="https://github.com/andrebm99/nagova_web"
            target="_blank"
            type="button"
            rel="noopener noreferrer" /* noopener: seguridad noreferrer: privacidad*/
            className="inline-flex items-center bg-red-500 text-white px-4 py-2 rounded-md transition-transform duration-100 ease-out active:scale-[0.94]"
          >
            Repositorio
          </a>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #Spring Boot
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #JavaScript
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #CSS
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #HTML
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #AWS
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #RDS
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #MySQL
          </span>
        </div>
      </div>
      
    </section>
  );
}
