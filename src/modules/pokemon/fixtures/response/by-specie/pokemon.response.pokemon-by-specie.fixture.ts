import type { IResponsePokemonSpecie } from '@/modules/pokemon/pokemon.interface';

export const RESPONSE_POKEMON_BY_SPECIE_NAME_FIXTURE_BULBASAUR: IResponsePokemonSpecie =
  {
    id: 1,
    name: 'bulbasaur',
    order: 1,
    names: [
      {
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        name: 'フシギダネ',
      },
      {
        language: {
          name: 'roomaji',
          url: 'https://pokeapi.co/api/v2/language/2/',
        },
        name: 'Fushigidane',
      },
      {
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        name: '이상해씨',
      },
      {
        language: {
          name: 'zh-Hant',
          url: 'https://pokeapi.co/api/v2/language/4/',
        },
        name: '妙蛙種子',
      },
      {
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        name: 'Bulbizarre',
      },
      {
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        name: 'Bisasam',
      },
      {
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        name: 'Bulbasaur',
      },
      {
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        name: 'Bulbasaur',
      },
      {
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        name: 'Bulbasaur',
      },
      {
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        name: 'フシギダネ',
      },
      {
        language: {
          name: 'zh-Hans',
          url: 'https://pokeapi.co/api/v2/language/12/',
        },
        name: '妙蛙种子',
      },
    ],
    color: {
      name: 'green',
      url: 'https://pokeapi.co/api/v2/pokemon-color/5/',
    },
    shape: {
      name: 'quadruped',
      url: 'https://pokeapi.co/api/v2/pokemon-shape/8/',
    },
    genera: [
      {
        genus: 'たねポケモン',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
      },
      {
        genus: '씨앗포켓몬',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
      },
      {
        genus: '種子寶可夢',
        language: {
          name: 'zh-Hant',
          url: 'https://pokeapi.co/api/v2/language/4/',
        },
      },
      {
        genus: 'Pokémon Graine',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
      },
      {
        genus: 'Samen-Pokémon',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
      },
      {
        genus: 'Pokémon Semilla',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
      },
      {
        genus: 'Pokémon Seme',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
      },
      {
        genus: 'Seed Pokémon',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
      },
      {
        genus: 'たねポケモン',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
      },
      {
        genus: '种子宝可梦',
        language: {
          name: 'zh-Hans',
          url: 'https://pokeapi.co/api/v2/language/12/',
        },
      },
    ],
    habitat: {
      name: 'grassland',
      url: 'https://pokeapi.co/api/v2/pokemon-habitat/3/',
    },
    is_baby: false,
    varieties: [
      {
        is_default: true,
        pokemon: {
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon/1/',
        },
      },
    ],
    egg_groups: [
      {
        name: 'monster',
        url: 'https://pokeapi.co/api/v2/egg-group/1/',
      },
      {
        name: 'plant',
        url: 'https://pokeapi.co/api/v2/egg-group/7/',
      },
    ],
    generation: {
      name: 'generation-i',
      url: 'https://pokeapi.co/api/v2/generation/1/',
    },
    growth_rate: {
      name: 'medium-slow',
      url: 'https://pokeapi.co/api/v2/growth-rate/4/',
    },
    gender_rate: 1,
    is_mythical: false,
    is_legendary: false,
    capture_rate: 45,
    hatch_counter: 20,
    base_happiness: 50,
    evolution_chain: {
      url: 'https://pokeapi.co/api/v2/evolution-chain/1/',
    },
    pokedex_numbers: [
      {
        entry_number: 1,
        pokedex: {
          name: 'national',
          url: 'https://pokeapi.co/api/v2/pokedex/1/',
        },
      },
      {
        entry_number: 1,
        pokedex: {
          name: 'kanto',
          url: 'https://pokeapi.co/api/v2/pokedex/2/',
        },
      },
      {
        entry_number: 226,
        pokedex: {
          name: 'original-johto',
          url: 'https://pokeapi.co/api/v2/pokedex/3/',
        },
      },
      {
        entry_number: 231,
        pokedex: {
          name: 'updated-johto',
          url: 'https://pokeapi.co/api/v2/pokedex/7/',
        },
      },
      {
        entry_number: 80,
        pokedex: {
          name: 'kalos-central',
          url: 'https://pokeapi.co/api/v2/pokedex/12/',
        },
      },
      {
        entry_number: 1,
        pokedex: {
          name: 'letsgo-kanto',
          url: 'https://pokeapi.co/api/v2/pokedex/26/',
        },
      },
      {
        entry_number: 68,
        pokedex: {
          name: 'isle-of-armor',
          url: 'https://pokeapi.co/api/v2/pokedex/28/',
        },
      },
      {
        entry_number: 164,
        pokedex: {
          name: 'blueberry',
          url: 'https://pokeapi.co/api/v2/pokedex/33/',
        },
      },
    ],
    forms_switchable: false,
    form_descriptions: [],
    pal_park_encounters: [
      {
        area: {
          name: 'field',
          url: 'https://pokeapi.co/api/v2/pal-park-area/2/',
        },
        base_score: 50,
        rate: 30,
      },
    ],
    flavor_text_entries: [
      {
        flavor_text:
          'A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'red',
          url: 'https://pokeapi.co/api/v2/version/1/',
        },
      },
      {
        flavor_text:
          'A strange seed was\nplanted on its\nback at birth.\fThe plant sprouts\nand grows with\nthis POKéMON.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'blue',
          url: 'https://pokeapi.co/api/v2/version/2/',
        },
      },
      {
        flavor_text:
          'It can go for days\nwithout eating a\nsingle morsel.\fIn the bulb on\nits back, it\nstores energy.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'yellow',
          url: 'https://pokeapi.co/api/v2/version/3/',
        },
      },
      {
        flavor_text:
          'The seed on its\nback is filled\nwith nutrients.\fThe seed grows\nsteadily larger as\nits body grows.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'gold',
          url: 'https://pokeapi.co/api/v2/version/4/',
        },
      },
      {
        flavor_text:
          'It carries a seed\non its back right\nfrom birth. As it\fgrows older, the\nseed also grows\nlarger.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'silver',
          url: 'https://pokeapi.co/api/v2/version/5/',
        },
      },
      {
        flavor_text:
          'While it is young,\nit uses the\nnutrients that are\fstored in the\nseeds on its back\nin order to grow.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'crystal',
          url: 'https://pokeapi.co/api/v2/version/6/',
        },
      },
      {
        flavor_text:
          'BULBASAUR can be seen napping in\nbright sunlight.\nThere is a seed on its back.\fBy soaking up the sun’s rays, the seed\ngrows progressively larger.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'ruby',
          url: 'https://pokeapi.co/api/v2/version/7/',
        },
      },
      {
        flavor_text:
          'BULBASAUR can be seen napping in\nbright sunlight.\nThere is a seed on its back.\fBy soaking up the sun’s rays, the seed\ngrows progressively larger.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'sapphire',
          url: 'https://pokeapi.co/api/v2/version/8/',
        },
      },
      {
        flavor_text:
          'BULBASAUR can be seen napping in bright\nsunlight. There is a seed on its back.\nBy soaking up the sun’s rays, the seed\ngrows progressively larger.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'emerald',
          url: 'https://pokeapi.co/api/v2/version/9/',
        },
      },
      {
        flavor_text:
          'There is a plant seed on its back right\nfrom the day this POKéMON is born.\nThe seed slowly grows larger.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'firered',
          url: 'https://pokeapi.co/api/v2/version/10/',
        },
      },
      {
        flavor_text:
          'A strange seed was planted on its back at\nbirth. The plant sprouts and grows with\nthis POKéMON.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'leafgreen',
          url: 'https://pokeapi.co/api/v2/version/11/',
        },
      },
      {
        flavor_text:
          'For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'diamond',
          url: 'https://pokeapi.co/api/v2/version/12/',
        },
      },
      {
        flavor_text:
          'For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'pearl',
          url: 'https://pokeapi.co/api/v2/version/13/',
        },
      },
      {
        flavor_text:
          'For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'platinum',
          url: 'https://pokeapi.co/api/v2/version/14/',
        },
      },
      {
        flavor_text:
          'The seed on its back is filled\nwith nutrients. The seed grows\nsteadily larger as its body grows.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'heartgold',
          url: 'https://pokeapi.co/api/v2/version/15/',
        },
      },
      {
        flavor_text:
          'It carries a seed on its back right\nfrom birth. As it grows older, the\nseed also grows larger.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'soulsilver',
          url: 'https://pokeapi.co/api/v2/version/16/',
        },
      },
      {
        flavor_text:
          'Au matin de sa vie, la graine sur\nson dos lui fournit les éléments\ndont il a besoin pour grandir.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'black',
          url: 'https://pokeapi.co/api/v2/version/17/',
        },
      },
      {
        flavor_text:
          'For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'black',
          url: 'https://pokeapi.co/api/v2/version/17/',
        },
      },
      {
        flavor_text:
          'Au matin de sa vie, la graine sur\nson dos lui fournit les éléments\ndont il a besoin pour grandir.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'white',
          url: 'https://pokeapi.co/api/v2/version/18/',
        },
      },
      {
        flavor_text:
          'For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'white',
          url: 'https://pokeapi.co/api/v2/version/18/',
        },
      },
      {
        flavor_text:
          'For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'black-2',
          url: 'https://pokeapi.co/api/v2/version/21/',
        },
      },
      {
        flavor_text:
          'For some time after its birth, it\ngrows by gaining nourishment from\nthe seed on its back.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'white-2',
          url: 'https://pokeapi.co/api/v2/version/22/',
        },
      },
      {
        flavor_text:
          'うまれたときから　せなかに\nふしぎな　タネが　うえてあって\nからだと　ともに　そだつという。',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          '태어났을 때부터 등에\n이상한 씨앗이 심어져 있으며\n몸과 함께 자란다고 한다.',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          'Il a une étrange graine plantée sur son dos.\nElle grandit avec lui depuis sa naissance.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          'Dieses Pokémon trägt von Geburt an einen Samen\nauf dem Rücken, der mit ihm keimt und wächst.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          'Una rara semilla le fue plantada en el lomo al nacer.\nLa planta brota y crece con este Pokémon.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          'Alla nascita gli è stato piantato sulla schiena un seme\nraro. La pianta sboccia e cresce con lui.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          'A strange seed was planted on its back at birth.\nThe plant sprouts and grows with this Pokémon.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          '生まれたときから　背中に\n不思議な　タネが　植えてあって\n体と　ともに　育つという。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          'うまれてから　しばらくの　あいだは\nせなかの　タネから　えいようを\nもらって　おおきく　そだつ。',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          '태어나서부터 얼마 동안은\n등의 씨앗으로부터 영양을\n공급받아 크게 성장한다.',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          'Au matin de sa vie, la graine sur son dos lui fournit\nles éléments dont il a besoin pour grandir.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          'Nach der Geburt nimmt es für eine Weile Nährstoffe\nüber den Samen auf seinem Rücken auf.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          'Después de nacer, crece alimentándose de las\nsemillas de su lomo.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          'Dopo la nascita, cresce traendo nutrimento dal seme\npiantato sul suo dorso.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          'For some time after its birth, it grows by gaining\nnourishment from the seed on its back.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          '生まれてから　しばらくの　あいだは\n背中の　タネから　栄養を　もらって\n大きく　育つ。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          'ひなたで　ひるねを　する　すがたを　みかける。\nたいようの　ひかりを　いっぱい　あびることで\nせなかの　タネが　おおきく　そだつのだ。',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          '양지에서 낮잠 자는 모습을 볼 수 있다.\n태양의 빛을 많이 받으면\n등의 씨앗이 크게 자란다.',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          'Bulbizarre passe son temps à faire la sieste sous le soleil.\nIl y a une graine sur son dos. Il absorbe les rayons du soleil\npour faire doucement pousser la graine.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          'Bisasam macht gern einmal ein Nickerchen im\nSonnenschein. Auf seinem Rücken trägt es einen\nSamen. Indem es Sonnenstrahlen aufsaugt,\nwird der Samen zunehmend größer.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          'A Bulbasaur es fácil verle echándose una siesta al sol.\nLa semilla que tiene en el lomo va creciendo cada vez más\na medida que absorbe los rayos del sol.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          'È possibile vedere Bulbasaur mentre schiaccia un pisolino\nsotto il sole. Ha un seme piantato sulla schiena. Grazie ai\nraggi solari il seme cresce ingrandendosi progressivamente.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          'Bulbasaur can be seen napping in bright sunlight.\nThere is a seed on its back. By soaking up the sun’s rays,\nthe seed grows progressively larger.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          '日なたで　昼寝を　する　姿を　見かける。\n太陽の　光を　いっぱい　浴びることで\n背中の　タネが　大きく　育つのだ。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          'ひなたで　ひるねを　する　すがたを　みかける。\nたいようの　ひかりを　いっぱい　あびることで\nせなかの　タネが　おおきく　そだつのだ。',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          '양지에서 낮잠 자는 모습을 볼 수 있다.\n태양의 빛을 많이 받으면\n등의 씨앗이 크게 자란다.',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          'Bulbizarre passe son temps à faire la sieste sous le soleil.\nIl y a une graine sur son dos. Il absorbe les rayons du soleil\npour faire doucement pousser la graine.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          'Bisasam macht gern einmal ein Nickerchen im\nSonnenschein. Auf seinem Rücken trägt es einen\nSamen. Indem es Sonnenstrahlen aufsaugt,\nwird er zunehmend größer.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          'A Bulbasaur es fácil verle echándose una siesta al sol.\nLa semilla que tiene en el lomo va creciendo cada vez más\na medida que absorbe los rayos del sol.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          'È possibile vedere Bulbasaur mentre schiaccia un pisolino\nsotto il sole. Ha un seme piantato sulla schiena. Grazie ai\nraggi solari il seme cresce ingrandendosi progressivamente.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          'Bulbasaur can be seen napping in bright sunlight.\nThere is a seed on its back. By soaking up the sun’s rays,\nthe seed grows progressively larger.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          '日なたで　昼寝を　する　姿を　見かける。\n太陽の　光を　いっぱい　浴びることで\n背中の　タネが　大きく　育つのだ。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          'なんにちだって　なにも　たべなくても\nげんき！　せなかのタネに　たくさん\nえいようが　あるから　へいきだ！',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          '며칠 동안 아무것도 먹지 않아도\n건강하다! 등에 있는 씨앗에는\n많은 영양분이 있어서 문제없다!',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          '背上的種子裡存著很多營養，\n所以就算好幾天不吃東西\n也能活得好好的！',
        language: {
          name: 'zh-Hant',
          url: 'https://pokeapi.co/api/v2/language/4/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          'Il peut survivre plusieurs jours sans manger\ngrâce aux nutriments contenus dans le bulbe\nsur son dos.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          'Es kommt tagelang ohne Nahrung aus, da es\nin den Samen auf seinem Rücken Nährstoffe\nspeichert.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          'Puede sobrevivir largo tiempo sin probar\nbocado gracias a los nutrientes que guarda\nen el bulbo del lomo.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          'Questo Pokémon può stare a lungo senza\nmangiare. Accumula energia nel bulbo che\nha sulla schiena.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          'It can go for days without eating a single morsel.\nIn the bulb on its back, it stores energy.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          '何日だって　なにも　食べなくても\n元気！　背中のタネに　たくさん\n栄養が　あるから　平気だ！',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          '背上的种子里储存着营养，\n所以即使好几天不吃东西\n也可以活得好好的！',
        language: {
          name: 'zh-Hans',
          url: 'https://pokeapi.co/api/v2/language/12/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          'なんにちだって　なにも　たべなくても\nげんき！　せなかのタネに　たくさん\nえいようが　あるから　へいきだ！',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          '며칠 동안 아무것도 먹지 않아도\n건강하다! 등에 있는 씨앗에는\n많은 영양분이 있어서 문제없다!',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          '背上的種子裡存著很多營養，\n所以就算好幾天不吃東西\n也能活得好好的！',
        language: {
          name: 'zh-Hant',
          url: 'https://pokeapi.co/api/v2/language/4/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          'Il peut survivre plusieurs jours sans manger\ngrâce aux nutriments contenus dans le bulbe\nsur son dos.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          'Es kommt tagelang ohne Nahrung aus, da es\nin den Samen auf seinem Rücken Nährstoffe\nspeichert.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          'Puede sobrevivir largo tiempo sin probar\nbocado gracias a los nutrientes que guarda\nen el bulbo del lomo.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          'Questo Pokémon può stare a lungo senza\nmangiare. Accumula energia nel bulbo che\nha sulla schiena.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          'It can go for days without eating a single morsel.\nIn the bulb on its back, it stores energy.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          '何日だって　なにも　食べなくても\n元気！　背中のタネに　たくさん\n栄養が　あるから　平気だ！',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          '背上的种子里储存着营养，\n所以即使好几天不吃东西\n也可以活得好好的！',
        language: {
          name: 'zh-Hans',
          url: 'https://pokeapi.co/api/v2/language/12/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          'うまれたときから　せなかに\nしょくぶつの　タネが　あって\nすこしずつ　おおきく　そだつ。',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          '태어났을 때부터 등에\n식물의 씨앗이 있으며\n조금씩 크게 자란다.',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          '從出生的時候開始\n背上就有一顆植物種子。\n這顆種子會漸漸地長大。',
        language: {
          name: 'zh-Hant',
          url: 'https://pokeapi.co/api/v2/language/4/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          'Il y a une graine sur son dos depuis sa naissance.\nElle grossit un peu chaque jour.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          'Dieses Pokémon trägt von Geburt an einen\nSamen auf dem Rücken, der im Laufe der Zeit\nkeimt und wächst.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          'Este Pokémon nace con una semilla en el lomo,\nque brota con el paso del tiempo.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          'Fin dalla nascita questo Pokémon ha sulla schiena\nun seme che cresce lentamente.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          'There is a plant seed on its back right from the\nday this Pokémon is born. The seed slowly\ngrows larger.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          '生まれたときから　背中に\n植物の　タネが　あって\n少しずつ　大きく　育つ。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          '从出生的时候开始，\n背上就有一颗植物种子。\n这颗种子会渐渐地长大。',
        language: {
          name: 'zh-Hans',
          url: 'https://pokeapi.co/api/v2/language/12/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          'うまれて　しばらくの　あいだ\nせなかの　タネに　つまった\nえいようを　とって　そだつ。',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          '태어나서 얼마 동안\n등의 씨앗에 담긴\n영양을 섭취하며 자란다.',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          '在出生後的一段時間內，\n牠會吸收背上種子裡\n儲存著的營養成長。',
        language: {
          name: 'zh-Hant',
          url: 'https://pokeapi.co/api/v2/language/4/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          'Quand il est jeune, il absorbe les nutriments\nconservés dans son dos pour grandir\net se développer.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          'Nach der Geburt nimmt es für eine Weile\nNährstoffe über den Samen auf seinem\nRücken auf.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          'Desde que nace, crece alimentándose de los\nnutrientes que contiene la semilla de su lomo.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          'Appena nato, trae nutrimento dalle sostanze\ncontenute nel seme sul dorso.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          'While it is young, it uses the nutrients that are\nstored in the seed on its back in order to grow.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          '生まれて　しばらくの　あいだ\n背中の　タネに　つまった\n栄養を　とって　育つ。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          '在出生后的一段时间内，\n它会吸收背上种子里\n储存着的营养成长。',
        language: {
          name: 'zh-Hans',
          url: 'https://pokeapi.co/api/v2/language/12/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
    ],
    evolves_from_species: null,
    has_gender_differences: false,
  };

export const RESPONSE_POKEMON_BY_SPECIE_NAME_FIXTURE_IVYSAUR: IResponsePokemonSpecie =
  {
    id: 2,
    name: 'ivysaur',
    order: 2,
    names: [
      {
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        name: 'フシギソウ',
      },
      {
        language: {
          name: 'roomaji',
          url: 'https://pokeapi.co/api/v2/language/2/',
        },
        name: 'Fushigisou',
      },
      {
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        name: '이상해풀',
      },
      {
        language: {
          name: 'zh-Hant',
          url: 'https://pokeapi.co/api/v2/language/4/',
        },
        name: '妙蛙草',
      },
      {
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        name: 'Herbizarre',
      },
      {
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        name: 'Bisaknosp',
      },
      {
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        name: 'Ivysaur',
      },
      {
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        name: 'Ivysaur',
      },
      {
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        name: 'Ivysaur',
      },
      {
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        name: 'フシギソウ',
      },
      {
        language: {
          name: 'zh-Hans',
          url: 'https://pokeapi.co/api/v2/language/12/',
        },
        name: '妙蛙草',
      },
    ],
    color: {
      name: 'green',
      url: 'https://pokeapi.co/api/v2/pokemon-color/5/',
    },
    shape: {
      name: 'quadruped',
      url: 'https://pokeapi.co/api/v2/pokemon-shape/8/',
    },
    genera: [
      {
        genus: 'たねポケモン',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
      },
      {
        genus: '씨앗포켓몬',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
      },
      {
        genus: '種子寶可夢',
        language: {
          name: 'zh-Hant',
          url: 'https://pokeapi.co/api/v2/language/4/',
        },
      },
      {
        genus: 'Pokémon Graine',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
      },
      {
        genus: 'Samen-Pokémon',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
      },
      {
        genus: 'Pokémon Semilla',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
      },
      {
        genus: 'Pokémon Seme',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
      },
      {
        genus: 'Seed Pokémon',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
      },
      {
        genus: 'たねポケモン',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
      },
      {
        genus: '种子宝可梦',
        language: {
          name: 'zh-Hans',
          url: 'https://pokeapi.co/api/v2/language/12/',
        },
      },
    ],
    habitat: {
      name: 'grassland',
      url: 'https://pokeapi.co/api/v2/pokemon-habitat/3/',
    },
    is_baby: false,
    varieties: [
      {
        is_default: true,
        pokemon: {
          name: 'ivysaur',
          url: 'https://pokeapi.co/api/v2/pokemon/2/',
        },
      },
    ],
    egg_groups: [
      {
        name: 'monster',
        url: 'https://pokeapi.co/api/v2/egg-group/1/',
      },
      {
        name: 'plant',
        url: 'https://pokeapi.co/api/v2/egg-group/7/',
      },
    ],
    generation: {
      name: 'generation-i',
      url: 'https://pokeapi.co/api/v2/generation/1/',
    },
    growth_rate: {
      name: 'medium-slow',
      url: 'https://pokeapi.co/api/v2/growth-rate/4/',
    },
    gender_rate: 1,
    is_mythical: false,
    is_legendary: false,
    capture_rate: 45,
    hatch_counter: 20,
    base_happiness: 50,
    evolution_chain: {
      url: 'https://pokeapi.co/api/v2/evolution-chain/1/',
    },
    pokedex_numbers: [
      {
        entry_number: 2,
        pokedex: {
          name: 'national',
          url: 'https://pokeapi.co/api/v2/pokedex/1/',
        },
      },
      {
        entry_number: 2,
        pokedex: {
          name: 'kanto',
          url: 'https://pokeapi.co/api/v2/pokedex/2/',
        },
      },
      {
        entry_number: 227,
        pokedex: {
          name: 'original-johto',
          url: 'https://pokeapi.co/api/v2/pokedex/3/',
        },
      },
      {
        entry_number: 232,
        pokedex: {
          name: 'updated-johto',
          url: 'https://pokeapi.co/api/v2/pokedex/7/',
        },
      },
      {
        entry_number: 81,
        pokedex: {
          name: 'kalos-central',
          url: 'https://pokeapi.co/api/v2/pokedex/12/',
        },
      },
      {
        entry_number: 2,
        pokedex: {
          name: 'letsgo-kanto',
          url: 'https://pokeapi.co/api/v2/pokedex/26/',
        },
      },
      {
        entry_number: 69,
        pokedex: {
          name: 'isle-of-armor',
          url: 'https://pokeapi.co/api/v2/pokedex/28/',
        },
      },
      {
        entry_number: 165,
        pokedex: {
          name: 'blueberry',
          url: 'https://pokeapi.co/api/v2/pokedex/33/',
        },
      },
    ],
    forms_switchable: false,
    form_descriptions: [],
    pal_park_encounters: [
      {
        area: {
          name: 'field',
          url: 'https://pokeapi.co/api/v2/pal-park-area/2/',
        },
        base_score: 80,
        rate: 10,
      },
    ],
    flavor_text_entries: [
      {
        flavor_text:
          'When the bulb on\nits back grows\nlarge, it appears\fto lose the\nability to stand\non its hind legs.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'red',
          url: 'https://pokeapi.co/api/v2/version/1/',
        },
      },
      {
        flavor_text:
          'When the bulb on\nits back grows\nlarge, it appears\fto lose the\nability to stand\non its hind legs.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'blue',
          url: 'https://pokeapi.co/api/v2/version/2/',
        },
      },
      {
        flavor_text:
          'The bulb on its\nback grows by\ndrawing energy.\fIt gives off an\naroma when it is\nready to bloom.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'yellow',
          url: 'https://pokeapi.co/api/v2/version/3/',
        },
      },
      {
        flavor_text:
          'Exposure to sun­\nlight adds to its\nstrength. Sunlight\falso makes the bud\non its back grow\nlarger.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'gold',
          url: 'https://pokeapi.co/api/v2/version/4/',
        },
      },
      {
        flavor_text:
          'If the bud on its\nback starts to\nsmell sweet, it\fis evidence that\nthe large flower\nwill soon bloom.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'silver',
          url: 'https://pokeapi.co/api/v2/version/5/',
        },
      },
      {
        flavor_text:
          'The bulb on its\nback grows as it\nabsorbs nutrients.\fThe bulb gives off\na pleasant aroma\nwhen it blooms.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'crystal',
          url: 'https://pokeapi.co/api/v2/version/6/',
        },
      },
      {
        flavor_text:
          'There is a bud on this POKéMON’s back.\nTo support its weight, IVYSAUR’s legs\nand trunk grow thick and strong.\fIf it starts spending more time lying\nin the sunlight, it’s a sign that the\nbud will bloom into a large flower soon.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'ruby',
          url: 'https://pokeapi.co/api/v2/version/7/',
        },
      },
      {
        flavor_text:
          'There is a bud on this POKéMON’s back.\nTo support its weight, IVYSAUR’s legs\nand trunk grow thick and strong.\fIf it starts spending more time lying\nin the sunlight, it’s a sign that the\nbud will bloom into a large flower soon.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'sapphire',
          url: 'https://pokeapi.co/api/v2/version/8/',
        },
      },
      {
        flavor_text:
          'To support its bulb, IVYSAUR’s legs\ngrow sturdy. If it spends more time lying in\nthe sunlight, the bud will soon bloom into\na large flower.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'emerald',
          url: 'https://pokeapi.co/api/v2/version/9/',
        },
      },
      {
        flavor_text:
          'There is a plant bulb on its back.\nWhen it absorbs nutrients, the bulb is said\nto blossom into a large flower.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'firered',
          url: 'https://pokeapi.co/api/v2/version/10/',
        },
      },
      {
        flavor_text:
          'When the bulb on its back grows large, it\nappears to lose the ability to stand on\nits hind legs.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'leafgreen',
          url: 'https://pokeapi.co/api/v2/version/11/',
        },
      },
      {
        flavor_text:
          'When the bud on its back starts\nswelling, a sweet aroma wafts to\nindicate the flower’s coming bloom.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'diamond',
          url: 'https://pokeapi.co/api/v2/version/12/',
        },
      },
      {
        flavor_text:
          'When the bud on its back starts\nswelling, a sweet aroma wafts to\nindicate the flower’s coming bloom.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'pearl',
          url: 'https://pokeapi.co/api/v2/version/13/',
        },
      },
      {
        flavor_text:
          'When the bud on its back starts\nswelling, a sweet aroma wafts to\nindicate the flower’s coming bloom.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'platinum',
          url: 'https://pokeapi.co/api/v2/version/14/',
        },
      },
      {
        flavor_text:
          'Exposure to sunlight adds to its\nstrength. Sunlight also makes the\nbud on its back grow larger.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'heartgold',
          url: 'https://pokeapi.co/api/v2/version/15/',
        },
      },
      {
        flavor_text:
          'If the bud on its back starts to\nsmell sweet, it is evidence that\nthe large flower will soon bloom.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'soulsilver',
          url: 'https://pokeapi.co/api/v2/version/16/',
        },
      },
      {
        flavor_text:
          'Lorsque le bourgeon sur son dos\néclot, il répand un doux parfum\npour célébrer sa floraison.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'black',
          url: 'https://pokeapi.co/api/v2/version/17/',
        },
      },
      {
        flavor_text:
          'When the bud on its back starts\nswelling, a sweet aroma wafts to\nindicate the flower’s coming bloom.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'black',
          url: 'https://pokeapi.co/api/v2/version/17/',
        },
      },
      {
        flavor_text:
          'Lorsque le bourgeon sur son dos\néclot, il répand un doux parfum\npour célébrer sa floraison.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'white',
          url: 'https://pokeapi.co/api/v2/version/18/',
        },
      },
      {
        flavor_text:
          'When the bud on its back starts\nswelling, a sweet aroma wafts to\nindicate the flower’s coming bloom.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'white',
          url: 'https://pokeapi.co/api/v2/version/18/',
        },
      },
      {
        flavor_text:
          'When the bud on its back starts\nswelling, a sweet aroma wafts to\nindicate the flower’s coming bloom.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'black-2',
          url: 'https://pokeapi.co/api/v2/version/21/',
        },
      },
      {
        flavor_text:
          'When the bud on its back starts\nswelling, a sweet aroma wafts to\nindicate the flower’s coming bloom.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'white-2',
          url: 'https://pokeapi.co/api/v2/version/22/',
        },
      },
      {
        flavor_text:
          'つぼみが　せなかに　ついていて\nようぶんを　きゅうしゅうしていくと\nおおきな　はなが　さくという。',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          '꽃봉오리가 등에 붙어 있으며\n양분을 흡수해가면\n커다란 꽃이 핀다고 한다.',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          'Il y a un bulbe sur son dos. On dit que s’il absorbe\nassez de nutriments, ce bulbe se transforme en\nune jolie fleur.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          'Es trägt eine Knospe auf seinem Rücken. Nimmt es\nNahrung zu sich, soll aus der Knospe eine große\nblühende Blume werden.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          'Este Pokémon tiene un bulbo en el lomo. Dicen que,\nal absorber nutrientes, el bulbo se transforma en una\nflor grande.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          'Dopo aver assorbito sufficienti sostanze nutrienti,\nil bulbo sulla schiena sboccia in un magnifico fiore.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          'There is a plant bulb on its back.\nWhen it absorbs nutrients, the bulb is said to\nblossom into a large flower.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          'つぼみが　背中に　ついていて\n養分を　吸収していくと\n大きな　花が　咲くという。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          'せなかの　つぼみが　ふくらみだすと\nあまい　においが　ただよいはじめる。\nたいりんの　はなが　さく　まえぶれ。',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          '등의 봉오리가 부풀어 오르면\n달콤한 냄새가 감돌기 시작한다.\n큰 꽃이 필 조짐이다.',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          'Lorsque le bourgeon sur son dos éclot, il répand\nun doux parfum pour célébrer sa floraison.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          'Sobald die Knospe auf seinem Rücken ein süßes\nAroma abgibt, steht die Blüte kurz bevor.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          'Cuando el bulbo de su lomo se hincha, desprende un\ndulce aroma para indicar el florecimiento.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          'Quando il bocciolo che ha sul dorso si gonfia, emana\nun dolce profumo. È indice dell’imminente fioritura.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          'When the bud on its back starts swelling, a sweet\naroma wafts to indicate the flower’s coming bloom.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          '背中の　つぼみが　ふくらみ出すと\n甘い　においが　漂いはじめる。\n大輪の　花が　咲く　前触れ。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          'つぼみを　ささえるため　あしこしが　つよくなる。\nひなたで　じっとする　じかんが　ながくなれば\nいよいよ　たいりんの　はなが　さくころだ。',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          '꽃봉오리를 지탱하기 위해 하반신이 강해진다.\n양지에서 가만히 있는 시간이 길어지면\n드디어 커다란 꽃이 필 때다.',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          'Un bourgeon a poussé sur le dos de ce Pokémon. Pour en\nsupporter le poids, Herbizarre a dû se muscler les pattes.\nLorsqu’il commence à se prélasser au soleil, ça signifie que\nson bourgeon va éclore, donnant naissance à une fleur.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          'Bisaknosp hat eine Knospe auf seinem Rücken.\nBeine und Rumpf sind kräftig genug, um sein Gewicht\nzu tragen. Wenn es lange in der Sonne liegt, ist das\nein Anzeichen dafür, dass die Knospe bald blüht.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          'Este Pokémon lleva un bulbo en el lomo y, para poder con\nsu peso, tiene unas patas y un tronco gruesos y fuertes.\nSi empieza a pasar más tiempo al sol, será porque el bulbo\nestá a punto de hacerse una flor grande.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          'C’è un germoglio piantato nella schiena di Ivysaur.\nPer sopportarne il peso, le zampe e il corpo crescono robusti.\nQuando inizia a passare più tempo esposto al sole, significa\nche il germoglio sboccerà presto in un grande fiore.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          'There is a bud on this Pokémon’s back. To support its weight,\nIvysaur’s legs and trunk grow thick and strong.\nIf it starts spending more time lying in the sunlight,\nit’s a sign that the bud will bloom into a large flower soon.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          'つぼみを　支えるため　足腰が　強くなる。\n日なたで　じっとする　時間が　長くなれば\nいよいよ　大輪の　花が　咲くころだ。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          'つぼみを　ささえるため　あしこしが　つよくなる。\nひなたで　じっとする　じかんが　ながくなれば\nいよいよ　たいりんの　はなが　さくころだ。',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          '꽃봉오리를 지탱하기 위해 하반신이 강해진다.\n양지에서 가만히 있는 시간이 길어지면\n드디어 커다란 꽃이 필 때다.',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          'Un bourgeon a poussé sur le dos de ce Pokémon. Pour en\nsupporter le poids, Herbizarre a dû se muscler les pattes.\nLorsqu’il commence à se prélasser au soleil, ça signifie que\nson bourgeon va éclore, donnant naissance à une fleur.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          'Bisaknosp hat eine Knospe auf seinem Rücken. Seine Beine\nund sein Stamm sind kräftig genug, um sein Gewicht zu tragen.\nWenn es lange in der Sonne liegt, ist das ein Anzeichen dafür,\ndass die Knospe bald blüht.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          'Este Pokémon lleva un bulbo en el lomo y, para poder con\nsu peso, tiene unas patas y un tronco gruesos y fuertes.\nSi empieza a pasar más tiempo al sol, será porque el bulbo\nestá a punto de hacerse una flor grande.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          'C’è un germoglio piantato nella schiena di Ivysaur.\nPer sopportarne il peso, le zampe e il corpo crescono robusti.\nQuando inizia a passare più tempo esposto al sole, significa\nche il germoglio sboccerà presto in un grande fiore.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          'There is a bud on this Pokémon’s back. To support its weight,\nIvysaur’s legs and trunk grow thick and strong.\nIf it starts spending more time lying in the sunlight,\nit’s a sign that the bud will bloom into a large flower soon.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          'つぼみを　支えるため　足腰が　強くなる。\n日なたで　じっとする　時間が　長くなれば\nいよいよ　大輪の　花が　咲くころだ。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          'ようぶんを　とって　おおきくなった\nつぼみから　かおりが　ただよいだすと\nもうすぐ　ハナがひらく　しょうこだ。',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          '양분을 흡수해서 커진 봉오리에서\n향기가 나기 시작하면\n곧 꽃이 핀다는 증거다.',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          '在吸收了養分後，\n變大的花苞開始飄出香氣時，\n就表示快要開花了。',
        language: {
          name: 'zh-Hant',
          url: 'https://pokeapi.co/api/v2/language/4/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          'En emmagasinant de l’énergie, son bulbe grossit.\nUn arôme en émane quand il s’apprête à éclore.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          'Die Knospe auf seinem Rücken wächst, indem\nsie Nährstoffe absorbiert. Kurz vor der Blüte\nsondert sie einen Duft ab.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          'Su bulbo crece a medida que absorbe nutrientes.\nDesprende un cierto aroma cuando está a punto\nde florecer.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          'Il suo bocciolo cresce assorbendo nutrimento e,\nquando è prossimo alla fioritura, emana un\nforte profumo.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          'The bud on its back grows by drawing energy. It\ngives off an aroma when it is ready to bloom.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          '養分を　摂って　大きくなった\nつぼみから　香りが　漂いだすと\nもうすぐ　ハナが開く　証拠だ。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          '它的花苞会在吸收养分后\n长大。当花苞发出香味时，\n就预示着它快要开花了。',
        language: {
          name: 'zh-Hans',
          url: 'https://pokeapi.co/api/v2/language/12/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          'ようぶんを　とって　おおきくなった\nつぼみから　かおりが　ただよいだすと\nもうすぐ　ハナがひらく　しょうこだ。',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          '양분을 흡수해서 커진 봉오리에서\n향기가 나기 시작하면\n곧 꽃이 핀다는 증거다.',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          '在吸收了養分後，\n變大的花苞開始飄出香氣時，\n就表示快要開花了。',
        language: {
          name: 'zh-Hant',
          url: 'https://pokeapi.co/api/v2/language/4/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          'En emmagasinant de l’énergie, son bulbe grossit.\nUn arôme en émane quand il s’apprête à éclore.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          'Die Knospe auf seinem Rücken wächst, indem\nsie Nährstoffe absorbiert. Kurz vor der Blüte\nsondert sie einen Duft ab.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          'Su bulbo crece a medida que absorbe nutrientes.\nDesprende un cierto aroma cuando está a punto\nde florecer.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          'Il suo bocciolo cresce assorbendo nutrimento e,\nquando è prossimo alla fioritura, emana un\nforte profumo.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          'The bud on its back grows by drawing energy. It\ngives off an aroma when it is ready to bloom.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          '養分を　摂って　大きくなった\nつぼみから　香りが　漂いだすと\nもうすぐ　ハナが開く　証拠だ。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          '它的花苞会在吸收养分后\n长大。当花苞发出香味时，\n就预示着它快要开花了。',
        language: {
          name: 'zh-Hans',
          url: 'https://pokeapi.co/api/v2/language/12/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          'せなかの　つぼみが　おおきく\nそだってくると　２ほんあしで\nたつことが　できなくなるらしい。',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          '등에 있는 봉오리가 크게\n자라면 두 다리로\n설 수 없게 되는 듯하다.',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          '當背上的花苞長大之後，\n牠似乎就無法再用兩隻腳\n站立起來了。',
        language: {
          name: 'zh-Hant',
          url: 'https://pokeapi.co/api/v2/language/4/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          'Son bulbe dorsal est devenu si gros qu’il ne peut\nplus se tenir sur ses pattes postérieures.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          'Sobald die Knospe auf seinem Rücken groß wird,\nkann Bisaknosp nicht mehr auf zwei Beinen\nstehen.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          'Cuando le crece bastante el bulbo del lomo,\npierde la capacidad de erguirse sobre las patas\ntraseras.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          'Il bulbo sulla schiena è cresciuto così tanto\nda impedirgli di alzarsi in piedi sulle zampe\nposteriori.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          'When the bulb on its back grows large, it\nappears to lose the ability to stand on its\nhind legs.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          '背中の　つぼみが　大きく\n育ってくると　２本脚で\n立つことが　できなくなるらしい。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          '当背上的花苞长大之后，\n它似乎就无法再用两只脚\n站立起来了。',
        language: {
          name: 'zh-Hans',
          url: 'https://pokeapi.co/api/v2/language/12/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          'たいようの　ひかりを　あびるほど\nからだに　ちからが　わいて　せなかの\nつぼみが　そだっていく。',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          '햇빛을 받을수록\n몸에 힘이 솟아나\n등의 꽃봉오리가 자라난다.',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          '沐浴在陽光下越久，\n身體內會湧出越多力量，\n背上的花苞也會漸漸成長。',
        language: {
          name: 'zh-Hant',
          url: 'https://pokeapi.co/api/v2/language/4/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          'La lumière du soleil le rend plus fort et vigoureux.\nLe bulbe sur son dos grossit en conséquence.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          'Die Sonne macht es stärker. Die Knospe auf\nseinem Rücken wächst unter dem Einfluss von\nSonnenlicht.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          'La luz del sol lo fortalece y hace que le crezca el\ncapullo que tiene en el lomo.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          'L’esposizione alla luce solare lo rafforza\ne fa crescere il bocciolo che ha sul dorso.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          'Exposure to sunlight adds to its strength.\nSunlight also makes the bud on its back\ngrow larger.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          '太陽の　光を　浴びるほど\n体に　力が　わいて　背中の\nつぼみが　育っていく。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          '沐浴在阳光下越久，\n身体内会涌出越多力量，\n背上的花苞也会渐渐成长。',
        language: {
          name: 'zh-Hans',
          url: 'https://pokeapi.co/api/v2/language/12/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
    ],
    evolves_from_species: {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon-species/1/',
    },
    has_gender_differences: false,
  };

export const RESPONSE_POKEMON_BY_SPECIE_NAME_FIXTURE_VENUSAUR: IResponsePokemonSpecie =
  {
    id: 3,
    name: 'venusaur',
    order: 3,
    names: [
      {
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        name: 'フシギバナ',
      },
      {
        language: {
          name: 'roomaji',
          url: 'https://pokeapi.co/api/v2/language/2/',
        },
        name: 'Fushigibana',
      },
      {
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        name: '이상해꽃',
      },
      {
        language: {
          name: 'zh-Hant',
          url: 'https://pokeapi.co/api/v2/language/4/',
        },
        name: '妙蛙花',
      },
      {
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        name: 'Florizarre',
      },
      {
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        name: 'Bisaflor',
      },
      {
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        name: 'Venusaur',
      },
      {
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        name: 'Venusaur',
      },
      {
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        name: 'Venusaur',
      },
      {
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        name: 'フシギバナ',
      },
      {
        language: {
          name: 'zh-Hans',
          url: 'https://pokeapi.co/api/v2/language/12/',
        },
        name: '妙蛙花',
      },
    ],
    color: {
      name: 'green',
      url: 'https://pokeapi.co/api/v2/pokemon-color/5/',
    },
    shape: {
      name: 'quadruped',
      url: 'https://pokeapi.co/api/v2/pokemon-shape/8/',
    },
    genera: [
      {
        genus: 'たねポケモン',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
      },
      {
        genus: '씨앗포켓몬',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
      },
      {
        genus: '種子寶可夢',
        language: {
          name: 'zh-Hant',
          url: 'https://pokeapi.co/api/v2/language/4/',
        },
      },
      {
        genus: 'Pokémon Graine',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
      },
      {
        genus: 'Samen-Pokémon',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
      },
      {
        genus: 'Pokémon Semilla',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
      },
      {
        genus: 'Pokémon Seme',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
      },
      {
        genus: 'Seed Pokémon',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
      },
      {
        genus: 'たねポケモン',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
      },
      {
        genus: '种子宝可梦',
        language: {
          name: 'zh-Hans',
          url: 'https://pokeapi.co/api/v2/language/12/',
        },
      },
    ],
    habitat: {
      name: 'grassland',
      url: 'https://pokeapi.co/api/v2/pokemon-habitat/3/',
    },
    is_baby: false,
    varieties: [
      {
        is_default: true,
        pokemon: {
          name: 'venusaur',
          url: 'https://pokeapi.co/api/v2/pokemon/3/',
        },
      },
      {
        is_default: false,
        pokemon: {
          name: 'venusaur-mega',
          url: 'https://pokeapi.co/api/v2/pokemon/10033/',
        },
      },
      {
        is_default: false,
        pokemon: {
          name: 'venusaur-gmax',
          url: 'https://pokeapi.co/api/v2/pokemon/10195/',
        },
      },
    ],
    egg_groups: [
      {
        name: 'monster',
        url: 'https://pokeapi.co/api/v2/egg-group/1/',
      },
      {
        name: 'plant',
        url: 'https://pokeapi.co/api/v2/egg-group/7/',
      },
    ],
    generation: {
      name: 'generation-i',
      url: 'https://pokeapi.co/api/v2/generation/1/',
    },
    growth_rate: {
      name: 'medium-slow',
      url: 'https://pokeapi.co/api/v2/growth-rate/4/',
    },
    gender_rate: 1,
    is_mythical: false,
    is_legendary: false,
    capture_rate: 45,
    hatch_counter: 20,
    base_happiness: 50,
    evolution_chain: {
      url: 'https://pokeapi.co/api/v2/evolution-chain/1/',
    },
    pokedex_numbers: [
      {
        entry_number: 3,
        pokedex: {
          name: 'national',
          url: 'https://pokeapi.co/api/v2/pokedex/1/',
        },
      },
      {
        entry_number: 3,
        pokedex: {
          name: 'kanto',
          url: 'https://pokeapi.co/api/v2/pokedex/2/',
        },
      },
      {
        entry_number: 228,
        pokedex: {
          name: 'original-johto',
          url: 'https://pokeapi.co/api/v2/pokedex/3/',
        },
      },
      {
        entry_number: 233,
        pokedex: {
          name: 'updated-johto',
          url: 'https://pokeapi.co/api/v2/pokedex/7/',
        },
      },
      {
        entry_number: 82,
        pokedex: {
          name: 'kalos-central',
          url: 'https://pokeapi.co/api/v2/pokedex/12/',
        },
      },
      {
        entry_number: 3,
        pokedex: {
          name: 'letsgo-kanto',
          url: 'https://pokeapi.co/api/v2/pokedex/26/',
        },
      },
      {
        entry_number: 70,
        pokedex: {
          name: 'isle-of-armor',
          url: 'https://pokeapi.co/api/v2/pokedex/28/',
        },
      },
      {
        entry_number: 166,
        pokedex: {
          name: 'blueberry',
          url: 'https://pokeapi.co/api/v2/pokedex/33/',
        },
      },
    ],
    forms_switchable: true,
    form_descriptions: [],
    pal_park_encounters: [
      {
        area: {
          name: 'field',
          url: 'https://pokeapi.co/api/v2/pal-park-area/2/',
        },
        base_score: 90,
        rate: 3,
      },
    ],
    flavor_text_entries: [
      {
        flavor_text:
          'The plant blooms\nwhen it is\nabsorbing solar\fenergy. It stays\non the move to\nseek sunlight.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'red',
          url: 'https://pokeapi.co/api/v2/version/1/',
        },
      },
      {
        flavor_text:
          'The plant blooms\nwhen it is\nabsorbing solar\fenergy. It stays\non the move to\nseek sunlight.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'blue',
          url: 'https://pokeapi.co/api/v2/version/2/',
        },
      },
      {
        flavor_text:
          'The flower on its back catches the sun s rays. The sunlight is then absorbed and used for energy.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'yellow',
          url: 'https://pokeapi.co/api/v2/version/3/',
        },
      },
      {
        flavor_text:
          'By spreading the broad petals of its flower and catching the sun s rays, it fills its body with power.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'gold',
          url: 'https://pokeapi.co/api/v2/version/4/',
        },
      },
      {
        flavor_text:
          'It is able to con­\nvert sunlight into\nenergy. As a\fresult, it is more\npowerful in the\nsummertime.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'silver',
          url: 'https://pokeapi.co/api/v2/version/5/',
        },
      },
      {
        flavor_text:
          'As it warms it­\nself and absorbs\nthe sunlight, its\fflower petals\nrelease a pleasant\nfragrance.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'crystal',
          url: 'https://pokeapi.co/api/v2/version/6/',
        },
      },
      {
        flavor_text:
          'There is a large flower on VENUSAUR’s\nback. The flower is said to take on vivid\ncolors if it gets plenty of nutrition\fand sunlight. The flower’s aroma\nsoothes the emotions of people.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'ruby',
          url: 'https://pokeapi.co/api/v2/version/7/',
        },
      },
      {
        flavor_text:
          'There is a large flower on VENUSAUR’s\nback. The flower is said to take on vivid\ncolors if it gets plenty of nutrition\fand sunlight. The flower’s aroma\nsoothes the emotions of people.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'sapphire',
          url: 'https://pokeapi.co/api/v2/version/8/',
        },
      },
      {
        flavor_text:
          'VENUSAUR’s flower is said to take on vivid\ncolors if it gets plenty of nutrition and\nsunlight. The flower’s aroma soothes the\nemotions of people.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'emerald',
          url: 'https://pokeapi.co/api/v2/version/9/',
        },
      },
      {
        flavor_text:
          'A bewitching aroma wafts from its flower.\nThe fragrance becalms those engaged in\na battle.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'firered',
          url: 'https://pokeapi.co/api/v2/version/10/',
        },
      },
      {
        flavor_text:
          'Its plant blooms when it is absorbing\nsolar energy. It stays on the move to\nseek sunlight.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'leafgreen',
          url: 'https://pokeapi.co/api/v2/version/11/',
        },
      },
      {
        flavor_text:
          'After a rainy day, the flower on\nits back smells stronger. The\nscent attracts other Pokémon.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'diamond',
          url: 'https://pokeapi.co/api/v2/version/12/',
        },
      },
      {
        flavor_text:
          'After a rainy day, the flower on\nits back smells stronger. The\nscent attracts other Pokémon.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'pearl',
          url: 'https://pokeapi.co/api/v2/version/13/',
        },
      },
      {
        flavor_text:
          'After a rainy day, the flower on\nits back smells stronger. The\nscent attracts other Pokémon.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'platinum',
          url: 'https://pokeapi.co/api/v2/version/14/',
        },
      },
      {
        flavor_text:
          'By spreading the broad petals of\nits flower and catching the sun’s\nrays, it fills its body with power.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'heartgold',
          url: 'https://pokeapi.co/api/v2/version/15/',
        },
      },
      {
        flavor_text:
          'It is able to convert sunlight into\nenergy. As a result, it is more\npowerful in the summertime.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'soulsilver',
          url: 'https://pokeapi.co/api/v2/version/16/',
        },
      },
      {
        flavor_text:
          'Le parfum de sa fleur se fait plus\npénétrant les lendemains de pluie.\nCela appâte les autres Pokémon.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'black',
          url: 'https://pokeapi.co/api/v2/version/17/',
        },
      },
      {
        flavor_text:
          'After a rainy day, the flower on\nits back smells stronger. The\nscent attracts other Pokémon.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'black',
          url: 'https://pokeapi.co/api/v2/version/17/',
        },
      },
      {
        flavor_text:
          'Le parfum de sa fleur se fait plus\npénétrant les lendemains de pluie.\nCela appâte les autres Pokémon.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'white',
          url: 'https://pokeapi.co/api/v2/version/18/',
        },
      },
      {
        flavor_text:
          'After a rainy day, the flower on\nits back smells stronger. The\nscent attracts other Pokémon.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'white',
          url: 'https://pokeapi.co/api/v2/version/18/',
        },
      },
      {
        flavor_text:
          'After a rainy day, the flower on\nits back smells stronger. The\nscent attracts other Pokémon.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'black-2',
          url: 'https://pokeapi.co/api/v2/version/21/',
        },
      },
      {
        flavor_text:
          'After a rainy day, the flower on\nits back smells stronger. The\nscent attracts other Pokémon.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'white-2',
          url: 'https://pokeapi.co/api/v2/version/22/',
        },
      },
      {
        flavor_text:
          'おおきな　はなびらを　ひろげ\nたいようの　ひかりを　あびていると\nからだに　げんきが　みなぎっていく。',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          '큰 꽃잎을 펼쳐\n햇빛을 받고 있으면\n몸에 힘이 넘쳐흐른다.',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          'Ses pétales lui servent à capter la lumière du soleil.\nIl peut ainsi en canaliser l’énergie.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          'Es spreizt die breiten Blätter seiner Blüte,\num seinen Körper mit Sonnenenergie\nzu durchfluten.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          'Llena su cuerpo de energía con los rayos solares que\ncaptan los anchos pétalos de su flor.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          'Si riempie di energia grazie ai grandi petali del fiore,\nche spalanca catturando i raggi solari.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          'By spreading the broad petals of its flower\nand catching the sun’s rays, it fills its body\nwith power.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          '大きな　花びらを　広げ\n太陽の　光を　浴びていると\n体に　元気が　みなぎっていく。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'x',
          url: 'https://pokeapi.co/api/v2/version/23/',
        },
      },
      {
        flavor_text:
          'あめの　ふった　よくじつは　せなかの\nはなの　かおりが　つよまる。かおりに\nさそわれ　ポケモンが　あつまる。',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          '비가 내린 다음 날은 등의\n꽃향기가 강해진다. 향기에\n이끌려 포켓몬이 모여든다.',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          'Le parfum de sa fleur se fait plus pénétrant les\nlendemains de pluie. Cela appâte les autres Pokémon.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          'Nach einem Regentag riecht die Blume auf seinem\nRücken intensiver. Das Aroma zieht andere\nPokémon an.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          'Después de un día de lluvia, la flor de su lomo tiene\nun aroma más potente y atrae a otros Pokémon.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          'Dopo la pioggia, il fiore sul suo dorso emana un\nprofumo più intenso e attira gli altri Pokémon.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          'After a rainy day, the flower on its back smells\nstronger. The scent attracts other Pokémon.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          '雨の　降った　翌日は\n背中の　花の　香りが　強まる。\n香りに　誘われ　ポケモンが　集まる。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'y',
          url: 'https://pokeapi.co/api/v2/version/24/',
        },
      },
      {
        flavor_text:
          'じゅうぶんな　えいようと　たいようの　ひかりが\nはなの　いろを　あざやかに　すると　いわれる。\nはなの　かおりは　ひとの　こころを　いやす。',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          '충분한 영양분과 태양의 빛이\n꽃의 색을 선명하게 만든다고 한다.\n꽃의 향기는 사람의 마음을 치유한다.',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          'Une belle fleur se trouve sur le dos de Florizarre.\nElle prend une couleur vive lorsqu’elle est bien nourrie et bien\nensoleillée. Le parfum de cette fleur peut apaiser les gens.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          'Bisaflor hat eine Blume auf seinem Rücken. Wenn sie\nviel Nahrung und Sonne aufnimmt, verfärbt sie sich bunt.\nDer Duft der Blume mildert die Emotionen der Menschen.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          'Venusaur tiene una flor enorme en el lomo que, según\nparece, adquiere unos colores muy vivos si está bien\nnutrido y le da mucho el sol. El aroma delicado de la flor\ntiene un efecto relajante en el ánimo de las personas.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          'C’è un grande fiore sulla schiena di Venusaur. Si dice che\ni colori diventino più vividi con il giusto nutrimento e i\nraggi solari. Il suo profumo calma le reazioni emotive\ndelle persone.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          'There is a large flower on Venusaur’s back. The flower is said\nto take on vivid colors if it gets plenty of nutrition and sunlight.\nThe flower’s aroma soothes the emotions of people.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          '十分な　栄養と　太陽の　光が\n花の　色を　鮮やかに　すると　いわれる。\n花の　香りは　人の　心を　癒す。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'omega-ruby',
          url: 'https://pokeapi.co/api/v2/version/25/',
        },
      },
      {
        flavor_text:
          'じゅうぶんな　えいようと　たいようの　ひかりが\nはなの　いろを　あざやかに　すると　いわれる。\nはなの　かおりは　ひとの　こころを　いやす。',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          '충분한 영양분과 태양의 빛이\n꽃의 색을 선명하게 만든다고 한다.\n꽃의 향기는 사람의 마음을 치유한다.',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          'Une belle fleur se trouve sur le dos de Florizarre.\nElle prend une couleur vive lorsqu’elle est bien nourrie et bien\nensoleillée. Le parfum de cette fleur peut apaiser les gens.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          'Bisaflor hat eine Blume auf seinem Rücken. Wenn sie viel\nNahrung und Sonne aufnimmt, verfärbt sie sich bunt.\nDer Duft der Blume besänftigt die Gemüter der Menschen.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          'Venusaur tiene una flor enorme en el lomo que, según\nparece, adquiere unos colores muy vivos si está bien\nnutrido y le da mucho el sol. El aroma delicado de la flor\ntiene un efecto relajante en el ánimo de las personas.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          'C’è un grande fiore sulla schiena di Venusaur. Si dice che\ni colori diventino più vividi con il giusto nutrimento e i\nraggi solari. Il suo profumo calma le reazioni emotive\ndelle persone.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          'There is a large flower on Venusaur’s back. The flower is said\nto take on vivid colors if it gets plenty of nutrition and sunlight.\nThe flower’s aroma soothes the emotions of people.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          '十分な　栄養と　太陽の　光が\n花の　色を　鮮やかに　すると　いわれる。\n花の　香りは　人の　心を　癒す。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'alpha-sapphire',
          url: 'https://pokeapi.co/api/v2/version/26/',
        },
      },
      {
        flavor_text:
          'せなかに　はえた　おおきな　ハナは\nたいようの　ひかりを　きゅうしゅうし\nエネルギーに　へんかん　できる。',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          '등 위에 활짝 핀 큰 꽃은\n태양 빛을 흡수해서\n에너지로 변환할 수 있다.',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text: '長在背上的大花\n能夠吸收太陽光，\n並轉換成能量。',
        language: {
          name: 'zh-Hant',
          url: 'https://pokeapi.co/api/v2/language/4/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          'Les pétales de sa fleur dorsale absorbent les\nrayons du soleil pour les convertir en énergie.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          'Die große Blume auf seinem Rücken absorbiert\nSonnenlicht und kann dieses in Energie\numwandeln.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          'La flor que tiene en el lomo puede recoger los\nrayos solares para transformarlos en energía.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          'Il grande fiore che ha sulla schiena può assorbire\ni raggi solari e trasformarli in energia.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          'The flower on its back catches the sun’s rays.\nThe sunlight is then absorbed and\nused for energy.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          '背中に　生えた　大きな　ハナは\n太陽の　光を　吸収し\nエネルギーに　変換　できる。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text: '它背上开出的大花\n能够吸收太阳光\n并将其转换为能量。',
        language: {
          name: 'zh-Hans',
          url: 'https://pokeapi.co/api/v2/language/12/',
        },
        version: {
          name: 'lets-go-pikachu',
          url: 'https://pokeapi.co/api/v2/version/31/',
        },
      },
      {
        flavor_text:
          'せなかに　はえた　おおきな　ハナは\nたいようの　ひかりを　きゅうしゅうし\nエネルギーに　へんかん　できる。',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          '등 위에 활짝 핀 큰 꽃은\n태양 빛을 흡수해서\n에너지로 변환할 수 있다.',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text: '長在背上的大花\n能夠吸收太陽光，\n並轉換成能量。',
        language: {
          name: 'zh-Hant',
          url: 'https://pokeapi.co/api/v2/language/4/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          'Les pétales de sa fleur dorsale absorbent les\nrayons du soleil pour les convertir en énergie.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          'Die große Blume auf seinem Rücken absorbiert\nSonnenlicht und kann dieses in Energie\numwandeln.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          'La flor que tiene en el lomo puede recoger los\nrayos solares para transformarlos en energía.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          'Il grande fiore che ha sulla schiena può assorbire\ni raggi solari e trasformarli in energia.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          'The flower on its back catches the sun’s rays.\nThe sunlight is then absorbed and\nused for energy.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          '背中に　生えた　大きな　ハナは\n太陽の　光を　吸収し\nエネルギーに　変換　できる。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text: '它背上开出的大花\n能够吸收太阳光\n并将其转换为能量。',
        language: {
          name: 'zh-Hans',
          url: 'https://pokeapi.co/api/v2/language/12/',
        },
        version: {
          name: 'lets-go-eevee',
          url: 'https://pokeapi.co/api/v2/version/32/',
        },
      },
      {
        flavor_text:
          'たいようエネルギーを　えいようにして\nおおきなハナが　ひらく。　ひなたに\nひきよせられるように　いどうする。',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          '태양에너지를 양분으로\n큰 꽃을 피운다. 양지를 향해\n이끌려가듯이 이동한다.',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          '把太陽的能源當成養分，\n開出碩大的花朵。總是\n朝著有陽光的地方移動。',
        language: {
          name: 'zh-Hant',
          url: 'https://pokeapi.co/api/v2/language/4/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          'Sa plante donne une grosse fleur quand\nelle absorbe les rayons du soleil. Il est toujours\nà la recherche des endroits les plus ensoleillés.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          'Es nutzt Solarenergie als Nahrung und bringt so\nseine große Blume zum Blühen. Es geht dorthin,\nwo die Sonne scheint.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          'La planta florece cuando absorbe energía solar,\nlo cual le obliga a buscar siempre la luz del sol.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          'Il fiore sboccia assorbendo energia solare.\nSi muove continuamente in cerca di luce.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          'Its plant blooms when it is absorbing solar\nenergy. It stays on the move to seek sunlight.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          '太陽エネルギーを　栄養にして\n大きな花が　開く。　日なたに\n引き寄せられるように　移動する。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          '把太阳的能源当成养分，\n开出硕大的花朵。总是\n朝着有阳光的地方移动。',
        language: {
          name: 'zh-Hans',
          url: 'https://pokeapi.co/api/v2/language/12/',
        },
        version: {
          name: 'sword',
          url: 'https://pokeapi.co/api/v2/version/33/',
        },
      },
      {
        flavor_text:
          'はなから　うっとりする　かおりが\nただよい　たたかうものの　きもちを\nなだめてしまう。',
        language: {
          name: 'ja-Hrkt',
          url: 'https://pokeapi.co/api/v2/language/1/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          '꽃에서 황홀한 향기가\n퍼져 나와 싸우는 자의\n기분을 달래준다.',
        language: {
          name: 'ko',
          url: 'https://pokeapi.co/api/v2/language/3/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          '花朵散發出的迷人香味，\n能安撫激動的心情，\n甚至消弭鬥爭。',
        language: {
          name: 'zh-Hant',
          url: 'https://pokeapi.co/api/v2/language/4/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          'Une douce senteur émane de sa plante.\nCette fragrance calme tous ceux qui sont\nengagés dans un combat.',
        language: {
          name: 'fr',
          url: 'https://pokeapi.co/api/v2/language/5/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          'Die Blume verströmt einen zauberhaften Duft.\nEr beschwichtigt erhitzte Kämpfer.',
        language: {
          name: 'de',
          url: 'https://pokeapi.co/api/v2/language/6/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          'La flor que tiene en el lomo libera un delicado\naroma, que tiene un efecto relajante en combate.',
        language: {
          name: 'es',
          url: 'https://pokeapi.co/api/v2/language/7/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          'Il suo fiore emana una fragranza inebriante\ncapace di placare l’animo di chi è impegnato\nnella lotta.',
        language: {
          name: 'it',
          url: 'https://pokeapi.co/api/v2/language/8/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          'A bewitching aroma wafts from its flower.\nThe fragrance becalms those engaged\nin a battle.',
        language: {
          name: 'en',
          url: 'https://pokeapi.co/api/v2/language/9/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text:
          '花から　うっとりする　香りが\nただよい　戦うものの　気持ちを\nなだめてしまう。',
        language: {
          name: 'ja',
          url: 'https://pokeapi.co/api/v2/language/11/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
      {
        flavor_text: '花朵散发出的迷人香味\n能安抚激动的心情，\n甚至消弭斗争。',
        language: {
          name: 'zh-Hans',
          url: 'https://pokeapi.co/api/v2/language/12/',
        },
        version: {
          name: 'shield',
          url: 'https://pokeapi.co/api/v2/version/34/',
        },
      },
    ],
    evolves_from_species: {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon-species/2/',
    },
    has_gender_differences: true,
  };

export const RESPONSE_POKEMON_BY_SPECIE_NAME_FIXTURE_LIST: Array<IResponsePokemonSpecie> =
  [
    RESPONSE_POKEMON_BY_SPECIE_NAME_FIXTURE_BULBASAUR,
    RESPONSE_POKEMON_BY_SPECIE_NAME_FIXTURE_IVYSAUR,
    RESPONSE_POKEMON_BY_SPECIE_NAME_FIXTURE_VENUSAUR,
  ];
