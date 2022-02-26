import { Link } from 'react-router-dom';

import centenario from '../staticos/img/IMG_0626.jpg';
import peñas from '../staticos/img/IMG_0584.jpg';
import perla from '../staticos/img/IMG_1574.JPG';
import plaza from '../staticos/img/IMG_0672.jpg';
import dalia from '../staticos/img/EotpM8jW8AETZkx.jpg';
import primo from '../staticos/img/a1f77106dfd8b86e2b79619c19d0bd47_lg.jpg';
import ence from '../staticos/img/DOdTClYXUAEnICL.jpg';
import caldo from '../staticos/img/gastronomia-huecas-de-guayaquil-llulan.jpg';
import antro from '../staticos/img/80608517_715591222182528_4294934241931689984_n.jpeg';
import cerveza from '../staticos/img/museo-cerveza-01.jpg';
import julio from '../staticos/img/FOTO-SELECCIONADA-11.jpg';
import mini from '../staticos/img/dsc_9677_museo_en_miniatura_direccion_de_prensa.jpg';



function mainHome() {
    return (
        <main>
            <section className="videoYou">
                <div></div>
            </section>
            <section id='Lugares' className="lugares">
                <div className="opaCele">

                    <span>LUGARES</span>
                    <div className="decoracion"></div>
                    <section>
                        <card className="card">
                            <h3>PARQUE</h3>
                            <h3>CENTENARIO</h3>
                            <img src={centenario} alt="PARQUE CENTENARIO"></img>
                            <p>
                                El Parque Centenario de Guayaquil, es uno de los mas grandes de esta ciudad. Ubicado en la interccion de la Avenida Nueve de Octubre y la calle 6 de Marzo, cuenta con una superficie aproximada de 5 hactareas. Desde 1891 el Consejo Cantonal de Guayaquil.
                            </p>
                        </card>
                        <card className="card">
                            <h3>LAS</h3>
                            <h3>PEÑAS</h3>
                            <img src={peñas} alt="LAS PEÑAS"></img>
                            <p>
                                Las Peñas es un barrio emblematico de la ciudad de Guayaquil.Es reconocido por su estilo arquitectonico colonial y por ser el lugar donde nacio la ciudad. Se encuentra ubicado en las faldas del Cerro Santa Ana y su nombre se debe justamente a la cantidad de peñascos que poseia el cerro al momento en que los españoles se sentaron alli, en el siglo XVI.
                            </p>
                        </card>
                        <card className="card">
                            <h3>LA</h3>
                            <h3>PERLA</h3>
                            <img src={perla} alt="LA PERLA"></img>
                            <p>
                                La Perla es una noria-mirador de 57 m situada sobre el extermo norte del Malecon 2000, en una plataforma sobre el rio Guayas, a la altura de la interseccion de la Avenida Malecon Simon Bolibar y la calle Julian Coronel, en el centro urbano de la ciudad de Guayaquil(Ecuador).
                            </p>
                        </card>
                        <card className="card">
                            <h3>PLAZA</h3>
                            <h3>GUAYARTE</h3>
                            <img src={plaza} alt="PLAZA GUAYARTE"></img>
                            <p>
                                Plaza Guayarte es una plaza de Guayaquil de contenido artistico y gastronomico, ubicado en la avenida Carlos Julio Arosemena, al final del Parque Lineal. Su enfoque es principalmente dar apertura a artistas urbanos y empleadodores para la realizacion de proyectos artisticos y de contenido cultural al aire libre.
                            </p>
                        </card>
                    </section>

                </div>
            </section>



            <section id='Huecas' className="lugares huecas">
                <div className="opaCele">

                    <span>HUECAS</span>

                    <div className="decoracion blueDeco"></div>

                    <section>
                        <card className="card">
                            <h3>LOS BOLONES DE</h3>
                            <h3>DALIA MINA</h3>
                            <img src={ dalia } alt="LOS BOLONES DE DALIA MINA"></img>
                            <p>
                                El Parque Centenario de Guayaquil, es uno de los mas grandes de esta ciudad. Ubicado en la interccion de la Avenida Nueve de Octubre y la calle 6 de Marzo, cuenta con una superficie aproximada de 5 hactareas. Desde 1891 el Consejo Cantonal de Guayaquil.
                            </p>
                        </card>
                        <card className="card">
                            <h3>LOS SANDUCHES</h3>
                            <h3>EL PRIMO</h3>
                            <img src={ primo } alt="LAS PEÑAS"></img>
                            <p>
                                Las Peñas es un barrio emblematico de la ciudad de Guayaquil.Es reconocido por su estilo arquitectonico colonial y por ser el lugar donde nacio la ciudad. Se encuentra ubicado en las faldas del Cerro Santa Ana y su nombre se debe justamente a la cantidad de peñascos que poseia el cerro al momento en que los españoles se sentaron alli, en el siglo XVI.
                            </p>
                        </card>
                        <card className="card">
                            <h3>LA CASA</h3>
                            <h3>DEL ENCEBOLLADO</h3>
                            <img src={ ence } alt="LA CASA ENCEBOLLADO"></img>
                            <p>
                                La Perla es una noria-mirador de 57 m situada sobre el extermo norte del Malecon 2000, en una plataforma sobre el rio Guayas, a la altura de la interseccion de la Avenida Malecon Simon Bolibar y la calle Julian Coronel, en el centro urbano de la ciudad de Guayaquil(Ecuador).
                            </p>
                        </card>
                        <card className="card">
                            <h3>CALDO</h3>
                            <h3>MANGUERA</h3>
                            <img src={ caldo } alt="CALDO MANGUERA"></img>
                            <p>
                                Plaza Guayarte es una plaza de Guayaquil de contenido artistico y gastronomico, ubicado en la avenida Carlos Julio Arosemena, al final del Parque Lineal. Su enfoque es principalmente dar apertura a artistas urbanos y empleadodores para la realizacion de proyectos artisticos y de contenido cultural al aire libre.
                            </p>
                        </card>
                    </section>

                </div>
            </section>
            <section id='Museos' className="lugares museos">
                <div className="opaCele">

                    <span>MUSEOS</span>
                    <div className="decoracion"></div>
                    <section>
                        <card className="card">
                            <h3>MUSEO ANTROPOLOGICO</h3>
                            <h3>DE ARTE CONTEMPORANEO</h3>
                            <img src={antro} alt="MUSEO ANTROPOLOGICO DE ARTE CONTEMPORANEO"></img>
                            <p>
                                El Parque Centenario de Guayaquil, es uno de los mas grandes de esta ciudad. Ubicado en la interccion de la Avenida Nueve de Octubre y la calle 6 de Marzo, cuenta con una superficie aproximada de 5 hactareas. Desde 1891 el Consejo Cantonal de Guayaquil.
                            </p>
                        </card>
                        <card className="card">
                            <h3>MUSEO DE</h3>
                            <h3>LA CERVEZA</h3>
                            <img src={cerveza} alt="MUSEO DE LA CERVERZA"></img>
                            <p>
                                Las Peñas es un barrio emblematico de la ciudad de Guayaquil.Es reconocido por su estilo arquitectonico colonial y por ser el lugar donde nacio la ciudad. Se encuentra ubicado en las faldas del Cerro Santa Ana y su nombre se debe justamente a la cantidad de peñascos que poseia el cerro al momento en que los españoles se sentaron alli, en el siglo XVI.
                            </p>
                        </card>
                        <card className="card">
                            <h3>MUSEO DE</h3>
                            <h3>JULIO JARAMILLO</h3>
                            <img src={julio} alt="MUSEO DE JULIO JARAMILLO"></img>
                            <p>
                                La Perla es una noria-mirador de 57 m situada sobre el extermo norte del Malecon 2000, en una plataforma sobre el rio Guayas, a la altura de la interseccion de la Avenida Malecon Simon Bolibar y la calle Julian Coronel, en el centro urbano de la ciudad de Guayaquil(Ecuador).
                            </p>
                        </card>
                        <card className="card">
                            <h3>MUSEO</h3>
                            <h3>MIMIATURA</h3>
                            <img src={mini} alt="MUSEO MIMIATURA"></img>
                            <p>
                                Plaza Guayarte es una plaza de Guayaquil de contenido artistico y gastronomico, ubicado en la avenida Carlos Julio Arosemena, al final del Parque Lineal. Su enfoque es principalmente dar apertura a artistas urbanos y empleadodores para la realizacion de proyectos artisticos y de contenido cultural al aire libre.
                            </p>
                        </card>
                    </section>

                    <div className='aux'>
                        <Link className="botonVideo" to="/home">
                            <span>VIDEO</span>
                            <div></div>
                        </Link>
                    </div>

                    

                </div>
            </section>

            <section id='Historia' className="lugares huecas">
                <div className="opaCele">

                    <span>HISTORIAL</span>

                    <div className="decoracion blueDeco"></div>

                    <div className='videoYo'>
                        <div></div>
                    </div>

                </div>
            </section>

            <section className="historial">

            </section>


            {/* <h1>MAinHome</h1> */}
        </main>
    );
}



export default mainHome;
