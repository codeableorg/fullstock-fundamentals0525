export default async function sharedDataMiddleware(req, res, next) {
  try {
    // Obtener categorías para la navegación

    // aqui esto debe hacece un update para que esta data se traiga de BD
    const categories = [
      {
        id: 1,
        title: "Polos",
        slug: "polos",
        imgSrc: "/images/polos.jpg",
        alt: "Hombre luciendo polo azul",
        description:
          "Polos exclusivos con diseños que todo desarrollador querrá lucir. Ideales para llevar el código a donde vayas.",
      },
      {
        id: 2,
        title: "Tazas",
        slug: "tazas",
        imgSrc: "/images/tazas.jpg",
        alt: "Tazas con diseño de código",
        description:
          "Tazas que combinan perfectamente con tu café matutino y tu pasión por la programación.",
      },
      {
        id: 3,
        title: "Stickers",
        slug: "stickers",
        imgSrc: "/images/stickers.jpg",
        alt: "Stickers de desarrollo web",
        description:
          "Personaliza tu espacio de trabajo con nuestros stickers únicos y muestra tu amor por el desarrollo web.",
      },
    ];

    // Establecer variables locales para las plantillas
    res.locals.categories = categories;

    next();
  } catch (error) {
    next(error);
  }
}
