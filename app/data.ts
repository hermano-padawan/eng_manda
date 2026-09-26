export type CategorySlug =
  | "animals"
  | "flowers-nature"
  | "geometric"
  | "fantasy-space"
  | "ocean-landscapes"
  | "cozy-things";

export type ColoringPage = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  sourceFile: string;
  spanishUrl: string;
  category: CategorySlug;
  tags: string[];
  seoContent?: { about: string; ideas: string; printTip: string };
};

const page = (
  slug: string,
  title: string,
  short: string,
  description: string,
  sourceFile: string,
  spanishSlug: string,
  category: CategorySlug,
  tags: string[],
): ColoringPage => ({
  slug,
  title,
  short,
  description,
  image: `/coloring-pages/${slug}-coloring-page.webp`,
  sourceFile,
  spanishUrl: `https://dibulisto.site/mandalas/${spanishSlug}/`,
  category,
  tags,
});

export const coloringPages = [
  page(
    "ocean-mandala",
    "Ocean Mandala",
    "Shells and starfish",
    "Shells, coral, waves, and starfish create a breezy medium-detail design inspired by the shore.",
    "mandala-botanico.webp",
    "oceano",
    "ocean-landscapes",
    ["ocean", "shells", "mandala"],
  ),
  page(
    "easy-floral-mandala",
    "Easy Floral Mandala",
    "Large petals and leaves",
    "A simple floral mandala with broad petals, clear leaves, and roomy sections that are easy to color.",
    "mandala-petalos-hojas.webp",
    "floral-facil",
    "flowers-nature",
    ["flowers", "easy", "mandala"],
  ),
  page(
    "circles-and-leaves-mandala",
    "Circles and Leaves Mandala",
    "Soft geometric shapes",
    "Interlocking circles and a light ring of leaves bring geometry and nature together.",
    "mandala-circulos-florales.webp",
    "circulos-y-hojas",
    "geometric",
    ["circles", "leaves", "mandala"],
  ),
  page(
    "easy-lotus-mandala",
    "Easy Lotus Mandala",
    "Two rings of petals",
    "A balanced lotus with wide petals and a clean layout for a calm, approachable coloring session.",
    "mandala-loto-geometrico.webp",
    "loto-facil",
    "flowers-nature",
    ["lotus", "easy", "flowers"],
  ),
  page(
    "botanical-star-mandala",
    "Botanical Star Mandala",
    "Points and leafy details",
    "An eight-point star softened by large leaves and crisp botanical lines.",
    "mandala-estrella-botanica.webp",
    "estrella-botanica",
    "geometric",
    ["star", "botanical", "geometric"],
  ),
  page(
    "sun-and-petals-mandala",
    "Sun and Petals Mandala",
    "Bright radial design",
    "A sunny center surrounded by broad petals and a leafy border in an easy, balanced pattern.",
    "mandala-sol-petalos.webp",
    "sol-floral",
    "flowers-nature",
    ["sun", "petals", "easy"],
  ),
  page(
    "geometric-rose-mandala",
    "Geometric Rose Mandala",
    "Rose and symmetrical leaves",
    "A top-down rose combines open petals with a neat ring of leaves.",
    "mandala-rosa-geometrica.webp",
    "rosa-geometrica",
    "flowers-nature",
    ["rose", "flowers", "geometric"],
  ),
  page(
    "geometric-sunflower-mandala",
    "Geometric Sunflower Mandala",
    "Petals and triangular center",
    "A radial sunflower with generous petals, a geometric center, and simple surrounding leaves.",
    "mandala-girasol-geometrico.webp",
    "girasol-geometrico",
    "flowers-nature",
    ["sunflower", "flowers", "geometric"],
  ),
  page(
    "daisy-mandala",
    "Daisy Mandala",
    "Six radial flowers",
    "Six clean-lined daisies circle a small central star in this cheerful printable.",
    "mandala-margaritas-radiales.webp",
    "margaritas-radiales",
    "flowers-nature",
    ["daisy", "flowers", "easy"],
  ),
  page(
    "flowers-and-leaves-mandala",
    "Flowers and Leaves Mandala",
    "Balanced floral wreath",
    "Rounded flowers and broad leaves form a symmetrical botanical design with medium detail.",
    "mandala-flores-y-hojas.webp",
    "flores-y-hojas",
    "flowers-nature",
    ["flowers", "leaves", "botanical"],
  ),
  page(
    "wildflower-mandala",
    "Wildflower Mandala",
    "Gentle botanical pattern",
    "Simple wildflowers and long leaves create an elegant page with comfortable coloring spaces.",
    "mandala-flores-silvestres.webp",
    "flores-silvestres",
    "flowers-nature",
    ["wildflowers", "leaves", "nature"],
  ),
  page(
    "butterflies-and-flowers-mandala",
    "Butterflies and Flowers Mandala",
    "Symmetrical nature design",
    "Four stylized butterflies alternate with flowers and leaves in a clear, harmonious layout.",
    "mandala-mariposas-florales.webp",
    "mariposas-florales",
    "flowers-nature",
    ["butterflies", "flowers", "nature"],
  ),
  page(
    "layered-floral-mandala",
    "Layered Floral Mandala",
    "Medium-detail petals",
    "A layered floral rosette offers extra detail while keeping every section pleasant to color.",
    "mandala-floral-moderado.webp",
    "floral-moderado",
    "flowers-nature",
    ["flowers", "medium", "mandala"],
  ),
  page(
    "squares-and-leaves-mandala",
    "Squares and Leaves Mandala",
    "Botanical geometry",
    "Soft-cornered squares weave together with leaves for an orderly nature-inspired pattern.",
    "mandala-cuadrados-botanicos.webp",
    "cuadrados-botanicos",
    "geometric",
    ["squares", "leaves", "geometric"],
  ),
  page(
    "floral-cat-mandala",
    "Floral Cat Mandala",
    "Cat with a botanical wreath",
    "An elegant cat face sits among broad petals and leaves in a balanced printable mandala.",
    "mandala-gato-floral.webp",
    "gato-floral",
    "animals",
    ["cat", "flowers", "cute"],
  ),
  page(
    "geometric-cat-mandala",
    "Geometric Cat Mandala",
    "Soft facets and leaves",
    "A cat made from gentle geometric shapes sits inside a symmetrical leafy design.",
    "mandala-gato-geometrico.webp",
    "gato-geometrico",
    "animals",
    ["cat", "geometric", "animals"],
  ),
  page(
    "botanical-elephant-mandala",
    "Botanical Elephant Mandala",
    "Elephant and flowers",
    "An elephant head meets large petals and a botanical wreath in this medium-detail page.",
    "mandala-elefante-botanico.webp",
    "elefante-botanico",
    "animals",
    ["elephant", "flowers", "animals"],
  ),
  page(
    "geometric-owl-mandala",
    "Geometric Owl Mandala",
    "Owl, feathers, and leaves",
    "A front-facing owl with round eyes and broad feathers anchors a botanical rosette.",
    "mandala-buho-geometrico.webp",
    "buho-geometrico",
    "animals",
    ["owl", "geometric", "animals"],
  ),
  page(
    "geometric-butterfly-mandala",
    "Geometric Butterfly Mandala",
    "Wings and leafy wreath",
    "A butterfly with open geometric wings is framed by a simple ring of leaves.",
    "mandala-mariposa-geometrica.webp",
    "mariposa-geometrica",
    "animals",
    ["butterfly", "geometric", "nature"],
  ),
  page(
    "concentric-circles-mandala",
    "Concentric Circles Mandala",
    "Arcs, petals, and leaves",
    "Concentric circles unfold into petals, arcs, and leaves in an orderly easy-to-color design.",
    "mandala-circulos-concentricos.webp",
    "circulos-concentricos",
    "geometric",
    ["circles", "geometric", "easy"],
  ),
  page(
    "botanical-spirals-mandala",
    "Botanical Spirals Mandala",
    "Curves and leaves",
    "Four large spirals alternate with leaves around a central flower.",
    "mandala-espirales-botanicas.webp",
    "espirales-botanicas",
    "geometric",
    ["spirals", "leaves", "geometric"],
  ),
  page(
    "repeating-floral-pattern-mandala",
    "Repeating Floral Pattern Mandala",
    "Rhythmic floral geometry",
    "Petals, rounded diamonds, and leaves repeat in a serene radial pattern.",
    "mandala-patron-floral-repetitivo.webp",
    "patron-floral-repetitivo",
    "geometric",
    ["pattern", "flowers", "geometric"],
  ),
  page(
    "mushroom-forest-mandala",
    "Mushroom Forest Mandala",
    "Mushrooms, ferns, and leaves",
    "Woodland mushrooms sit among ferns and leaves in a natural circular composition.",
    "setas-y-bosque.webp",
    "setas-y-bosque",
    "ocean-landscapes",
    ["mushrooms", "forest", "nature"],
  ),
  page(
    "sun-and-moon-mandala",
    "Sun and Moon Mandala",
    "Celestial symmetry",
    "The sun and moon meet among stars and symmetrical leaves.",
    "sol-y-luna.webp",
    "sol-y-luna",
    "fantasy-space",
    ["sun", "moon", "celestial"],
  ),
  page(
    "capybara-with-flowers",
    "Capybara with Flowers",
    "A calm capybara in bloom",
    "A peaceful capybara rests inside a cheerful wreath of large flowers.",
    "capibara-con-flores.webp",
    "capibara-con-flores",
    "animals",
    ["capybara", "flowers", "cute"],
  ),
  page(
    "lighthouse-and-waves-mandala",
    "Lighthouse and Waves Mandala",
    "Lighthouse, sea, and shore",
    "A lighthouse rises above rolling waves and coastal details in a medium-detail page.",
    "faro-y-olas.webp",
    "faro-y-olas",
    "ocean-landscapes",
    ["lighthouse", "ocean", "coast"],
  ),
  page(
    "books-and-flowers",
    "Books and Flowers",
    "Reading with a floral touch",
    "A stack of books nestles among flowers and leaves for a cozy creative break.",
    "libros-y-flores.webp",
    "libros-y-flores",
    "cozy-things",
    ["books", "flowers", "cozy"],
  ),
  page(
    "planets-and-stars-mandala",
    "Planets and Stars Mandala",
    "A geometric solar system",
    "Planets, orbits, and stars form a clear and symmetrical space scene.",
    "planetas-y-estrellas.webp",
    "planetas-y-estrellas",
    "fantasy-space",
    ["planets", "stars", "space"],
  ),
  page(
    "cactus-and-succulents-mandala",
    "Cactus and Succulents Mandala",
    "A hardy little garden",
    "Cacti and succulents in varied shapes create a geometric desert garden.",
    "cactus-y-suculentas.webp",
    "cactus-y-suculentas",
    "flowers-nature",
    ["cactus", "succulents", "plants"],
  ),
  page(
    "floral-axolotl-mandala",
    "Floral Axolotl Mandala",
    "Axolotl among flowers",
    "A friendly axolotl with soft lines fills the center of a lively botanical wreath.",
    "ajolote-floral.webp",
    "ajolote-floral",
    "animals",
    ["axolotl", "flowers", "cute"],
  ),
  page(
    "floral-coffee-cup",
    "Floral Coffee Cup",
    "Coffee, steam, and flowers",
    "A steaming cup surrounded by large flowers creates a warm modern coloring page.",
    "taza-de-cafe-floral.webp",
    "taza-de-cafe-floral",
    "cozy-things",
    ["coffee", "flowers", "cozy"],
  ),
  page(
    "tree-of-life-mandala",
    "Tree of Life Mandala",
    "Roots and leafy branches",
    "Deep roots and a full crown form a symmetrical tree of life ready to print.",
    "arbol-de-la-vida.webp",
    "arbol-de-la-vida",
    "ocean-landscapes",
    ["tree", "nature", "mandala"],
  ),
  page(
    "seashell-mandala",
    "Seashell Mandala",
    "Shells and ocean shapes",
    "Shells, conches, and sea-inspired details spread across a light radial design.",
    "conchas-marinas.webp",
    "conchas-marinas",
    "ocean-landscapes",
    ["shells", "ocean", "beach"],
  ),
  page(
    "guitar-with-flowers",
    "Guitar with Flowers",
    "Music and botanicals",
    "An acoustic guitar is framed by flowers and leaves in a balanced musical design.",
    "guitarra-con-flores.webp",
    "guitarra-con-flores",
    "cozy-things",
    ["guitar", "music", "flowers"],
  ),
  page(
    "sacred-geometry-mandala",
    "Sacred Geometry Mandala",
    "Circles and a central rosette",
    "Interlocking circles, petals, and hexagonal forms create a precise, peaceful pattern.",
    "geometria-sagrada.webp",
    "geometria-sagrada",
    "geometric",
    ["sacred geometry", "circles", "mandala"],
  ),
  page(
    "fantasy-castle-mandala",
    "Fantasy Castle Mandala",
    "Towers, stars, and vines",
    "A storybook castle rises among stars and clean-lined vines.",
    "castillo-de-fantasia.webp",
    "castillo-de-fantasia",
    "fantasy-space",
    ["castle", "fantasy", "fairytale"],
  ),
  page(
    "hot-air-balloon-mandala",
    "Hot Air Balloon Mandala",
    "Flying through clouds",
    "A decorated hot air balloon floats among clouds inside a circular composition.",
    "globo-aerostatico.webp",
    "globo-aerostatico",
    "fantasy-space",
    ["balloon", "clouds", "travel"],
  ),
  page(
    "bees-and-sunflowers-mandala",
    "Bees and Sunflowers Mandala",
    "Bees among bright blooms",
    "Bees and sunflowers come together in a sunny summer-inspired coloring page.",
    "abejas-y-girasoles.webp",
    "abejas-y-girasoles",
    "flowers-nature",
    ["bees", "sunflowers", "summer"],
  ),
  page(
    "under-the-sea-mandala",
    "Under the Sea Mandala",
    "Fish, coral, and seaweed",
    "A fish swims among coral, seaweed, and bubbles in an open underwater scene.",
    "fondo-marino.webp",
    "fondo-marino",
    "animals",
    ["fish", "ocean", "coral"],
  ),
  page(
    "woodland-cottage-mandala",
    "Woodland Cottage Mandala",
    "Cottage, mushrooms, and ferns",
    "A cozy cottage sits among mushrooms, ferns, and trees inside a natural wreath.",
    "casita-del-bosque.webp",
    "casita-del-bosque",
    "ocean-landscapes",
    ["cottage", "forest", "mushrooms"],
  ),
  page(
    "butterflies-and-lavender",
    "Butterflies and Lavender",
    "Wings and fragrant flowers",
    "Elegant butterflies flutter among lavender sprigs in a balanced botanical design.",
    "mariposas-y-lavanda.webp",
    "mariposas-y-lavanda",
    "flowers-nature",
    ["butterflies", "lavender", "flowers"],
  ),
  page(
    "crystals-and-stars-mandala",
    "Crystals and Stars Mandala",
    "Minerals and night sky",
    "Faceted crystals meet stars and crescent moons in a geometric composition.",
    "cristales-y-estrellas.webp",
    "cristales-y-estrellas",
    "geometric",
    ["crystals", "stars", "magic"],
  ),
  page(
    "japanese-garden-mandala",
    "Japanese Garden Mandala",
    "Bridge, water, and maples",
    "A curved bridge, lantern, and maple leaves form a quiet garden scene.",
    "jardin-japones.webp",
    "jardin-japones",
    "ocean-landscapes",
    ["japanese garden", "bridge", "nature"],
  ),
  page(
    "eastern-dragon-mandala",
    "Eastern Dragon Mandala",
    "Dragon, clouds, and flowers",
    "An eastern dragon winds through clouds and flowers inside a circular frame.",
    "dragon-oriental.webp",
    "dragon-oriental",
    "fantasy-space",
    ["dragon", "fantasy", "clouds"],
  ),
  page(
    "whale-and-ocean-mandala",
    "Whale and Ocean Mandala",
    "Whale among the waves",
    "A calm whale swims between rolling waves, bubbles, and broad sea plants.",
    "ballena-y-oceano.webp",
    "ballena-y-oceano",
    "animals",
    ["whale", "ocean", "animals"],
  ),
  page(
    "bicycle-with-flowers",
    "Bicycle with Flowers",
    "A floral basket ride",
    "A classic bicycle with a flower-filled basket makes a cheerful printable page.",
    "bicicleta-con-flores.webp",
    "bicicleta-con-flores",
    "cozy-things",
    ["bicycle", "flowers", "spring"],
  ),
  page(
    "storybook-houses-mandala",
    "Storybook Houses Mandala",
    "Curved roofs and tiny blooms",
    "Three whimsical houses with curved roofs and flowers create a compact fantasy scene.",
    "casas-de-cuento.webp",
    "casas-de-cuento",
    "fantasy-space",
    ["houses", "fairytale", "fantasy"],
  ),
  page(
    "crescent-moon-with-flowers",
    "Crescent Moon with Flowers",
    "A botanical night sky",
    "A large crescent moon cradles flowers and leaves beneath a simple starry sky.",
    "luna-con-flores.webp",
    "luna-con-flores",
    "fantasy-space",
    ["moon", "flowers", "stars"],
  ),
  page(
    "floral-teapot",
    "Floral Teapot",
    "Tea, steam, and petals",
    "A round teapot sits among flowers and leaves in a warm, inviting composition.",
    "tetera-con-flores.webp",
    "tetera-con-flores",
    "cozy-things",
    ["teapot", "flowers", "cozy"],
  ),
  page(
    "fairy-garden-mandala",
    "Fairy Garden Mandala",
    "Fairy, flowers, and mushrooms",
    "A tiny fairy explores flowers, mushrooms, and an enchanted garden door.",
    "jardin-de-hadas.webp",
    "jardin-de-hadas",
    "fantasy-space",
    ["fairy", "garden", "fantasy"],
  ),
  page(
    "window-with-plants",
    "Window with Plants",
    "An indoor garden nook",
    "An arched window is surrounded by hanging plants and pots in a cozy scene.",
    "ventana-con-plantas.webp",
    "ventana-con-plantas",
    "cozy-things",
    ["plants", "window", "cozy"],
  ),
  page(
    "mountains-and-moon-mandala",
    "Mountains and Moon Mandala",
    "A peaceful night landscape",
    "Mountains, pine trees, and a crescent moon form a serene printable night scene.",
    "montanas-y-luna.webp",
    "montanas-y-luna",
    "ocean-landscapes",
    ["mountains", "moon", "nature"],
  ),
] as const;

export const categories = [
  {
    slug: "animals",
    title: "Animal Coloring Pages",
    short: "Cats, wildlife, and gentle creatures",
    description:
      "Printable animal coloring pages featuring cats, owls, elephants, butterflies, ocean animals, and more.",
    hero: "floral-cat-mandala",
    tip: "Color the main animal first, then choose a contrasting palette for the surrounding pattern so the character stays easy to see.",
  },
  {
    slug: "flowers-nature",
    title: "Flower & Nature Coloring Pages",
    short: "Blooms, leaves, bees, and gardens",
    description:
      "Free flower and nature coloring pages with broad petals, leafy patterns, gardens, and bright seasonal details.",
    hero: "easy-floral-mandala",
    tip: "Try two or three flower colors and repeat them around the page. A smaller palette makes botanical patterns feel balanced.",
  },
  {
    slug: "geometric",
    title: "Geometric Mandala Coloring Pages",
    short: "Circles, spirals, and symmetry",
    description:
      "Printable geometric mandalas built from circles, spirals, stars, and repeating shapes in easy and medium levels.",
    hero: "sacred-geometry-mandala",
    tip: "Pick three or four colors and repeat them across matching shapes to emphasize the symmetry.",
  },
  {
    slug: "fantasy-space",
    title: "Fantasy & Space Coloring Pages",
    short: "Castles, moons, dragons, and stars",
    description:
      "Fantasy coloring pages filled with castles, dragons, fairies, planets, moons, and storybook scenes.",
    hero: "fantasy-castle-mandala",
    tip: "Use deeper colors around the edges and brighter shades for stars, magic, and the main character.",
  },
  {
    slug: "ocean-landscapes",
    title: "Ocean & Landscape Coloring Pages",
    short: "Forests, coastlines, and mountains",
    description:
      "Printable landscape and ocean coloring pages with forests, lighthouses, gardens, mountains, shells, and waves.",
    hero: "lighthouse-and-waves-mandala",
    tip: "Separate the sky, land, and water with distinct color families, then add simple gradients to give the scene depth.",
  },
  {
    slug: "cozy-things",
    title: "Cozy Coloring Pages",
    short: "Books, tea, music, and home",
    description:
      "Cozy printable coloring pages featuring books, tea, coffee, music, bicycles, and plant-filled corners.",
    hero: "books-and-flowers",
    tip: "Choose the color of the main object first, then use softer complementary colors for flowers and decorations.",
  },
] as const;

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}
export function getPage(slug: string) {
  return coloringPages.find((item) => item.slug === slug);
}
export function getPagesByCategory(slug: string) {
  return coloringPages.filter((item) => item.category === slug);
}
export function getRelated(item: ColoringPage) {
  return coloringPages
    .filter(
      (candidate) =>
        candidate.slug !== item.slug &&
        (candidate.category === item.category ||
          candidate.tags.some((tag) => item.tags.includes(tag))),
    )
    .slice(0, 4);
}


export const seoExperiments: Record<string, NonNullable<ColoringPage["seoContent"]>> = {
  "capybara-with-flowers": {
    about: "This capybara coloring page places a relaxed capybara at the center of a broad floral wreath. The large animal shape is easy to identify, while the surrounding petals and leaves add enough detail for a longer coloring session without making the picture feel crowded. It works well for children who like cute animals and for anyone looking for a calm nature-themed printable.",
    ideas: "Try warm brown or sandy tones for the capybara and use brighter pinks, yellows, oranges, or purples for the flowers. Keeping the leaves in two shades of green helps the animal stand out from the wreath. For a softer result, repeat a small palette around the circle instead of giving every flower a different color.",
    printTip: "Print on A4 or Letter paper using fit-to-page. Colored pencils suit the smaller floral details, while crayons or markers work well on the larger capybara shape."
  },
  "floral-cat-mandala": {
    about: "This floral cat coloring page combines a clear cat face with a symmetrical arrangement of petals and leaves. The centered composition keeps the cat as the focal point while the botanical shapes create a mandala-like frame. The mix of larger facial areas and smaller decorative sections makes it suitable for colorists who want an animal picture with moderate detail.",
    ideas: "Choose the cat color first, then build the flower palette around it. A gray, ginger, cream, or black-and-white cat can be paired with two or three repeating flower colors. Using a darker shade on the outer leaves and lighter colors near the face can make the cat appear more prominent.",
    printTip: "For crisp botanical details, print at full quality on A4 or Letter paper. Pencils allow more control around the face and leaves; markers are best used on heavier paper."
  },
  "botanical-elephant-mandala": {
    about: "This elephant coloring page features a front-facing elephant head surrounded by large botanical shapes. Broad ears and the central trunk create strong, easy-to-follow outlines, while petals and leaves around the animal provide additional sections to color. The balanced arrangement gives the printable a decorative mandala feel without relying on tiny repetitive details.",
    ideas: "Classic gray works well for the elephant, but blue, violet, or warm earth tones can create a more imaginative version. Use contrasting flower colors around the ears and repeat the same greens in the leaves to keep the composition balanced. Shading the ears slightly darker than the face can add simple depth.",
    printTip: "Use fit-to-page when printing on A4 or Letter paper. Colored pencils are useful for gentle shading on the elephant, while markers can make the surrounding flowers more vivid."
  },
  "fantasy-castle-mandala": {
    about: "This fantasy castle coloring page shows a storybook castle with tall towers surrounded by stars and decorative vines. The architecture provides clear vertical shapes to color, while the smaller sky and plant details give the page a magical atmosphere. It is a good choice for children and fantasy fans who enjoy castles without an overly complicated scene.",
    ideas: "Try pale stone, pink, blue, or purple for the castle and reserve brighter yellows for windows and stars. A deep blue or violet sky theme can create a nighttime scene, while greens and flower colors can make the vines stand apart from the towers. Metallic-style yellow and gray pencil tones also suit the fantasy details.",
    printTip: "Print on A4 or Letter paper with fit-to-page selected. Pencils are useful around windows, stars, and vines; thicker paper is preferable if you plan to use markers."
  },
  "lighthouse-and-waves-mandala": {
    about: "This lighthouse coloring page combines a tall coastal lighthouse with rolling waves and shore-inspired details. The lighthouse creates a strong central focal point, while the curved water shapes provide movement around it. Medium-sized sections make the design approachable while still offering enough detail for a relaxing ocean-themed coloring session.",
    ideas: "A classic red-and-white lighthouse stands out against blue or turquoise waves, but navy, yellow, or pastel combinations work too. Use several blue tones in the water to separate the waves, then add sandy or rocky earth colors to coastal details. A pale sky keeps attention on the lighthouse.",
    printTip: "Print on standard A4 or Letter paper using fit-to-page. Colored pencils make it easy to layer different blues in the waves; markers work best on heavier paper to prevent bleed-through."
  },
  "geometric-cat-mandala": {
    about: "This geometric cat coloring page builds a seated cat from soft angular shapes and surrounds it with a balanced ring of leaves. The clear face, ears, and body give the picture an obvious focal point, while the repeated botanical details add a moderate level of complexity without creating very small spaces.",
    ideas: "Try gray, ginger, cream, or black for the cat and use a limited set of greens around the leaves. For a more playful version, color the geometric sections of the cat in neighboring shades such as blue and violet. Repeating two accent colors around the wreath will keep the symmetrical design easy to read.",
    printTip: "Print on A4 or Letter paper with fit-to-page enabled. Colored pencils are useful for changing shade between the geometric sections, while markers work best on thicker paper."
  },
  "geometric-owl-mandala": {
    about: "This owl coloring page centers a front-facing owl with large round eyes, broad feather shapes, and a decorative botanical frame. The face offers strong symmetrical features and the surrounding leaves add extra areas to color, creating a medium-detail printable that still has clearly separated sections.",
    ideas: "Natural browns, creams, and golds suit the owl, while blues or purples can create a more imaginative bird. Keep the eyes bright so they remain the focal point, then repeat two or three colors through the feathers. Green leaves or a contrasting botanical palette can separate the owl from its frame.",
    printTip: "Use A4 or Letter paper and select fit-to-page. Pencils are ideal for layering feather tones and working around the eyes; use heavier paper for markers."
  },
  "geometric-butterfly-mandala": {
    about: "This butterfly coloring page features open geometric wings inside a simple leafy wreath. Matching shapes on the left and right wings make the design naturally symmetrical, while the broad wing sections leave room for gradients, repeated patterns, or contrasting colors. The surrounding leaves add detail without overwhelming the central butterfly.",
    ideas: "Choose two or three colors for the wings and mirror them on both sides to emphasize symmetry. Yellow and orange create a warm butterfly, while blue, turquoise, and violet give a cooler look. A simple green wreath helps brighter wing colors stand out clearly.",
    printTip: "Print at high quality on A4 or Letter paper. Colored pencils work especially well for gradients inside the wings; markers can produce bold symmetrical blocks of color on heavier paper."
  },
  "sun-and-moon-mandala": {
    about: "This sun and moon coloring page brings two celestial symbols together with stars and symmetrical leaves. The contrasting sun and crescent shapes give the composition two distinct focal areas, while the surrounding decorative elements create a balanced fantasy design with comfortable spaces for coloring.",
    ideas: "Use warm yellows, oranges, and reds for the sun and cooler blues, violets, or silvers for the moon. A dark blue background effect around the stars can strengthen the night-sky theme. Repeating the same greens or muted colors in the leaves helps connect the warm and cool halves.",
    printTip: "Print on A4 or Letter paper using fit-to-page. Pencils make it easy to blend warm and cool gradients; gel pens can be used sparingly for small star details."
  },
  "planets-and-stars-mandala": {
    about: "This space coloring page arranges planets, orbital lines, and stars into a clear geometric scene. Different planet sizes provide several focal points, while the curved orbits guide the eye around the composition. The design offers enough detail for older children and adults without depending on tiny repetitive sections.",
    ideas: "Give each planet its own palette: rusty orange for a Mars-inspired world, blue and green for an Earth-like planet, or purple and turquoise for imaginary worlds. Yellow stars can add contrast, and a dark blue or violet space palette can make the planets appear brighter.",
    printTip: "Print on A4 or Letter paper at high quality. Colored pencils are useful for shading round planets, while markers can create stronger flat colors on heavier paper."
  },
  "hot-air-balloon-mandala": {
    about: "This hot air balloon coloring page shows a decorated balloon floating among soft clouds inside a circular composition. The large balloon canopy is divided into clear sections that invite repeated color patterns, while the basket and clouds add smaller details without making the printable too intricate.",
    ideas: "Alternate bright colors across the balloon panels or use a gradual rainbow from one side to the other. Warm reds and yellows create a sunny look, while teal, blue, and violet produce a calmer palette. Keep the clouds pale so the decorated balloon remains the main focus.",
    printTip: "Print on A4 or Letter paper with fit-to-page selected. Crayons and markers suit the broad balloon panels; pencils give more control over the basket and smaller decorative lines."
  },
  "under-the-sea-mandala": {
    about: "This under-the-sea coloring page places a fish among coral, seaweed, and bubbles in an open underwater scene. The central fish is easy to identify and the surrounding marine plants create varied shapes to color. Larger water-themed elements make the page approachable while still providing plenty of visual interest.",
    ideas: "Use orange, yellow, blue, or striped combinations for the fish and vary the coral with pinks, reds, and purples. Several shades of green or turquoise can separate the seaweed. Leaving bubbles very pale or adding a light blue edge helps them stay distinct from the other ocean details.",
    printTip: "Print on A4 or Letter paper using fit-to-page. Pencils are useful for fish stripes and coral shading, while markers can create vivid underwater colors on thicker paper."
  },
  "woodland-cottage-mandala": {
    about: "This woodland cottage coloring page features a small cozy house surrounded by mushrooms, ferns, and trees. The cottage provides a clear central subject, while the forest plants form a natural frame with a mixture of broad and medium-sized coloring spaces. It suits anyone who enjoys storybook homes and woodland scenes.",
    ideas: "Try warm brown or cream walls with a red, green, or blue roof, then use earthy greens around the ferns and trees. Red-and-white mushrooms can add bright accents. For an autumn version, replace some greens with orange, ochre, and deep red.",
    printTip: "Print on A4 or Letter paper at high quality. Colored pencils are well suited to wood, foliage, and mushroom details; heavier paper is recommended for markers."
  },
  "japanese-garden-mandala": {
    about: "This Japanese garden coloring page combines a curved bridge, a traditional lantern, water, and maple leaves in a quiet landscape scene. The bridge gives the picture a strong central structure, while foliage and garden details create smaller areas around it. The composition is designed for relaxed, medium-detail coloring.",
    ideas: "A red or warm wooden bridge can contrast with green foliage and blue water. For an autumn garden, use red, orange, and gold maple leaves with muted stone colors for the lantern. Keeping the water in pale blue or turquoise tones helps the bridge and leaves remain prominent.",
    printTip: "Print on A4 or Letter paper using fit-to-page. Pencils work well for subtle water and leaf shading; markers are best on thicker paper if you want stronger colors."
  },
  "bicycle-with-flowers": {
    about: "This bicycle coloring page shows a classic bike with a basket filled with flowers. The wheels and frame create clean geometric lines, while petals and leaves add softer decorative detail. The combination gives the printable a cheerful springtime feel and a mix of large and smaller areas to color.",
    ideas: "Color the bicycle frame in a strong single shade such as red, blue, mint, or yellow, then choose two or three complementary flower colors for the basket. Darker tires and a neutral basket help the floral arrangement stand out. Greens can be repeated through the leaves for a cohesive look.",
    printTip: "Print on A4 or Letter paper at high quality. Pencils give good control around spokes and flowers, while markers are useful for the larger bicycle frame on heavier paper."
  }
};
