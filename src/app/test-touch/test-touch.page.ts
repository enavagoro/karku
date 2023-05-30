import { Component, OnInit } from '@angular/core';
import { ElementService } from '../../_services/elements.service';
import { ModalInfoPage } from './modal-info/modal-info.page';
import { ModalController, AlertController } from '@ionic/angular';

interface ElementWithZoom {
  zoomLevel: number;
  name: string,
  image: string,
  secondImage?: string,
  description: string,
  originalIndex: number,
  audioRoute?: string,
  // otros campos opcionales aquí
}

@Component({
  selector: 'app-test-touch',
  templateUrl: './test-touch.page.html',
  styleUrls: ['./test-touch.page.scss'],
})

export class TestTouchPage implements OnInit {
  isLoadingStep = 0;

  initialDistance: any = 0;
  toggle: any;
  zoomLvl: number = 1; // nivel inicial de zoom

  elements: Array<ElementWithZoom> = [
    {
      image: 'https://content-api.nyc3.digitaloceanspaces.com/magallanes/magallanes.gif',
      secondImage: 'https://content-api.nyc3.digitaloceanspaces.com/magallanes/magallanes-ship.png',
      description: `¡Oh, valerosos navegantes! Permitid que Hernando de Magallanes os cuente una increíble hazaña ocurrida en el año 1520. Fue entonces cuando descubrí un estrecho, al que en ese momento bauticé como Canal de Todos los Santos, pero que hoy en día lleva mi nombre, el Estrecho de Magallanes.
      Zarpamos desde el puerto de Sanlúcar de Barrameda con el anhelo de alcanzar las codiciadas Indias Orientales. Nuestra flota estaba compuesta por cinco navíos, dispuestos a enfrentar los desafíos del vasto Océano Atlántico. Tras más de un año de ardua navegación, finalmente ingresamos al estrecho que hoy lleva mi nombre, pero solo lo logramos con tres de las naves: la Trinidad, la Concepción y la Victoria.
      Al adentrarnos en estas aguas desconocidas, nos maravillamos por la calma que reinaba en sus aguas. Por ello, decidimos llamar a este nuevo océano "Pacífico". ¡Oh, cuánto significado encerraba esa elección! Era una forma de describir la tranquilidad y serenidad que encontramos en aquellas vastas extensiones marinas.
      Este viaje se considera la primera vuelta al mundo, iniciada en agosto de 1519 y culminada en Sevilla en septiembre de 1522. Fue un viaje épico, pero con un alto costo. Solo 18 valientes sobrevivieron para contar la historia, demostrando así la verdadera forma esférica de nuestro planeta.
      Sin embargo, debo compartir una triste noticia. En el transcurso de esta travesía, no pude completar el viaje. En Mactán, el 27 de abril de 1521, perdí la vida en un enfrentamiento con los nativos. Aunque no estuve presente en la conclusión de esta gran expedición, mi legado perdurará en los corazones de aquellos que valoran el espíritu de exploración y descubrimiento.
      Que mi nombre, Hernando de Magallanes, se mantenga en la memoria de aquellos que anhelan explorar los confines de nuestro vasto mundo.
      <br><br>
      <b>Aprendamos Mapudungun:</b><br>
      <b>Costa del Océano Pacífico:</b> Lafkenmapu<br>
      <b>27 de Abril:</b> Epu mari regle april küyen<br>
      <b>Barco:</b> Fote
      `,
      audioRoute: 'https://content-api.nyc3.cdn.digitaloceanspaces.com/audio/magallanes.wav',
      name: "<b>(1520) Magallanes y el estrecho de los sueños:</b><br> La audacia que abrió nuevos horizontes",
      zoomLevel: 0,
      originalIndex: 0
    }, 
    {
      image: 'https://content-api.nyc3.digitaloceanspaces.com/tesoro/tesoro.gif',
      secondImage: 'https://content-api.nyc3.digitaloceanspaces.com/tesoro/cavendish.png',
      description: `Soy Thomas Cavendish, un intrépido pirata inglés en busca de fortuna y aventuras en los mares desconocidos. A bordo de mis tres poderosos barcos, Desire, Content y Hugh Galiant, navego por el estrecho de Magallanes junto a mis 123 valientes tripulantes.En medio de mi travesía, una historia cautiva mi interés. Me entero de Tomé Hernández, el único superviviente de la fallida aventura colonizadora de Sarmiento. Mi curiosidad me impulsa a buscarlo y descubrir los secretos que guarda.
      Finalmente, encuentro a Tomé Hernández en un poblado desolado y olvidado. Su apariencia demacrada y sus ojos llenos de melancolía cuentan una historia de lucha y sacrificio. Me conmueve su tenacidad y su afán por sobrevivir en estas tierras inhóspitas. Decido honrar su valentía y rebautizo el poblado como Port Famine, un recordatorio de los desafíos que enfrentaron aquellos que intentaron colonizar estas tierras hostiles. Es un tributo a su resistencia y una advertencia a futuros navegantes.
      Después de este encuentro con la historia, siento un profundo respeto por aquellos que se atrevieron a explorar estas tierras salvajes. Marchamos de Port Famine con el corazón lleno de emociones encontradas, sabiendo que hemos sido testigos de una historia que resistirá el paso del tiempo. Continúo mi viaje con la determinación de buscar nuevas riquezas y desafiar los límites de la navegación. Pero en lo más profundo de mi ser, sé que el encuentro con Tomé Hernández y la rebautización de Port Famine dejarán una huella imborrable en mi memoria y en la historia de estas tierras inhóspitas.
      <br><br>
      <b>Aprendamos Mapudungun:</b><br>
      <b>Corazón:</b> Piwke<br>
      <b>123:</b> Kiñe pataka küla<br>
      <b>Valiente:</b> Kona<br>
      
      `,
      audioRoute: 'https://content-api.nyc3.cdn.digitaloceanspaces.com/audio/cavendish2.wav',
      name: '<b>(1587) El tesoro de Cavendish:</b><br> La travesía por el estrecho de Magallanes',
      zoomLevel: 0,
      originalIndex: 0
    }, 
    {
      image: 'https://content-api.nyc3.digitaloceanspaces.com/expedicion/expedicion-lobera.gif',
      secondImage: 'https://content-api.nyc3.digitaloceanspaces.com/expedicion/heroes.png',
      description: `Saludos, compatriotas! Soy Bernardo O'Higgins, el director Supremo de la época, y me complace contarles una fascinante historia ocurrida en el año 1820. Fui yo quien autorizó la valiente expedición lobera liderada por MacFarlane. El 12 de septiembre de ese mismo año, en la majestuosa nave Dragón, partieron rumbo al sur en busca de nuevas tierras y oportunidades.
      Tras cinco o seis semanas de travesía, llegaron a las conocidas islas Shetland del Sur, un destino habitual para los barcos dedicados a la caza de lobos marinos. Sin embargo, lo que los registros han revelado recientemente es aún más asombroso. Resulta que no solo estuvieron en las islas, sino que también desembarcaron a mediados de octubre en el sector occidental de la península Antártica. Esto está documentado en la bitácora de viaje del capitán inglés Robert Fildes, quien se encontró con MacFarlane en la isla Decepción en diciembre de ese mismo año.
      ¡Imaginen, queridos amigos, que esta expedición se convirtió en la primera en pisar el Continente Blanco, la Antártida! Fue un logro sin precedentes, un hito en la exploración y el descubrimiento. Nuestros valientes exploradores dejaron su huella en esa tierra virgen, demostrando una vez más la audacia y determinación de nuestra nación.
      Me enorgullece haber autorizado esta expedición, que expandió los límites de nuestro conocimiento y reafirmó nuestra presencia en estas tierras lejanas. Es un testimonio de la visión y la audacia que impulsan a nuestra amada patria. Sigamos adelante, inspirados por el legado de aquellos valientes hombres y mujeres que se atrevieron a explorar lo desconocido y forjar un camino hacia el futuro.
      <br><br>
      <b>Aprendamos Mapudungun: </b><br>
      <b>Dragón:</b> Filu<br>
      <b>Islas:</b> Wapi<br>
      <b>12 de Septiembre:</b> Mari epu septiempre küyen
      `,
      audioRoute: 'https://content-api.nyc3.cdn.digitaloceanspaces.com/bernardo.wav',
      name: '<b>(1820) El Rugir de los Héroes:</b><br>La Expedición Fantástica hacia el Reino Helado',
      zoomLevel: 0,
      originalIndex: 0,
    },
    {
      image: 'https://content-api.nyc3.cdn.digitaloceanspaces.com/odisea/odisea.gif',
      secondImage: 'https://content-api.nyc3.cdn.digitaloceanspaces.com/odisea/odisea.png',
      description: `¡Vaya, camaradas! ¡Les contaré una increíble historia que ocurrió allá por el año 1843! Una expedición colonizadora partió desde Chiloé en la majestuosa goleta Ancud, liderada por el 
      valiente capitán de fragata Juan Williams. Éramos un grupo de 23 intrépidos aventureros, ¡y sí, también había dos mujeres valerosas entre nosotros!
      Después de sortear tormentas y mares embravecidos durante casi cuatro meses, finalmente llegamos a nuestro destino: el estrecho de Magallanes. ¡Y allí, mis amigos, tuvo lugar la toma de posesión efectiva de estas tierras en nombre de Chile! Fue un momento histórico en el que sentimos el orgullo de ser parte de algo más grande.
      Pero eso no fue todo, ¡oh no! También fundamos un fuerte en Punta Santa Ana, un lugar al que llamamos Fuerte Bulnes. Era nuestro punto de apoyo en estas tierras salvajes y desconocidas. Cumplimos así el último deseo del prócer Bernardo O'Higgins, quien anhelaba que Chile se convirtiera en una potencia marítima. Y con la posesión del estrecho, estábamos más cerca de ese objetivo, ya que ahora teníamos acceso a ambos océanos y podíamos acercarnos a los principales centros urbanos de aquellos tiempos.
      Aquella expedición y la fundación de Fuerte Bulnes sentaron las bases para el desarrollo de esta región de Magallanes. Fue un hito en la colonización y expansión de nuestro querido territorio chileno en el sur. ¡Ah, qué tiempos aquellos! ¡Si tan solo pudieran ver cómo hemos crecido desde entonces!
      <br><br>
      <b>Aprendamos Mapudungun:</b><br>
      <b>Mujer:</b> Zomo<br>
      <b>Lugar de Chelles:</b> Chiloé<br>
      <b>Chileno:</b> Winka<br>


      `,
      name: '<b>(1843) La Odisea de la Goleta Ancud:</b><br> Travesías quiméricas en Busca del Estrecho Perdido',
      zoomLevel: 0,
      originalIndex: 0,
      audioRoute: 'https://content-api.nyc3.cdn.digitaloceanspaces.com/audio/fuerte.wav',
    },
    {
      image: 'https://content-api.nyc3.cdn.digitaloceanspaces.com/rescate/rescate.gif',
      secondImage: 'https://content-api.nyc3.cdn.digitaloceanspaces.com/rescate/rescate.png',
      description: `¡Hola, amigos! Soy el piloto Luis Pardo Villalón, y me complace relatarles una increíble historia que tuvo lugar en el año 1916. Fue en ese momento cuando encontramos con vida a los valientes náufragos del Endurance, quienes esperaban ansiosos en la isla Elefante el regreso de Sir Ernest Shackleton, una gran figura de la época conocida por sus destacadas expediciones tanto en la Antártida como en Europa.
      Después de un largo año y medio a la deriva y tras tres intentos fallidos de rescate por parte de la comunidad internacional, tuve el honor de lograr lo impensable. Al mando de la escampavía Yelcho, enfrenté condiciones adversas y desafiantes. Sin embargo, mi determinación y habilidades como piloto chileno me permitieron cumplir con la misión de traer de vuelta a los sobrevivientes sanos y salvos.
      El regreso de los náufragos del Endurance fue recibido con júbilo y admiración en la ciudad de Punta Arenas. Fuimos aclamados como héroes, aunque siempre recordando que la verdadera valentía y fortaleza residía en aquellos intrépidos hombres que habían sobrevivido a través de la adversidad y la incertidumbre en la inhóspita Antártida.
      Este acontecimiento demostró la importancia de la colaboración internacional y el espíritu de ayuda mutua en momentos difíciles. Nos enseñó que, a pesar de los obstáculos aparentemente insuperables, la perseverancia y el coraje pueden llevarnos más allá de nuestros límites. Fue un honor haber sido parte de esta hazaña y contribuir al regreso seguro de aquellos valientes aventureros.
      Que esta historia inspire a futuras generaciones a explorar y a enfrentar desafíos con valentía y determinación. ¡Adelante, amigos, hacia nuevos horizontes!
      <br><br>

      <b>Aprendamos Mapudungun:</b><br>
      <b>Espíritu:</b> Ngenechén<br>
      <b>Tierra:</b> Mapu<br>
      <b>Helado:</b> Wëtrenguen<br>
      `,
      name: '<b>(1916) Rescate en las Tierras del Hielo:</b><br> La Epopeya del Piloto Luis Pardo y los Sobrevivientes del Endurance',
      zoomLevel: 0,
      originalIndex: 0,
      audioRoute: 'https://content-api.nyc3.cdn.digitaloceanspaces.com/audio/pardo.wav',
    },
    {
      image: 'https://content-api.nyc3.cdn.digitaloceanspaces.com/guardianes/guardianes.gif',
      secondImage: 'https://content-api.nyc3.cdn.digitaloceanspaces.com/guardianes/guardianes.png',
      description: `¡Saludos! Soy el Teniente 1° Arturo Parodi Alister y me complace compartir mi experiencia en el primer vuelo de un avión de la Fuerza Aérea de Chile sobre la Antártica, el cual tuvo lugar el 15 de febrero de 1947. Fue un honor para mí liderar esta histórica expedición a bordo de una aeronave Vought Sikorsky.
      El vuelo se inició exactamente a las dieciséis con cero tres, y durante treinta minutos tuve la oportunidad de sobrevolar la impresionante bahía Soberanía y la majestuosa Isla Decepción. Fue un momento emocionante y lleno de descubrimientos, ya que pudimos apreciar la grandiosidad y la belleza del paisaje antártico desde el aire.
      Este vuelo de exploración fue solo el comienzo de una serie de expediciones que se llevaron a cabo en la Antártica en los años siguientes. Gracias a estas exploraciones, se pudo establecer la primera base aérea en la Antártica tan solo cuatro años después, en 1951. Esta base fue denominada Presidente Gabriel González Videla, en honor al destacado líder chileno.
      Este logro marcó un hito en la historia de la exploración antártica y en la presencia de Chile en este territorio tan inhóspito. Fue el resultado de la dedicación y el esfuerzo de todo un equipo de valientes aviadores y exploradores que se adentraron en lo desconocido en busca de nuevos horizontes.
      Me siento orgulloso de haber sido parte de esta expedición pionera y de haber contribuido al establecimiento de la primera base aérea en la Antártica. Nuestro trabajo allanó el camino para futuras exploraciones y demostró el compromiso de Chile con la investigación científica y la preservación de este maravilloso continente blanco.
      Sigamos trabajando juntos para proteger y estudiar la Antártica, manteniendo vivo el espíritu de exploración y aventura que nos llevó a emprender este vuelo histórico.
      <br><br>

      <b>Aprendamos Mapudungun:</b><br>
      <b>Blanco:</b> lig<br>
      <b>15 de Febrero:</b> Kiñe kechu Febrerü küyen<br>
      <b>Aire:</b> Neyen<br>
      `,
      name: '<b>(1947) Guardianes de Hielo:</b><br> El Legado Aéreo del Teniente Arturo Parodi en la Antártica',
      zoomLevel: 0,
      originalIndex: 0,
      audioRoute: 'https://content-api.nyc3.digitaloceanspaces.com/audio/fly.wav',
    },
    {
      image: 'https://content-api.nyc3.cdn.digitaloceanspaces.com/encantamiento/encantamiento.gif',
      secondImage: 'https://content-api.nyc3.cdn.digitaloceanspaces.com/encantamiento/encantamiento.png',
      description: `Como firmante del Tratado Antártico, Alberto Llona, en 1959, me complace relatarles los acontecimientos que rodearon este importante hito. Soy consciente de la importancia histórica de este tratado, que entró en vigencia el 23 de junio de 1961 y estableció un marco normativo integral para la Antártica.
      A través de este tratado, se sentaron las bases para el uso pacífico de la Antártica y la promoción de la cooperación en la investigación científica. También se hizo hincapié en el intercambio de información y se establecieron normas y convenciones para la conservación de los recursos y del medio ambiente, entre otros aspectos fundamentales.
      Uno de los aspectos más destacados del Tratado Antártico fue la designación de la Antártica como una región de paz y cooperación. Además, abordó de manera integral las cuestiones relacionadas con los reclamos de soberanía, estableciendo que era de interés para toda la humanidad que la Antártica se utilizara exclusivamente con fines pacíficos y que no se convirtiera en un escenario de discordia internacional.
      Es importante destacar que este tratado fue firmado por doce países, incluyendo a mi país, Chile. Estos países, al convertirse en firmantes del tratado, adquirieron automáticamente la condición de Miembros Consultivos, lo que les permitió participar activamente en la toma de decisiones y la gobernanza de la Antártica.
      El Tratado Antártico representa un logro significativo en la historia de la exploración y la cooperación internacional. Su objetivo principal es preservar la Antártica como un continente dedicado a la paz, la ciencia y la conservación de su rica biodiversidad. Como firmante de este tratado, me enorgullece haber contribuido a la protección y el uso sostenible de este vasto territorio.
      Continuemos trabajando juntos para salvaguardar la Antártica y fomentar la colaboración científica y el respeto mutuo entre las naciones. Solo a través de esfuerzos conjuntos podremos preservar este tesoro natural para las generaciones futuras.
      <br><br>

      <b>Aprendamos Mapudungun:</b><br>
      <b>Paz:</b> Anvlen<br>
      <b>23 de Junio:</b> Epu mari küla<br>
      <b>País:</b> Mapu<br>
      `,
      name: '<b>(1959) El Encantamiento de la Antártida:</b><br>El Pacto Místico de 1959',
      zoomLevel: 0,
      originalIndex: 0,
      audioRoute: 'https://content-api.nyc3.cdn.digitaloceanspaces.com/audio/tratado.wav',
    },  
  ]

  globalValue: any = 0;
  action = true;

  visibleElements: Array<ElementWithZoom> = [];
  pressInterval: any;

  constructor(private elementServices: ElementService, private alertController: AlertController, private modalController: ModalController) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.isLoadingStep = 1;
      setTimeout(() => {
        this.isLoadingStep = 2;
        this.startAlert();
      }, 2000);
      
    }, 5000);

    const firstElement = this.elements[0];
    firstElement['originalIndex'] = 0;
    firstElement.zoomLevel = 2;
    this.visibleElements.push(firstElement);

    for (const [index, element] of this.elements.entries()) {
      if (index != 0) {
        element.zoomLevel = 0;
        element['originalIndex'] = index;
      }

    }
  }

  increaseZoomLevel(num: number) {
    for (const [index, element] of this.visibleElements.entries()) {
      let lastElementCondition = (((element.originalIndex == this.elements.length - 1) && (element.zoomLevel < 5.0)) && this.visibleElements.length == 1);
      if (!lastElementCondition) {
        if (element.zoomLevel > 2.5) {
          element.zoomLevel += num + 0.1;
        } else {
          element.zoomLevel += num;
        }

        if (element.zoomLevel >= 2.5 && this.visibleElements.length == 1) {
          this.visibleElements.push(this.elements[element.originalIndex + 1])
        }
        if (element.zoomLevel >= 5.0) {
          this.visibleElements.splice(index, 1);
        }
      } else {
        if (element.zoomLevel < 3.5) {
          element.zoomLevel += num + 0.1;
        }
      }
    }
  }

  decreaseZoomLevel(num: number) {
    for (const [index, element] of this.visibleElements.entries()) {
      let firstElementCondition = !((element.originalIndex == 0 && element.zoomLevel <= 2) && this.visibleElements.length == 1);
      if (firstElementCondition) {
        if (element.zoomLevel > 2.5) {
          element.zoomLevel -= num + 0.1;
        } else {
          element.zoomLevel -= num;
        }
        if (element.zoomLevel <= 2.5 && this.visibleElements.length == 1) {
          const prevElement = this.elements[element.originalIndex - 1]
          prevElement.zoomLevel = 5.0;
          this.visibleElements.unshift(prevElement)
        }

        if (element.zoomLevel <= 0) {
          this.visibleElements.splice(index, 1);
        }
      }
    }
  }

  setScala(num: number) {
    return (num / 10) * 2
  }

  onTouchStart(event: TouchEvent) {
    if (event.touches.length === 2) {
      const touch1 = event.touches[0];
      const touch2 = event.touches[1];
      this.initialDistance = Math.sqrt(
        Math.pow(touch2.pageX - touch1.pageX, 2) +
        Math.pow(touch2.pageY - touch1.pageY, 2)
      );
    }
  }

  onTouchMove(event: TouchEvent) {
    if (event.touches.length === 2) {
      const touch1 = event.touches[0];
      const touch2 = event.touches[1];
      const currentDistance = Math.sqrt(
        Math.pow(touch2.pageX - touch1.pageX, 2) +
        Math.pow(touch2.pageY - touch1.pageY, 2)
      );

      if (currentDistance < this.initialDistance) {
        this.decreaseZoomLevel(0.1)
      } else if (currentDistance > this.initialDistance) {
        this.increaseZoomLevel(0.1)
      }
      // Actualizar la distancia inicial para la siguiente comparación
      // Verificar si alguno de los valores es verdadero para establecer el bucle while
    }
  }

  onTouchEnd(event: TouchEvent) {

  }

  async openModal(element: any) {
    console.log('element:', element);
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      cssClass: 'modals',
      componentProps: {
        'element': element
      }
    });

    modal.onDidDismiss().then(modal => {

    });

    return await modal.present();
  }

  startPress(value: string) {
    if (value == 'increase') {
      console.log('true');
      this.pressInterval = setInterval(() => {
        this.increaseZoomLevel(0.2); // Lógica para avanzar mientras se mantiene presionado
      }, 100); // Intervalo de tiempo entre avances mientras se mantiene presionado
    }

    if (value == 'decrease') {
      this.pressInterval = setInterval(() => {
        this.decreaseZoomLevel(0.2); // Lógica para avanzar mientras se mantiene presionado
      }, 100); // Intervalo de tiempo entre avances mientras se mantiene presionado
    }
  }

  endPress() {
    clearInterval(this.pressInterval);
  }

  async startAlert() {
    const alert = await this.alertController.create({
      header: 'Bienvenido!',
      message: `
      Recuerda pinchar las imágenes que aparecen a continuación!!!`,
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'Entendido  ',
          handler: () => {
          }
        }
      ]
    });

    await alert.present();
  }

}