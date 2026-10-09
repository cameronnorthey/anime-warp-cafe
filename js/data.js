/* Anime Warp Café — Portal Menu Builder data.
   Five anime tropes, each with three matching menu items. Fictional café
   content — not real dishes or prices from any actual business. */

const TROPES = [
  {
    id: "isekai",
    name: "Isekai",
    tagline: "You wake up in another world. At least the food is good here.",
    items: [
      {
        title: "Reincarnation Ramen",
        note: "A rich shoyu broth you'll want to come back for — even in your next life.",
        price: "$14",
      },
      {
        title: "Cheat Skill Curry",
        note: "Loaded with every topping we had on hand, because apparently you only get one overpowered ability and we chose \"more toppings.\"",
        price: "$13",
      },
      {
        title: "Another World Waffles",
        note: "Belgian waffles with a fruit-compote \"portal\" drizzle across the middle.",
        price: "$9.50",
      },
    ],
  },
  {
    id: "shonen",
    name: "Shōnen",
    tagline: "Power up. Rival up. Eat up.",
    items: [
      {
        title: "Power-Up Parfait",
        note: "Layered matcha, mango, and a \"final form\" cookie crumble on top.",
        price: "$8.50",
      },
      {
        title: "Rival Ramen Bowl",
        note: "Two broths, one bowl — spicy tonkotsu and shoyu, facing off down the middle.",
        price: "$15",
      },
      {
        title: "Training Arc Toast",
        note: "Thick-cut milk bread, whipped honey butter, sea salt — built to fuel a montage.",
        price: "$7",
      },
    ],
  },
  {
    id: "slice-of-life",
    name: "Slice of Life",
    tagline: "Nothing much happens. That's the whole point.",
    items: [
      {
        title: "Cozy Afternoon Curry",
        note: "Mild vegetable curry, soft-boiled egg, a little rice shaped like a cat.",
        price: "$13",
      },
      {
        title: "Sunday Sunshine Pancakes",
        note: "A fluffy stack, honey butter, and whatever fruit's in season this week.",
        price: "$10.50",
      },
      {
        title: "Comfort Corner Cocoa",
        note: "Steamed milk, dark chocolate, and a marshmallow cloud on top.",
        price: "$6",
      },
    ],
  },
  {
    id: "mecha",
    name: "Mecha",
    tagline: "Suit up. Sit down. Refuel before the next sortie.",
    items: [
      {
        title: "Mobile Suit Melt",
        note: "A triple-decker grilled cheese, plated like it's ready for deployment.",
        price: "$9",
      },
      {
        title: "Cockpit Cold Brew",
        note: "Nitro cold brew, oat milk, a slow-poured cloud on top.",
        price: "$5.50",
      },
      {
        title: "Ace Pilot Plate",
        note: "Eggs, rice, and grilled sausage — fuel for a morning briefing.",
        price: "$12",
      },
    ],
  },
  {
    id: "shojo",
    name: "Shōjo",
    tagline: "Sparkles, confessions, and a little melodrama with your snack.",
    items: [
      {
        title: "Sparkle Berry Tart",
        note: "Mixed berries, a dusting of edible shimmer, one perfect mint leaf.",
        price: "$7.50",
      },
      {
        title: "Confession-Under-the-Cherry-Tree Tea",
        note: "Cherry blossom–scented black tea, served in our least chipped teacup.",
        price: "$5",
      },
      {
        title: "Best Friends Bento",
        note: "A shareable two-person snack board — built for two, no subtext required.",
        price: "$16",
      },
    ],
  },
];
