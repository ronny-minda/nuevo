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

import video from '../staticos/video1.mp4';



function mainHome() {
    return (
        <main>

            <section id='Historia' className="lugares huecas historial">
                <div className="opaCele">

                    <span>HISTORIAL</span>

                    <div className="decoracion blueDeco"></div>

                    <div className='videohistoria'>
                        <div className='video'>

                        {/* <video src="../staticos/video1.mp4"></video> */}
                   


                        <video controls >
      <source src={video} type="video/mp4"/>
     </video>
                        



                        </div>
                        <div className='infoVideo'>
                            <p>
                                Fundada definitivamente en 1547 como astillero y puerto comercial al servicio de la Corona española, como "Santiago de Guayaquil", luego de varios otros intentos de fundación, ha servido de punto principal en la economía de la nación.​ Ha sido sede de grandes revoluciones y levantamientos en el curso de la historia
                            </p>

                        </div>
                    </div>

                </div>
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
                            <img src={dalia} alt="LOS BOLONES DE DALIA MINA"></img>
                            <p>
                                Dalia Mina esmeraldeña con mas de 20 años de experiencia vendiendo unos de los mejores bolones del guayaquil.
                                La jornada laboral inicia a las 4 de la mañana y culmina a las 2 de la tarde, cuenta que inicio vendiendo bolones para poder pagar los estudios de sus hijos.
                                y su pasion es hacer bolones con mucho amor y pasion
                            </p>
                        </card>
                        <card className="card">
                            <h3>LOS SANDUCHES</h3>
                            <h3>EL PRIMO</h3>
                            <img src={primo} alt="LOS SANDUCHES EL PRIMO"></img>
                            <p>
                                “Este es ‘El primo’ del buen sánduche”, asegura Juan Montalvo Álvarez, que dice venir caminando desde la Av. 9 de Octubre por pegarse este banquete ambulante.
                                En cuanto a precios, Alvario dice tener de todo un poco. Los valores oficiales están en 1,50 o $ 1,80. Aunque si se desea más barato tiene el escolar y el universitario. Los cuales salen a 0,50 centavos y $ 1 respectivamente.
                            </p>
                        </card>
                        <card className="card">
                            <h3>LA CASA</h3>
                            <h3>DEL ENCEBOLLADO</h3>
                            <img src={ence} alt="LA CASA ENCEBOLLADO"></img>
                            <p>
                                Esta hueca porteña empezó hace 46 años, en una mesita (ahora el negocio está en una casa de dos pisos). En sus inicios, Elvia vendía encebollado, pero todo cambió por recomendación de su proveedor de pescado de aquella época.
                                "A los dos meses de comprar albacora, el señor que me vendía el pescado me recomendó el bagre. Un día le hice caso y le compré... ese día cambió mi negocio", recuerda Elvia, lojana de 66 años que llegó a vivir a Guayaquil en 1968
                            </p>
                        </card>
                        <card className="card">
                            <h3>CALDO</h3>
                            <h3>MANGUERA</h3>
                            <img src={caldo} alt="CALDO MANGUERA"></img>
                            <p>
                                Ciro’s Raices fundado  el 1971 por  Angel Alejandro Apolo Armijo considerado unas de las mejores huecas de guayaquil ganadores del premio raices 2019 quedando en 3er lugar comida con mucha bariedad tanto guatita, caldo de manguera, seco de pollo, entre otros
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
                                El Museo Antropológico y de Arte Contemporáneo mejor conocido por su acrónimo MAAC, es un museo de la ciudad de Guayaquil, Ecuador. En este museo se expone arte y cultura de Ecuador, Latinoamérica y de la Era Precolombina.
                                La misión del MAAC es el de reforzar el patrimonio cultural institucional, por medio de exhibiciones de una colección de 50,000 piezas arqueológicas ecuatorianas y más de 3,000 obras de arte modernas.
                            </p>
                        </card>
                        <card className="card">
                            <h3>MUSEO DE</h3>
                            <h3>LA CERVEZA</h3>
                            <img src={cerveza} alt="MUSEO DE LA CERVERZA"></img>
                            <p>
                                Inaugurado el 27 de Julio de 2009, como un espacio dedicado a la cultura y el turismo, el museo está ubicado a orillas del río Guayas, en el Puerto Santa Ana, en el mismo sitio donde funcionó la Cervecería Nacional desde 1887, año en que se vendió la primera cerveza de fabricación guayaquileña y en el que la empresa inició sus operaciones como fábrica de hielo y cerveza.
                            </p>
                        </card>
                        <card className="card">
                            <h3>MUSEO DE</h3>
                            <h3>JULIO JARAMILLO</h3>
                            <img src={julio} alt="MUSEO DE JULIO JARAMILLO"></img>
                            <p>
                                Auspiciado y respaldado por la Municipalidad de Guayaquil, fue fundado el 1 de marzo de 2008, nombrado Julio Jaramillo en honor al principal cantante de música popular ecuatoriano.
                                Las vitrinas de este museo resguardan la heredad musical de Guayaquil, donde aprecia a través de sus objetos patrimoniales más de un siglo de historia de autores y compositores ecuatorianos.2
                            </p>
                        </card>
                        <card className="card">
                            <h3>MUSEO</h3>
                            <h3>MIMIATURA</h3>
                            <img src={mini} alt="MUSEO MIMIATURA"></img>
                            <p>
                                El museo es un proyecto conjunto de la Municipalidad de Guayaquil con la Fundación Malecón 2000 con el apoyo de la empresa privada. Fue inaugurado el  26 de Octubre del  2006.
                                La obra que pertenece al escultor guayaquileño Edgar Cevallos Rosales, ofrece un mundo de fantasía que expone una realidad ancestral e histórica, rica en tradiciones y con una belleza impresionante, que transporta al visitante a través del tiempo.
                            </p>
                        </card>
                    </section>



                    {/* <div className='aux'>
                        <Link className="botonVideo" to="/home">
                            <span>VIDEO</span>
                            <div></div>
                        </Link>
                    </div> */}



                </div>
            </section>



            <section className="historial">

            </section>


            {/* <h1>MAinHome</h1> */}
        </main>
    );
}



export default mainHome;
