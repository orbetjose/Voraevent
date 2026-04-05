import Image from "next/image";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const currentDomain = process.env.NEXT_PUBLIC_WP_DOMAIN;
  const itemsServices = [
    {
      imagen: "wp-content/uploads/2026/03/organizacion-eventos.png",
      titulo: "Organización de eventos",
      descripcion:
        "Celebración de cumpleaños, Revelación de género, Bodas Aniversarios, Eventos corporativos, Eventos personalizados",
    },
    {
      imagen: "wp-content/uploads/2026/03/decoracion-tematica.png",
      titulo: "Decoración temática",
      descripcion:
        "Diseños creativos inspirados en conceptos, colores y estilos que dan identidad y personalidad a cada celebración.",
    },
    {
      imagen: "wp-content/uploads/2026/03/catering-bebidas.png",
      titulo: "Catering y bebidas",
      descripcion:
        "Ofrecemos un servicio de catering que combina sabor, presentación y calidad en cada detalle. Diseñamos experiencias gastronómicas a la medida, utilizando ingredientes frescos y propuestas creativas que se adaptan a todo tipo de eventos.",
    },
    {
      imagen: "wp-content/uploads/2026/03/ambientacion.png",
      titulo: "Ambientación",
      descripcion: "Uso estratégico para crear atmósferas cálidas, elegantes o vibrantes que realzan cada espacio.",
    },
    {
      imagen: "wp-content/uploads/2026/03/decoracion-floral.png",
      titulo: "Decoración floral",
      descripcion: "Arreglos naturales o artificiales que aportan frescura, armonía y un toque especial al ambiente.",
    },
    {
      imagen: "wp-content/uploads/2026/03/escenografia-montaje.png",
      titulo: "Escenografía y montaje",
      descripcion:
        "Estructuras, fondos y elementos visuales diseñados para impactar y generar experiencias memorables de cada celebración.",
    },
    {
      imagen: "wp-content/uploads/2026/03/alquiler-mobiliario.png",
      titulo: "Alquiler y mobiliario",
      descripcion:
        "Selección de muebles, textiles y elementos decorativos que complementan y elevan la estética del evento.",
    },
  ];
  const images = [
    { src: `${currentDomain}wp-content/uploads/2026/03/galeria-1.png`, width: 320, height: 212, alt: "text" },
    { src: `${currentDomain}wp-content/uploads/2026/03/galeria-2.png`, width: 320, height: 212, alt: "text" },
    { src: `${currentDomain}wp-content/uploads/2026/03/galeria-3.png`, width: 320, height: 212, alt: "text" },
    { src: `${currentDomain}wp-content/uploads/2026/03/galeria-4.png`, width: 320, height: 212, alt: "text" },
    { src: `${currentDomain}wp-content/uploads/2026/03/galeria-5.png`, width: 320, height: 212, alt: "text" },
    { src: `${currentDomain}wp-content/uploads/2026/03/galeria-6.png`, width: 320, height: 212, alt: "text" },
  ];

  return (
    <main className="">
      <section>
        <div className="relative flex items-center h-[85vh]">
          <Image
            src={`${currentDomain}wp-content/uploads/2026/03/hero-banner.png`}
            alt="Hero banner"
            className="h-[85vh] w-full object-cover object-center absolute"
            width={1920}
            height={910}
            loading="eager"
          />
        </div>
      </section>
      <section
        className="bg-primary-red py-12 relative overflow-hidden"
        id="quienes-somos">
        <div className="flex flex-col md:flex-row items-center text-white md:max-w-5xl mx-auto px-4 md:px-0 pb-16">
          <div className="font-medium flex-1">
            <h2 className="md:text-5xl text-3xl pb-2 md:pb-0">¿Quienes somos?</h2>
          </div>
          <div className="text-justify font-regular flex-1 space-y-6">
            <p>
              En VORA creemos que cada evento es un latido: Un instante que nace de tu esencia y permanece en la
              memoria.
            </p>
            <p>
              VORA es intensidad, propósito y celebración. Es el arte de crear momentos extraordinarios que se sienten,
              se viven y se recuerdan para siempre.
            </p>
          </div>
        </div>
        <div className="flex gap-8 md:max-w-5xl mx-auto px-4 md:px-0 ">
          <Image
            src={`${currentDomain}wp-content/uploads/2026/03/imagen-1.png`}
            alt="Imagen 1"
            className="md:h-90 object-cover object-center"
            width={481}
            height={608}
          />
          <Image
            src={`${currentDomain}wp-content/uploads/2026/03/imagen-2.png`}
            alt="Imagen 2"
            className="md:h-90 object-cover object-center"
            width={481}
            height={608}
          />
          <Image
            src={`${currentDomain}wp-content/uploads/2026/03/imagen-3.png`}
            alt="Imagen 3"
            className="md:h-90 object-cover object-center"
            width={481}
            height={608}
          />
        </div>
        <Image
          src={`${currentDomain}wp-content/uploads/2026/03/decoration1.png`}
          alt="Decoracion 1"
          className="absolute -left-16 bottom-0 h-30 object-contain"
          width={210}
          height={203}
        />
      </section>
      <section
        className="bg-primary-mustard py-12 relative overflow-hidden"
        id="servicios">
        <div className="flex flex-col md:flex-row items-center text-white md:max-w-5xl mx-auto px-4 md:px-0 gap-8">
          <div className="flex-1">
            <h3 className="font-medium md:text-4xl pb-2 text-3xl">Servicios</h3>
            <p className="font-regular text-justify">
              <span className="font-demibold">En Vora hacemos que cada celebración cobre vida</span>. Ofrecemos
              soluciones completas para todo tipo de eventos, combinando creatividad, organización impecable y una
              experiencia diseñada a tu medida.
            </p>
            <ul className="pt-4 font-demibold-italic space-y-2">
              <li className="underline underline-offset-4 flex items-center gap-3">
                <img
                  src={`${currentDomain}wp-content/uploads/2026/03/ico-calendario.png`}
                  className="h-5"
                  alt="Icono calendario"
                />
                Organización Integral de Eventos
              </li>
              <li className="underline underline-offset-4 flex items-center gap-3">
                <img
                  src={`${currentDomain}wp-content/uploads/2026/03/ico-campana.png`}
                  className="h-4"
                  alt="Icono catering"
                />
                Catering y Bebidas
              </li>
              <li className="underline underline-offset-4 flex items-center gap-3">
                <img
                  src={`${currentDomain}wp-content/uploads/2026/03/ico-estrella.png`}
                  className="h-6"
                  alt="Icono decoracion"
                />
                Decoración y Ambientación
              </li>
              <li className="underline underline-offset-4 flex items-center gap-3">
                <img
                  src={`${currentDomain}wp-content/uploads/2026/03/ico-mesa.png`}
                  className="h-4"
                  alt="Icono alquiler"
                />
                Alquiler de Mobiliario y Equipos
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <Image
              src={`${currentDomain}wp-content/uploads/2026/03/imagen-4.png`}
              alt="Imagen 3"
              className="h-90 object-contain relative z-1"
              width={583}
              height={632}
            />
          </div>
          <Image
            src={`${currentDomain}wp-content/uploads/2026/03/decoration2.png`}
            alt="Decoration 2"
            className="absolute top-0 right-130 translate-x-1/2 h-40 object-contain"
            width={299}
            height={295}
          />
          <Image
            src={`${currentDomain}wp-content/uploads/2026/03/decoration5.png`}
            alt="Decoration 3"
            className="absolute -right-2 bottom-10 w-65 h-30 object-contain 3xl:hidden"
            width={332}
            height={229}
          />
        </div>
      </section>
      <section className="py-12">
        <div className="grid md:grid-cols-3 md:max-w-5xl mx-auto px-4 md:px-0 gap-12">
          {itemsServices.map((item, index) => (
            <div
              className="flex flex-col"
              key={index}>
              <Image
                src={currentDomain + item.imagen}
                alt="Organizacion de eventos"
                className="h-50 w-full object-cover"
                width={914}
                height={708}
              />
              <div className="flex flex-col text-primary-gray font-regular pt-2">
                <span className="text-primary-pink font-demibold text-xl">{item.titulo}</span>
                <div className="mt-2">{item.descripcion}</div>
                <div className="flex items-center gap-2 text-white bg-primary-pink rounded-full px-2 w-fit mt-2">
                  <a href="#">Contactar</a>
                  <img
                    className="h-3"
                    src={`${currentDomain}wp-content/uploads/2026/03/arrow-right.png`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        className=""
        id="galeria">
        <h2 className="text-primary-green text-2xl md:text-3xl text-center font-medium">Galería</h2>
        <Gallery images={images} />
      </section>
      <ContactForm />
    </main>
  );
}
