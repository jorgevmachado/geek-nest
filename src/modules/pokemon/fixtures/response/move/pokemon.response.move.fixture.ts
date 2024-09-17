import type { IResponseMove } from '@/modules/pokemon/pokemon.interface';

export const RESPONSE_MOVE_FIXTURE: IResponseMove = {
  id: 1,
  pp: 35,
  type: {
    url: 'https://pokeapi.co/api/v2/type/1/',
    name: 'normal',
  },
  name: 'pound',
  meta: {
    drain: 0,
    healing: 0,
    ailment: {
      name: 'none',
      url: 'https://pokeapi.co/api/v2/move-ailment/0/',
    },
    category: {
      name: 'damage',
      url: 'https://pokeapi.co/api/v2/move-category/0/',
    },
    max_hits: null,
    max_turns: null,
    min_hits: null,
    min_turns: null,
    crit_rate: 0,
    stat_chance: 0,
    flinch_chance: 0,
    ailment_chance: 0,
  },
  names: [
    {
      name: 'はたく',
      language: {
        url: 'https://pokeapi.co/api/v2/language/1/',
        name: 'ja-Hrkt',
      },
    },
    {
      name: '막치기',
      language: {
        url: 'https://pokeapi.co/api/v2/language/3/',
        name: 'ko',
      },
    },
    {
      name: '拍擊',
      language: {
        url: 'https://pokeapi.co/api/v2/language/4/',
        name: 'zh-Hant',
      },
    },
    {
      name: 'Écras’Face',
      language: {
        url: 'https://pokeapi.co/api/v2/language/5/',
        name: 'fr',
      },
    },
    {
      name: 'Klaps',
      language: {
        url: 'https://pokeapi.co/api/v2/language/6/',
        name: 'de',
      },
    },
    {
      name: 'Destructor',
      language: {
        url: 'https://pokeapi.co/api/v2/language/7/',
        name: 'es',
      },
    },
    {
      name: 'Botta',
      language: {
        url: 'https://pokeapi.co/api/v2/language/8/',
        name: 'it',
      },
    },
    {
      name: 'Pound',
      language: {
        url: 'https://pokeapi.co/api/v2/language/9/',
        name: 'en',
      },
    },
    {
      name: 'はたく',
      language: {
        url: 'https://pokeapi.co/api/v2/language/11/',
        name: 'ja',
      },
    },
    {
      name: '拍击',
      language: {
        url: 'https://pokeapi.co/api/v2/language/12/',
        name: 'zh-Hans',
      },
    },
  ],
  power: 40,
  target: {
    url: 'https://pokeapi.co/api/v2/move-target/10/',
    name: 'selected-pokemon',
  },
  accuracy: 100,
  machines: [],
  priority: 0,
  generation: {
    url: 'https://pokeapi.co/api/v2/generation/1/',
    name: 'generation-i',
  },
  past_values: [],
  stat_changes: [],
  contest_type: {
    url: 'https://pokeapi.co/api/v2/contest-type/5/',
    name: 'tough',
  },
  damage_class: {
    url: 'https://pokeapi.co/api/v2/move-damage-class/2/',
    name: 'physical',
  },
  effect_chance: null,
  contest_combos: {
    super: {
      use_after: null,
      use_before: null,
    },
    normal: {
      use_after: null,
      use_before: [
        {
          url: 'https://pokeapi.co/api/v2/move/3/',
          name: 'double-slap',
        },
        {
          url: 'https://pokeapi.co/api/v2/move/21/',
          name: 'slam',
        },
        {
          url: 'https://pokeapi.co/api/v2/move/185/',
          name: 'feint-attack',
        },
      ],
    },
  },
  contest_effect: {
    url: 'https://pokeapi.co/api/v2/contest-effect/1/',
  },
  effect_changes: [],
  effect_entries: [
    {
      effect: 'Inflicts regular damage.',
      language: {
        url: 'https://pokeapi.co/api/v2/language/9/',
        name: 'en',
      },
      short_effect: 'Inflicts regular damage with no additional effect.',
    },
  ],
  learned_by_pokemon: [
    {
      url: 'https://pokeapi.co/api/v2/pokemon/35/',
      name: 'clefairy',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/36/',
      name: 'clefable',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/39/',
      name: 'jigglypuff',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/40/',
      name: 'wigglytuff',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/60/',
      name: 'poliwag',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/61/',
      name: 'poliwhirl',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/62/',
      name: 'poliwrath',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/88/',
      name: 'grimer',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/89/',
      name: 'muk',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/96/',
      name: 'drowzee',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/97/',
      name: 'hypno',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/113/',
      name: 'chansey',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/115/',
      name: 'kangaskhan',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/122/',
      name: 'mr-mime',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/124/',
      name: 'jynx',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/151/',
      name: 'mew',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/173/',
      name: 'cleffa',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/174/',
      name: 'igglybuff',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/175/',
      name: 'togepi',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/176/',
      name: 'togetic',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/186/',
      name: 'politoed',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/192/',
      name: 'sunflora',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/238/',
      name: 'smoochum',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/242/',
      name: 'blissey',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/252/',
      name: 'treecko',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/253/',
      name: 'grovyle',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/254/',
      name: 'sceptile',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/274/',
      name: 'nuzleaf',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/275/',
      name: 'shiftry',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/293/',
      name: 'whismur',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/294/',
      name: 'loudred',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/295/',
      name: 'exploud',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/307/',
      name: 'meditite',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/308/',
      name: 'medicham',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/316/',
      name: 'gulpin',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/317/',
      name: 'swalot',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/393/',
      name: 'piplup',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/394/',
      name: 'prinplup',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/395/',
      name: 'empoleon',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/401/',
      name: 'kricketot',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/402/',
      name: 'kricketune',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/427/',
      name: 'buneary',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/428/',
      name: 'lopunny',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/439/',
      name: 'mime-jr',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/440/',
      name: 'happiny',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/456/',
      name: 'finneon',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/457/',
      name: 'lumineon',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/468/',
      name: 'togekiss',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/486/',
      name: 'regigigas',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/531/',
      name: 'audino',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/532/',
      name: 'timburr',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/533/',
      name: 'gurdurr',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/534/',
      name: 'conkeldurr',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/568/',
      name: 'trubbish',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/569/',
      name: 'garbodor',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/572/',
      name: 'minccino',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/573/',
      name: 'cinccino',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/574/',
      name: 'gothita',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/575/',
      name: 'gothorita',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/576/',
      name: 'gothitelle',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/594/',
      name: 'alomomola',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/619/',
      name: 'mienfoo',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/620/',
      name: 'mienshao',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/622/',
      name: 'golett',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/623/',
      name: 'golurk',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/656/',
      name: 'froakie',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/657/',
      name: 'frogadier',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/658/',
      name: 'greninja',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/694/',
      name: 'helioptile',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/695/',
      name: 'heliolisk',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/728/',
      name: 'popplio',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/729/',
      name: 'brionne',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/730/',
      name: 'primarina',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/741/',
      name: 'oricorio-baile',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/758/',
      name: 'salazzle',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/793/',
      name: 'nihilego',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/816/',
      name: 'sobble',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/817/',
      name: 'drizzile',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/818/',
      name: 'inteleon',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/866/',
      name: 'mr-rime',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/898/',
      name: 'calyrex',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/912/',
      name: 'quaxly',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/913/',
      name: 'quaxwell',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/914/',
      name: 'quaquaval',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/924/',
      name: 'tandemaus',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/925/',
      name: 'maushold',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/985/',
      name: 'scream-tail',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/10065/',
      name: 'sceptile-mega',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/10069/',
      name: 'audino-mega',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/10088/',
      name: 'lopunny-mega',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/10112/',
      name: 'grimer-alola',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/10113/',
      name: 'muk-alola',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/10116/',
      name: 'greninja-battle-bond',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/10117/',
      name: 'greninja-ash',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/10123/',
      name: 'oricorio-pom-pom',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/10124/',
      name: 'oricorio-pau',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/10125/',
      name: 'oricorio-sensu',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/10129/',
      name: 'salazzle-totem',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/10168/',
      name: 'mr-mime-galar',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/10193/',
      name: 'calyrex-ice',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/10194/',
      name: 'calyrex-shadow',
    },
    {
      url: 'https://pokeapi.co/api/v2/pokemon/10257/',
      name: 'maushold-family-of-three',
    },
  ],
  flavor_text_entries: [
    {
      language: {
        url: 'https://pokeapi.co/api/v2/language/9/',
        name: 'en',
      },
      flavor_text: 'Pounds with fore­\nlegs or tail.',
      version_group: {
        url: 'https://pokeapi.co/api/v2/version-group/3/',
        name: 'gold-silver',
      },
    },
    {
      language: {
        url: 'https://pokeapi.co/api/v2/language/9/',
        name: 'en',
      },
      flavor_text: 'Pounds with fore­\nlegs or tail.',
      version_group: {
        url: 'https://pokeapi.co/api/v2/version-group/4/',
        name: 'crystal',
      },
    },
    {
      language: {
        url: 'https://pokeapi.co/api/v2/language/9/',
        name: 'en',
      },
      flavor_text: 'Pounds the foe with\nforelegs or tail.',
      version_group: {
        url: 'https://pokeapi.co/api/v2/version-group/5/',
        name: 'ruby-sapphire',
      },
    },
  ],
  super_contest_effect: {
    url: 'https://pokeapi.co/api/v2/super-contest-effect/5/',
  },
};

export const RESPONSE_MOVE_FIXTURE_CUT_ITEM: IResponseMove = {
  ...RESPONSE_MOVE_FIXTURE,
  id: 15,
  pp: 30,
  type: {
    url: 'https://pokeapi.co/api/v2/type/1/',
    name: 'normal',
  },
  name: 'cut',
  power: 50,
  target: {
    url: 'https://pokeapi.co/api/v2/move-target/10/',
    name: 'selected-pokemon',
  },
  priority: 0,
  accuracy: 95,
  damage_class: {
    name: 'physical',
    url: 'https://pokeapi.co/api/v2/move-damage-class/2/',
  },
  effect_chance: null,
  effect_entries: [
    {
      effect: 'Inflicts regular damage.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      short_effect: 'Inflicts regular damage with no additional effect.',
    },
  ],
  learned_by_pokemon: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
    },
    {
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon/3/',
    },
    {
      name: 'charmander',
      url: 'https://pokeapi.co/api/v2/pokemon/4/',
    },
    {
      name: 'charmeleon',
      url: 'https://pokeapi.co/api/v2/pokemon/5/',
    },
    {
      name: 'charizard',
      url: 'https://pokeapi.co/api/v2/pokemon/6/',
    },
    {
      name: 'beedrill',
      url: 'https://pokeapi.co/api/v2/pokemon/15/',
    },
    {
      name: 'rattata',
      url: 'https://pokeapi.co/api/v2/pokemon/19/',
    },
    {
      name: 'raticate',
      url: 'https://pokeapi.co/api/v2/pokemon/20/',
    },
    {
      name: 'sandshrew',
      url: 'https://pokeapi.co/api/v2/pokemon/27/',
    },
    {
      name: 'sandslash',
      url: 'https://pokeapi.co/api/v2/pokemon/28/',
    },
    {
      name: 'nidoran-f',
      url: 'https://pokeapi.co/api/v2/pokemon/29/',
    },
    {
      name: 'nidorina',
      url: 'https://pokeapi.co/api/v2/pokemon/30/',
    },
    {
      name: 'nidoqueen',
      url: 'https://pokeapi.co/api/v2/pokemon/31/',
    },
    {
      name: 'nidoran-m',
      url: 'https://pokeapi.co/api/v2/pokemon/32/',
    },
    {
      name: 'nidorino',
      url: 'https://pokeapi.co/api/v2/pokemon/33/',
    },
    {
      name: 'nidoking',
      url: 'https://pokeapi.co/api/v2/pokemon/34/',
    },
    {
      name: 'oddish',
      url: 'https://pokeapi.co/api/v2/pokemon/43/',
    },
    {
      name: 'gloom',
      url: 'https://pokeapi.co/api/v2/pokemon/44/',
    },
    {
      name: 'vileplume',
      url: 'https://pokeapi.co/api/v2/pokemon/45/',
    },
    {
      name: 'paras',
      url: 'https://pokeapi.co/api/v2/pokemon/46/',
    },
    {
      name: 'parasect',
      url: 'https://pokeapi.co/api/v2/pokemon/47/',
    },
    {
      name: 'diglett',
      url: 'https://pokeapi.co/api/v2/pokemon/50/',
    },
    {
      name: 'dugtrio',
      url: 'https://pokeapi.co/api/v2/pokemon/51/',
    },
    {
      name: 'meowth',
      url: 'https://pokeapi.co/api/v2/pokemon/52/',
    },
    {
      name: 'persian',
      url: 'https://pokeapi.co/api/v2/pokemon/53/',
    },
    {
      name: 'bellsprout',
      url: 'https://pokeapi.co/api/v2/pokemon/69/',
    },
    {
      name: 'weepinbell',
      url: 'https://pokeapi.co/api/v2/pokemon/70/',
    },
    {
      name: 'victreebel',
      url: 'https://pokeapi.co/api/v2/pokemon/71/',
    },
    {
      name: 'tentacool',
      url: 'https://pokeapi.co/api/v2/pokemon/72/',
    },
    {
      name: 'tentacruel',
      url: 'https://pokeapi.co/api/v2/pokemon/73/',
    },
    {
      name: 'farfetchd',
      url: 'https://pokeapi.co/api/v2/pokemon/83/',
    },
    {
      name: 'krabby',
      url: 'https://pokeapi.co/api/v2/pokemon/98/',
    },
    {
      name: 'kingler',
      url: 'https://pokeapi.co/api/v2/pokemon/99/',
    },
    {
      name: 'lickitung',
      url: 'https://pokeapi.co/api/v2/pokemon/108/',
    },
    {
      name: 'rhydon',
      url: 'https://pokeapi.co/api/v2/pokemon/112/',
    },
    {
      name: 'tangela',
      url: 'https://pokeapi.co/api/v2/pokemon/114/',
    },
    {
      name: 'kangaskhan',
      url: 'https://pokeapi.co/api/v2/pokemon/115/',
    },
    {
      name: 'scyther',
      url: 'https://pokeapi.co/api/v2/pokemon/123/',
    },
    {
      name: 'pinsir',
      url: 'https://pokeapi.co/api/v2/pokemon/127/',
    },
    {
      name: 'kabutops',
      url: 'https://pokeapi.co/api/v2/pokemon/141/',
    },
    {
      name: 'dragonite',
      url: 'https://pokeapi.co/api/v2/pokemon/149/',
    },
    {
      name: 'mew',
      url: 'https://pokeapi.co/api/v2/pokemon/151/',
    },
    {
      name: 'chikorita',
      url: 'https://pokeapi.co/api/v2/pokemon/152/',
    },
    {
      name: 'bayleef',
      url: 'https://pokeapi.co/api/v2/pokemon/153/',
    },
    {
      name: 'meganium',
      url: 'https://pokeapi.co/api/v2/pokemon/154/',
    },
    {
      name: 'cyndaquil',
      url: 'https://pokeapi.co/api/v2/pokemon/155/',
    },
    {
      name: 'quilava',
      url: 'https://pokeapi.co/api/v2/pokemon/156/',
    },
    {
      name: 'typhlosion',
      url: 'https://pokeapi.co/api/v2/pokemon/157/',
    },
    {
      name: 'totodile',
      url: 'https://pokeapi.co/api/v2/pokemon/158/',
    },
    {
      name: 'croconaw',
      url: 'https://pokeapi.co/api/v2/pokemon/159/',
    },
    {
      name: 'feraligatr',
      url: 'https://pokeapi.co/api/v2/pokemon/160/',
    },
    {
      name: 'sentret',
      url: 'https://pokeapi.co/api/v2/pokemon/161/',
    },
    {
      name: 'furret',
      url: 'https://pokeapi.co/api/v2/pokemon/162/',
    },
    {
      name: 'bellossom',
      url: 'https://pokeapi.co/api/v2/pokemon/182/',
    },
    {
      name: 'aipom',
      url: 'https://pokeapi.co/api/v2/pokemon/190/',
    },
    {
      name: 'sunkern',
      url: 'https://pokeapi.co/api/v2/pokemon/191/',
    },
    {
      name: 'sunflora',
      url: 'https://pokeapi.co/api/v2/pokemon/192/',
    },
    {
      name: 'espeon',
      url: 'https://pokeapi.co/api/v2/pokemon/196/',
    },
    {
      name: 'umbreon',
      url: 'https://pokeapi.co/api/v2/pokemon/197/',
    },
    {
      name: 'gligar',
      url: 'https://pokeapi.co/api/v2/pokemon/207/',
    },
    {
      name: 'steelix',
      url: 'https://pokeapi.co/api/v2/pokemon/208/',
    },
    {
      name: 'scizor',
      url: 'https://pokeapi.co/api/v2/pokemon/212/',
    },
    {
      name: 'heracross',
      url: 'https://pokeapi.co/api/v2/pokemon/214/',
    },
    {
      name: 'sneasel',
      url: 'https://pokeapi.co/api/v2/pokemon/215/',
    },
    {
      name: 'teddiursa',
      url: 'https://pokeapi.co/api/v2/pokemon/216/',
    },
    {
      name: 'ursaring',
      url: 'https://pokeapi.co/api/v2/pokemon/217/',
    },
    {
      name: 'skarmory',
      url: 'https://pokeapi.co/api/v2/pokemon/227/',
    },
    {
      name: 'raikou',
      url: 'https://pokeapi.co/api/v2/pokemon/243/',
    },
    {
      name: 'entei',
      url: 'https://pokeapi.co/api/v2/pokemon/244/',
    },
    {
      name: 'suicune',
      url: 'https://pokeapi.co/api/v2/pokemon/245/',
    },
    {
      name: 'tyranitar',
      url: 'https://pokeapi.co/api/v2/pokemon/248/',
    },
    {
      name: 'celebi',
      url: 'https://pokeapi.co/api/v2/pokemon/251/',
    },
    {
      name: 'treecko',
      url: 'https://pokeapi.co/api/v2/pokemon/252/',
    },
    {
      name: 'grovyle',
      url: 'https://pokeapi.co/api/v2/pokemon/253/',
    },
    {
      name: 'sceptile',
      url: 'https://pokeapi.co/api/v2/pokemon/254/',
    },
    {
      name: 'torchic',
      url: 'https://pokeapi.co/api/v2/pokemon/255/',
    },
    {
      name: 'combusken',
      url: 'https://pokeapi.co/api/v2/pokemon/256/',
    },
    {
      name: 'blaziken',
      url: 'https://pokeapi.co/api/v2/pokemon/257/',
    },
    {
      name: 'zigzagoon',
      url: 'https://pokeapi.co/api/v2/pokemon/263/',
    },
    {
      name: 'linoone',
      url: 'https://pokeapi.co/api/v2/pokemon/264/',
    },
    {
      name: 'nuzleaf',
      url: 'https://pokeapi.co/api/v2/pokemon/274/',
    },
    {
      name: 'shiftry',
      url: 'https://pokeapi.co/api/v2/pokemon/275/',
    },
    {
      name: 'breloom',
      url: 'https://pokeapi.co/api/v2/pokemon/286/',
    },
    {
      name: 'slakoth',
      url: 'https://pokeapi.co/api/v2/pokemon/287/',
    },
    {
      name: 'vigoroth',
      url: 'https://pokeapi.co/api/v2/pokemon/288/',
    },
    {
      name: 'slaking',
      url: 'https://pokeapi.co/api/v2/pokemon/289/',
    },
    {
      name: 'nincada',
      url: 'https://pokeapi.co/api/v2/pokemon/290/',
    },
    {
      name: 'ninjask',
      url: 'https://pokeapi.co/api/v2/pokemon/291/',
    },
    {
      name: 'shedinja',
      url: 'https://pokeapi.co/api/v2/pokemon/292/',
    },
    {
      name: 'sableye',
      url: 'https://pokeapi.co/api/v2/pokemon/302/',
    },
    {
      name: 'aron',
      url: 'https://pokeapi.co/api/v2/pokemon/304/',
    },
    {
      name: 'lairon',
      url: 'https://pokeapi.co/api/v2/pokemon/305/',
    },
    {
      name: 'aggron',
      url: 'https://pokeapi.co/api/v2/pokemon/306/',
    },
    {
      name: 'roselia',
      url: 'https://pokeapi.co/api/v2/pokemon/315/',
    },
    {
      name: 'cacnea',
      url: 'https://pokeapi.co/api/v2/pokemon/331/',
    },
    {
      name: 'cacturne',
      url: 'https://pokeapi.co/api/v2/pokemon/332/',
    },
    {
      name: 'corphish',
      url: 'https://pokeapi.co/api/v2/pokemon/341/',
    },
    {
      name: 'crawdaunt',
      url: 'https://pokeapi.co/api/v2/pokemon/342/',
    },
    {
      name: 'anorith',
      url: 'https://pokeapi.co/api/v2/pokemon/347/',
    },
    {
      name: 'armaldo',
      url: 'https://pokeapi.co/api/v2/pokemon/348/',
    },
    {
      name: 'kecleon',
      url: 'https://pokeapi.co/api/v2/pokemon/352/',
    },
    {
      name: 'tropius',
      url: 'https://pokeapi.co/api/v2/pokemon/357/',
    },
    {
      name: 'absol',
      url: 'https://pokeapi.co/api/v2/pokemon/359/',
    },
    {
      name: 'bagon',
      url: 'https://pokeapi.co/api/v2/pokemon/371/',
    },
    {
      name: 'shelgon',
      url: 'https://pokeapi.co/api/v2/pokemon/372/',
    },
    {
      name: 'salamence',
      url: 'https://pokeapi.co/api/v2/pokemon/373/',
    },
    {
      name: 'metang',
      url: 'https://pokeapi.co/api/v2/pokemon/375/',
    },
    {
      name: 'metagross',
      url: 'https://pokeapi.co/api/v2/pokemon/376/',
    },
    {
      name: 'latias',
      url: 'https://pokeapi.co/api/v2/pokemon/380/',
    },
    {
      name: 'latios',
      url: 'https://pokeapi.co/api/v2/pokemon/381/',
    },
    {
      name: 'groudon',
      url: 'https://pokeapi.co/api/v2/pokemon/383/',
    },
    {
      name: 'deoxys-normal',
      url: 'https://pokeapi.co/api/v2/pokemon/386/',
    },
    {
      name: 'turtwig',
      url: 'https://pokeapi.co/api/v2/pokemon/387/',
    },
    {
      name: 'grotle',
      url: 'https://pokeapi.co/api/v2/pokemon/388/',
    },
    {
      name: 'torterra',
      url: 'https://pokeapi.co/api/v2/pokemon/389/',
    },
    {
      name: 'chimchar',
      url: 'https://pokeapi.co/api/v2/pokemon/390/',
    },
    {
      name: 'monferno',
      url: 'https://pokeapi.co/api/v2/pokemon/391/',
    },
    {
      name: 'infernape',
      url: 'https://pokeapi.co/api/v2/pokemon/392/',
    },
    {
      name: 'piplup',
      url: 'https://pokeapi.co/api/v2/pokemon/393/',
    },
    {
      name: 'prinplup',
      url: 'https://pokeapi.co/api/v2/pokemon/394/',
    },
    {
      name: 'empoleon',
      url: 'https://pokeapi.co/api/v2/pokemon/395/',
    },
    {
      name: 'bidoof',
      url: 'https://pokeapi.co/api/v2/pokemon/399/',
    },
    {
      name: 'bibarel',
      url: 'https://pokeapi.co/api/v2/pokemon/400/',
    },
    {
      name: 'kricketune',
      url: 'https://pokeapi.co/api/v2/pokemon/402/',
    },
    {
      name: 'budew',
      url: 'https://pokeapi.co/api/v2/pokemon/406/',
    },
    {
      name: 'roserade',
      url: 'https://pokeapi.co/api/v2/pokemon/407/',
    },
    {
      name: 'rampardos',
      url: 'https://pokeapi.co/api/v2/pokemon/409/',
    },
    {
      name: 'vespiquen',
      url: 'https://pokeapi.co/api/v2/pokemon/416/',
    },
    {
      name: 'pachirisu',
      url: 'https://pokeapi.co/api/v2/pokemon/417/',
    },
    {
      name: 'ambipom',
      url: 'https://pokeapi.co/api/v2/pokemon/424/',
    },
    {
      name: 'drifloon',
      url: 'https://pokeapi.co/api/v2/pokemon/425/',
    },
    {
      name: 'drifblim',
      url: 'https://pokeapi.co/api/v2/pokemon/426/',
    },
    {
      name: 'buneary',
      url: 'https://pokeapi.co/api/v2/pokemon/427/',
    },
    {
      name: 'lopunny',
      url: 'https://pokeapi.co/api/v2/pokemon/428/',
    },
    {
      name: 'glameow',
      url: 'https://pokeapi.co/api/v2/pokemon/431/',
    },
    {
      name: 'purugly',
      url: 'https://pokeapi.co/api/v2/pokemon/432/',
    },
    {
      name: 'stunky',
      url: 'https://pokeapi.co/api/v2/pokemon/434/',
    },
    {
      name: 'skuntank',
      url: 'https://pokeapi.co/api/v2/pokemon/435/',
    },
    {
      name: 'gible',
      url: 'https://pokeapi.co/api/v2/pokemon/443/',
    },
    {
      name: 'gabite',
      url: 'https://pokeapi.co/api/v2/pokemon/444/',
    },
    {
      name: 'garchomp',
      url: 'https://pokeapi.co/api/v2/pokemon/445/',
    },
    {
      name: 'skorupi',
      url: 'https://pokeapi.co/api/v2/pokemon/451/',
    },
    {
      name: 'drapion',
      url: 'https://pokeapi.co/api/v2/pokemon/452/',
    },
    {
      name: 'toxicroak',
      url: 'https://pokeapi.co/api/v2/pokemon/454/',
    },
    {
      name: 'carnivine',
      url: 'https://pokeapi.co/api/v2/pokemon/455/',
    },
    {
      name: 'weavile',
      url: 'https://pokeapi.co/api/v2/pokemon/461/',
    },
    {
      name: 'lickilicky',
      url: 'https://pokeapi.co/api/v2/pokemon/463/',
    },
    {
      name: 'rhyperior',
      url: 'https://pokeapi.co/api/v2/pokemon/464/',
    },
    {
      name: 'tangrowth',
      url: 'https://pokeapi.co/api/v2/pokemon/465/',
    },
    {
      name: 'gliscor',
      url: 'https://pokeapi.co/api/v2/pokemon/472/',
    },
    {
      name: 'gallade',
      url: 'https://pokeapi.co/api/v2/pokemon/475/',
    },
    {
      name: 'dialga',
      url: 'https://pokeapi.co/api/v2/pokemon/483/',
    },
    {
      name: 'palkia',
      url: 'https://pokeapi.co/api/v2/pokemon/484/',
    },
    {
      name: 'giratina-altered',
      url: 'https://pokeapi.co/api/v2/pokemon/487/',
    },
    {
      name: 'darkrai',
      url: 'https://pokeapi.co/api/v2/pokemon/491/',
    },
    {
      name: 'arceus',
      url: 'https://pokeapi.co/api/v2/pokemon/493/',
    },
    {
      name: 'snivy',
      url: 'https://pokeapi.co/api/v2/pokemon/495/',
    },
    {
      name: 'servine',
      url: 'https://pokeapi.co/api/v2/pokemon/496/',
    },
    {
      name: 'serperior',
      url: 'https://pokeapi.co/api/v2/pokemon/497/',
    },
    {
      name: 'oshawott',
      url: 'https://pokeapi.co/api/v2/pokemon/501/',
    },
    {
      name: 'dewott',
      url: 'https://pokeapi.co/api/v2/pokemon/502/',
    },
    {
      name: 'samurott',
      url: 'https://pokeapi.co/api/v2/pokemon/503/',
    },
    {
      name: 'patrat',
      url: 'https://pokeapi.co/api/v2/pokemon/504/',
    },
    {
      name: 'watchog',
      url: 'https://pokeapi.co/api/v2/pokemon/505/',
    },
    {
      name: 'purrloin',
      url: 'https://pokeapi.co/api/v2/pokemon/509/',
    },
    {
      name: 'liepard',
      url: 'https://pokeapi.co/api/v2/pokemon/510/',
    },
    {
      name: 'pansage',
      url: 'https://pokeapi.co/api/v2/pokemon/511/',
    },
    {
      name: 'simisage',
      url: 'https://pokeapi.co/api/v2/pokemon/512/',
    },
    {
      name: 'pansear',
      url: 'https://pokeapi.co/api/v2/pokemon/513/',
    },
    {
      name: 'simisear',
      url: 'https://pokeapi.co/api/v2/pokemon/514/',
    },
    {
      name: 'panpour',
      url: 'https://pokeapi.co/api/v2/pokemon/515/',
    },
    {
      name: 'simipour',
      url: 'https://pokeapi.co/api/v2/pokemon/516/',
    },
    {
      name: 'drilbur',
      url: 'https://pokeapi.co/api/v2/pokemon/529/',
    },
    {
      name: 'excadrill',
      url: 'https://pokeapi.co/api/v2/pokemon/530/',
    },
    {
      name: 'sewaddle',
      url: 'https://pokeapi.co/api/v2/pokemon/540/',
    },
    {
      name: 'swadloon',
      url: 'https://pokeapi.co/api/v2/pokemon/541/',
    },
    {
      name: 'leavanny',
      url: 'https://pokeapi.co/api/v2/pokemon/542/',
    },
    {
      name: 'scolipede',
      url: 'https://pokeapi.co/api/v2/pokemon/545/',
    },
    {
      name: 'petilil',
      url: 'https://pokeapi.co/api/v2/pokemon/548/',
    },
    {
      name: 'lilligant',
      url: 'https://pokeapi.co/api/v2/pokemon/549/',
    },
    {
      name: 'basculin-red-striped',
      url: 'https://pokeapi.co/api/v2/pokemon/550/',
    },
    {
      name: 'sandile',
      url: 'https://pokeapi.co/api/v2/pokemon/551/',
    },
    {
      name: 'krokorok',
      url: 'https://pokeapi.co/api/v2/pokemon/552/',
    },
    {
      name: 'krookodile',
      url: 'https://pokeapi.co/api/v2/pokemon/553/',
    },
    {
      name: 'dwebble',
      url: 'https://pokeapi.co/api/v2/pokemon/557/',
    },
    {
      name: 'crustle',
      url: 'https://pokeapi.co/api/v2/pokemon/558/',
    },
    {
      name: 'archen',
      url: 'https://pokeapi.co/api/v2/pokemon/566/',
    },
    {
      name: 'archeops',
      url: 'https://pokeapi.co/api/v2/pokemon/567/',
    },
    {
      name: 'zorua',
      url: 'https://pokeapi.co/api/v2/pokemon/570/',
    },
    {
      name: 'zoroark',
      url: 'https://pokeapi.co/api/v2/pokemon/571/',
    },
    {
      name: 'sawsbuck',
      url: 'https://pokeapi.co/api/v2/pokemon/586/',
    },
    {
      name: 'emolga',
      url: 'https://pokeapi.co/api/v2/pokemon/587/',
    },
    {
      name: 'karrablast',
      url: 'https://pokeapi.co/api/v2/pokemon/588/',
    },
    {
      name: 'escavalier',
      url: 'https://pokeapi.co/api/v2/pokemon/589/',
    },
    {
      name: 'joltik',
      url: 'https://pokeapi.co/api/v2/pokemon/595/',
    },
    {
      name: 'galvantula',
      url: 'https://pokeapi.co/api/v2/pokemon/596/',
    },
    {
      name: 'ferrothorn',
      url: 'https://pokeapi.co/api/v2/pokemon/598/',
    },
    {
      name: 'eelektross',
      url: 'https://pokeapi.co/api/v2/pokemon/604/',
    },
    {
      name: 'axew',
      url: 'https://pokeapi.co/api/v2/pokemon/610/',
    },
    {
      name: 'fraxure',
      url: 'https://pokeapi.co/api/v2/pokemon/611/',
    },
    {
      name: 'haxorus',
      url: 'https://pokeapi.co/api/v2/pokemon/612/',
    },
    {
      name: 'cubchoo',
      url: 'https://pokeapi.co/api/v2/pokemon/613/',
    },
    {
      name: 'beartic',
      url: 'https://pokeapi.co/api/v2/pokemon/614/',
    },
    {
      name: 'druddigon',
      url: 'https://pokeapi.co/api/v2/pokemon/621/',
    },
    {
      name: 'pawniard',
      url: 'https://pokeapi.co/api/v2/pokemon/624/',
    },
    {
      name: 'bisharp',
      url: 'https://pokeapi.co/api/v2/pokemon/625/',
    },
    {
      name: 'bouffalant',
      url: 'https://pokeapi.co/api/v2/pokemon/626/',
    },
    {
      name: 'rufflet',
      url: 'https://pokeapi.co/api/v2/pokemon/627/',
    },
    {
      name: 'braviary',
      url: 'https://pokeapi.co/api/v2/pokemon/628/',
    },
    {
      name: 'vullaby',
      url: 'https://pokeapi.co/api/v2/pokemon/629/',
    },
    {
      name: 'mandibuzz',
      url: 'https://pokeapi.co/api/v2/pokemon/630/',
    },
    {
      name: 'heatmor',
      url: 'https://pokeapi.co/api/v2/pokemon/631/',
    },
    {
      name: 'durant',
      url: 'https://pokeapi.co/api/v2/pokemon/632/',
    },
    {
      name: 'cobalion',
      url: 'https://pokeapi.co/api/v2/pokemon/638/',
    },
    {
      name: 'terrakion',
      url: 'https://pokeapi.co/api/v2/pokemon/639/',
    },
    {
      name: 'virizion',
      url: 'https://pokeapi.co/api/v2/pokemon/640/',
    },
    {
      name: 'reshiram',
      url: 'https://pokeapi.co/api/v2/pokemon/643/',
    },
    {
      name: 'zekrom',
      url: 'https://pokeapi.co/api/v2/pokemon/644/',
    },
    {
      name: 'kyurem',
      url: 'https://pokeapi.co/api/v2/pokemon/646/',
    },
    {
      name: 'keldeo-ordinary',
      url: 'https://pokeapi.co/api/v2/pokemon/647/',
    },
    {
      name: 'chespin',
      url: 'https://pokeapi.co/api/v2/pokemon/650/',
    },
    {
      name: 'quilladin',
      url: 'https://pokeapi.co/api/v2/pokemon/651/',
    },
    {
      name: 'chesnaught',
      url: 'https://pokeapi.co/api/v2/pokemon/652/',
    },
    {
      name: 'fennekin',
      url: 'https://pokeapi.co/api/v2/pokemon/653/',
    },
    {
      name: 'braixen',
      url: 'https://pokeapi.co/api/v2/pokemon/654/',
    },
    {
      name: 'delphox',
      url: 'https://pokeapi.co/api/v2/pokemon/655/',
    },
    {
      name: 'froakie',
      url: 'https://pokeapi.co/api/v2/pokemon/656/',
    },
    {
      name: 'frogadier',
      url: 'https://pokeapi.co/api/v2/pokemon/657/',
    },
    {
      name: 'greninja',
      url: 'https://pokeapi.co/api/v2/pokemon/658/',
    },
    {
      name: 'bunnelby',
      url: 'https://pokeapi.co/api/v2/pokemon/659/',
    },
    {
      name: 'diggersby',
      url: 'https://pokeapi.co/api/v2/pokemon/660/',
    },
    {
      name: 'pancham',
      url: 'https://pokeapi.co/api/v2/pokemon/674/',
    },
    {
      name: 'pangoro',
      url: 'https://pokeapi.co/api/v2/pokemon/675/',
    },
    {
      name: 'espurr',
      url: 'https://pokeapi.co/api/v2/pokemon/677/',
    },
    {
      name: 'meowstic-male',
      url: 'https://pokeapi.co/api/v2/pokemon/678/',
    },
    {
      name: 'honedge',
      url: 'https://pokeapi.co/api/v2/pokemon/679/',
    },
    {
      name: 'doublade',
      url: 'https://pokeapi.co/api/v2/pokemon/680/',
    },
    {
      name: 'aegislash-shield',
      url: 'https://pokeapi.co/api/v2/pokemon/681/',
    },
    {
      name: 'inkay',
      url: 'https://pokeapi.co/api/v2/pokemon/686/',
    },
    {
      name: 'malamar',
      url: 'https://pokeapi.co/api/v2/pokemon/687/',
    },
    {
      name: 'binacle',
      url: 'https://pokeapi.co/api/v2/pokemon/688/',
    },
    {
      name: 'barbaracle',
      url: 'https://pokeapi.co/api/v2/pokemon/689/',
    },
    {
      name: 'clauncher',
      url: 'https://pokeapi.co/api/v2/pokemon/692/',
    },
    {
      name: 'clawitzer',
      url: 'https://pokeapi.co/api/v2/pokemon/693/',
    },
    {
      name: 'helioptile',
      url: 'https://pokeapi.co/api/v2/pokemon/694/',
    },
    {
      name: 'heliolisk',
      url: 'https://pokeapi.co/api/v2/pokemon/695/',
    },
    {
      name: 'sylveon',
      url: 'https://pokeapi.co/api/v2/pokemon/700/',
    },
    {
      name: 'hawlucha',
      url: 'https://pokeapi.co/api/v2/pokemon/701/',
    },
    {
      name: 'dedenne',
      url: 'https://pokeapi.co/api/v2/pokemon/702/',
    },
    {
      name: 'klefki',
      url: 'https://pokeapi.co/api/v2/pokemon/707/',
    },
    {
      name: 'phantump',
      url: 'https://pokeapi.co/api/v2/pokemon/708/',
    },
    {
      name: 'trevenant',
      url: 'https://pokeapi.co/api/v2/pokemon/709/',
    },
    {
      name: 'noibat',
      url: 'https://pokeapi.co/api/v2/pokemon/714/',
    },
    {
      name: 'noivern',
      url: 'https://pokeapi.co/api/v2/pokemon/715/',
    },
    {
      name: 'xerneas',
      url: 'https://pokeapi.co/api/v2/pokemon/716/',
    },
    {
      name: 'yveltal',
      url: 'https://pokeapi.co/api/v2/pokemon/717/',
    },
    {
      name: 'volcanion',
      url: 'https://pokeapi.co/api/v2/pokemon/721/',
    },
    {
      name: 'kartana',
      url: 'https://pokeapi.co/api/v2/pokemon/798/',
    },
    {
      name: 'deoxys-attack',
      url: 'https://pokeapi.co/api/v2/pokemon/10001/',
    },
    {
      name: 'deoxys-defense',
      url: 'https://pokeapi.co/api/v2/pokemon/10002/',
    },
    {
      name: 'deoxys-speed',
      url: 'https://pokeapi.co/api/v2/pokemon/10003/',
    },
    {
      name: 'giratina-origin',
      url: 'https://pokeapi.co/api/v2/pokemon/10007/',
    },
    {
      name: 'basculin-blue-striped',
      url: 'https://pokeapi.co/api/v2/pokemon/10016/',
    },
    {
      name: 'kyurem-black',
      url: 'https://pokeapi.co/api/v2/pokemon/10022/',
    },
    {
      name: 'kyurem-white',
      url: 'https://pokeapi.co/api/v2/pokemon/10023/',
    },
    {
      name: 'keldeo-resolute',
      url: 'https://pokeapi.co/api/v2/pokemon/10024/',
    },
    {
      name: 'meowstic-female',
      url: 'https://pokeapi.co/api/v2/pokemon/10025/',
    },
    {
      name: 'aegislash-blade',
      url: 'https://pokeapi.co/api/v2/pokemon/10026/',
    },
    {
      name: 'venusaur-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10033/',
    },
    {
      name: 'charizard-mega-x',
      url: 'https://pokeapi.co/api/v2/pokemon/10034/',
    },
    {
      name: 'charizard-mega-y',
      url: 'https://pokeapi.co/api/v2/pokemon/10035/',
    },
    {
      name: 'kangaskhan-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10039/',
    },
    {
      name: 'pinsir-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10040/',
    },
    {
      name: 'scizor-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10046/',
    },
    {
      name: 'heracross-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10047/',
    },
    {
      name: 'tyranitar-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10049/',
    },
    {
      name: 'blaziken-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10050/',
    },
    {
      name: 'aggron-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10053/',
    },
    {
      name: 'absol-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10057/',
    },
    {
      name: 'garchomp-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10058/',
    },
    {
      name: 'latias-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10062/',
    },
    {
      name: 'latios-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10063/',
    },
    {
      name: 'sceptile-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10065/',
    },
    {
      name: 'sableye-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10066/',
    },
    {
      name: 'gallade-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10068/',
    },
    {
      name: 'steelix-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10072/',
    },
    {
      name: 'metagross-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10076/',
    },
    {
      name: 'groudon-primal',
      url: 'https://pokeapi.co/api/v2/pokemon/10078/',
    },
    {
      name: 'lopunny-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10088/',
    },
    {
      name: 'salamence-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10089/',
    },
    {
      name: 'beedrill-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10090/',
    },
  ],
};

export const RESPONSE_MOVE_FIXTURE_BIND_ITEM: IResponseMove = {
  ...RESPONSE_MOVE_FIXTURE,
  id: 20,
  pp: 20,
  type: {
    name: 'normal',
    url: 'https://pokeapi.co/api/v2/type/1/',
  },
  name: 'bind',
  power: 15,
  target: {
    name: 'selected-pokemon',
    url: 'https://pokeapi.co/api/v2/move-target/10/',
  },
  priority: 0,
  accuracy: 85,
  damage_class: {
    name: 'physical',
    url: 'https://pokeapi.co/api/v2/move-damage-class/2/',
  },
  effect_chance: 100,
  effect_entries: [
    {
      effect:
        'Inflicts regular damage.  For the next 2–5 turns, the target cannot leave the field and is damaged for 1/16 its max HP at the end of each turn.  The user continues to use other moves during this time.  If the user leaves the field, this effect ends.\n\nHas a 3/8 chance each to hit 2 or 3 times, and a 1/8 chance each to hit 4 or 5 times.  Averages to 3 hits per use.\n\nrapid spin cancels this effect.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      short_effect:
        'Prevents the target from fleeing and inflicts damage for 2-5 turns.',
    },
  ],
  learned_by_pokemon: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
    },
    {
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon/3/',
    },
    {
      name: 'ekans',
      url: 'https://pokeapi.co/api/v2/pokemon/23/',
    },
    {
      name: 'arbok',
      url: 'https://pokeapi.co/api/v2/pokemon/24/',
    },
    {
      name: 'bellsprout',
      url: 'https://pokeapi.co/api/v2/pokemon/69/',
    },
    {
      name: 'weepinbell',
      url: 'https://pokeapi.co/api/v2/pokemon/70/',
    },
    {
      name: 'victreebel',
      url: 'https://pokeapi.co/api/v2/pokemon/71/',
    },
    {
      name: 'tentacool',
      url: 'https://pokeapi.co/api/v2/pokemon/72/',
    },
    {
      name: 'tentacruel',
      url: 'https://pokeapi.co/api/v2/pokemon/73/',
    },
    {
      name: 'onix',
      url: 'https://pokeapi.co/api/v2/pokemon/95/',
    },
    {
      name: 'lickitung',
      url: 'https://pokeapi.co/api/v2/pokemon/108/',
    },
    {
      name: 'tangela',
      url: 'https://pokeapi.co/api/v2/pokemon/114/',
    },
    {
      name: 'pinsir',
      url: 'https://pokeapi.co/api/v2/pokemon/127/',
    },
    {
      name: 'gyarados',
      url: 'https://pokeapi.co/api/v2/pokemon/130/',
    },
    {
      name: 'omanyte',
      url: 'https://pokeapi.co/api/v2/pokemon/138/',
    },
    {
      name: 'omastar',
      url: 'https://pokeapi.co/api/v2/pokemon/139/',
    },
    {
      name: 'dratini',
      url: 'https://pokeapi.co/api/v2/pokemon/147/',
    },
    {
      name: 'dragonair',
      url: 'https://pokeapi.co/api/v2/pokemon/148/',
    },
    {
      name: 'dragonite',
      url: 'https://pokeapi.co/api/v2/pokemon/149/',
    },
    {
      name: 'mew',
      url: 'https://pokeapi.co/api/v2/pokemon/151/',
    },
    {
      name: 'dunsparce',
      url: 'https://pokeapi.co/api/v2/pokemon/206/',
    },
    {
      name: 'steelix',
      url: 'https://pokeapi.co/api/v2/pokemon/208/',
    },
    {
      name: 'shuckle',
      url: 'https://pokeapi.co/api/v2/pokemon/213/',
    },
    {
      name: 'octillery',
      url: 'https://pokeapi.co/api/v2/pokemon/224/',
    },
    {
      name: 'seviper',
      url: 'https://pokeapi.co/api/v2/pokemon/336/',
    },
    {
      name: 'lileep',
      url: 'https://pokeapi.co/api/v2/pokemon/345/',
    },
    {
      name: 'cradily',
      url: 'https://pokeapi.co/api/v2/pokemon/346/',
    },
    {
      name: 'milotic',
      url: 'https://pokeapi.co/api/v2/pokemon/350/',
    },
    {
      name: 'kecleon',
      url: 'https://pokeapi.co/api/v2/pokemon/352/',
    },
    {
      name: 'dusclops',
      url: 'https://pokeapi.co/api/v2/pokemon/356/',
    },
    {
      name: 'chimecho',
      url: 'https://pokeapi.co/api/v2/pokemon/358/',
    },
    {
      name: 'huntail',
      url: 'https://pokeapi.co/api/v2/pokemon/367/',
    },
    {
      name: 'gorebyss',
      url: 'https://pokeapi.co/api/v2/pokemon/368/',
    },
    {
      name: 'rayquaza',
      url: 'https://pokeapi.co/api/v2/pokemon/384/',
    },
    {
      name: 'deoxys-normal',
      url: 'https://pokeapi.co/api/v2/pokemon/386/',
    },
    {
      name: 'drifloon',
      url: 'https://pokeapi.co/api/v2/pokemon/425/',
    },
    {
      name: 'drifblim',
      url: 'https://pokeapi.co/api/v2/pokemon/426/',
    },
    {
      name: 'chingling',
      url: 'https://pokeapi.co/api/v2/pokemon/433/',
    },
    {
      name: 'carnivine',
      url: 'https://pokeapi.co/api/v2/pokemon/455/',
    },
    {
      name: 'lickilicky',
      url: 'https://pokeapi.co/api/v2/pokemon/463/',
    },
    {
      name: 'tangrowth',
      url: 'https://pokeapi.co/api/v2/pokemon/465/',
    },
    {
      name: 'dusknoir',
      url: 'https://pokeapi.co/api/v2/pokemon/477/',
    },
    {
      name: 'snivy',
      url: 'https://pokeapi.co/api/v2/pokemon/495/',
    },
    {
      name: 'servine',
      url: 'https://pokeapi.co/api/v2/pokemon/496/',
    },
    {
      name: 'serperior',
      url: 'https://pokeapi.co/api/v2/pokemon/497/',
    },
    {
      name: 'throh',
      url: 'https://pokeapi.co/api/v2/pokemon/538/',
    },
    {
      name: 'frillish',
      url: 'https://pokeapi.co/api/v2/pokemon/592/',
    },
    {
      name: 'jellicent',
      url: 'https://pokeapi.co/api/v2/pokemon/593/',
    },
    {
      name: 'klink',
      url: 'https://pokeapi.co/api/v2/pokemon/599/',
    },
    {
      name: 'klang',
      url: 'https://pokeapi.co/api/v2/pokemon/600/',
    },
    {
      name: 'klinklang',
      url: 'https://pokeapi.co/api/v2/pokemon/601/',
    },
    {
      name: 'eelektrik',
      url: 'https://pokeapi.co/api/v2/pokemon/603/',
    },
    {
      name: 'eelektross',
      url: 'https://pokeapi.co/api/v2/pokemon/604/',
    },
    {
      name: 'cryogonal',
      url: 'https://pokeapi.co/api/v2/pokemon/615/',
    },
    {
      name: 'heatmor',
      url: 'https://pokeapi.co/api/v2/pokemon/631/',
    },
    {
      name: 'inkay',
      url: 'https://pokeapi.co/api/v2/pokemon/686/',
    },
    {
      name: 'malamar',
      url: 'https://pokeapi.co/api/v2/pokemon/687/',
    },
    {
      name: 'zygarde-50',
      url: 'https://pokeapi.co/api/v2/pokemon/718/',
    },
    {
      name: 'incineroar',
      url: 'https://pokeapi.co/api/v2/pokemon/727/',
    },
    {
      name: 'stufful',
      url: 'https://pokeapi.co/api/v2/pokemon/759/',
    },
    {
      name: 'bewear',
      url: 'https://pokeapi.co/api/v2/pokemon/760/',
    },
    {
      name: 'comfey',
      url: 'https://pokeapi.co/api/v2/pokemon/764/',
    },
    {
      name: 'nihilego',
      url: 'https://pokeapi.co/api/v2/pokemon/793/',
    },
    {
      name: 'xurkitree',
      url: 'https://pokeapi.co/api/v2/pokemon/796/',
    },
    {
      name: 'stakataka',
      url: 'https://pokeapi.co/api/v2/pokemon/805/',
    },
    {
      name: 'sobble',
      url: 'https://pokeapi.co/api/v2/pokemon/816/',
    },
    {
      name: 'drizzile',
      url: 'https://pokeapi.co/api/v2/pokemon/817/',
    },
    {
      name: 'inteleon',
      url: 'https://pokeapi.co/api/v2/pokemon/818/',
    },
    {
      name: 'clobbopus',
      url: 'https://pokeapi.co/api/v2/pokemon/852/',
    },
    {
      name: 'grapploct',
      url: 'https://pokeapi.co/api/v2/pokemon/853/',
    },
    {
      name: 'zarude',
      url: 'https://pokeapi.co/api/v2/pokemon/893/',
    },
    {
      name: 'deoxys-attack',
      url: 'https://pokeapi.co/api/v2/pokemon/10001/',
    },
    {
      name: 'deoxys-defense',
      url: 'https://pokeapi.co/api/v2/pokemon/10002/',
    },
    {
      name: 'deoxys-speed',
      url: 'https://pokeapi.co/api/v2/pokemon/10003/',
    },
    {
      name: 'venusaur-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10033/',
    },
    {
      name: 'pinsir-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10040/',
    },
    {
      name: 'gyarados-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10041/',
    },
    {
      name: 'steelix-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10072/',
    },
    {
      name: 'rayquaza-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10079/',
    },
    {
      name: 'zygarde-10-power-construct',
      url: 'https://pokeapi.co/api/v2/pokemon/10118/',
    },
    {
      name: 'zygarde-50-power-construct',
      url: 'https://pokeapi.co/api/v2/pokemon/10119/',
    },
    {
      name: 'zygarde-complete',
      url: 'https://pokeapi.co/api/v2/pokemon/10120/',
    },
    {
      name: 'stunfisk-galar',
      url: 'https://pokeapi.co/api/v2/pokemon/10180/',
    },
    {
      name: 'zygarde-10',
      url: 'https://pokeapi.co/api/v2/pokemon/10181/',
    },
    {
      name: 'zarude-dada',
      url: 'https://pokeapi.co/api/v2/pokemon/10192/',
    },
  ],
};

export const RESPONSE_MOVE_FIXTURE_RAZOR_WIND_ITEM: IResponseMove = {
  ...RESPONSE_MOVE_FIXTURE,
  id: 13,
  pp: 10,
  type: {
    url: 'https://pokeapi.co/api/v2/type/1/',
    name: 'normal',
  },
  name: 'razor-wind',
  power: 80,
  target: {
    name: 'all-opponents',
    url: 'https://pokeapi.co/api/v2/move-target/11/',
  },
  priority: 0,
  accuracy: 100,
  damage_class: {
    name: 'special',
    url: 'https://pokeapi.co/api/v2/move-damage-class/3/',
  },
  effect_chance: null,
  effect_entries: [
    {
      effect:
        'Inflicts regular damage.  User s critical hit rate is one level' +
        ' higher when using this move.  User charges for one turn before' +
        ' attacking.\n\nThis move cannot be selected by sleep talk.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      short_effect: 'Requires a turn to charge before attacking.',
    },
  ],
  learned_by_pokemon: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    {
      name: 'butterfree',
      url: 'https://pokeapi.co/api/v2/pokemon/12/',
    },
    {
      name: 'pidgey',
      url: 'https://pokeapi.co/api/v2/pokemon/16/',
    },
    {
      name: 'pidgeotto',
      url: 'https://pokeapi.co/api/v2/pokemon/17/',
    },
    {
      name: 'pidgeot',
      url: 'https://pokeapi.co/api/v2/pokemon/18/',
    },
    {
      name: 'spearow',
      url: 'https://pokeapi.co/api/v2/pokemon/21/',
    },
    {
      name: 'fearow',
      url: 'https://pokeapi.co/api/v2/pokemon/22/',
    },
    {
      name: 'zubat',
      url: 'https://pokeapi.co/api/v2/pokemon/41/',
    },
    {
      name: 'golbat',
      url: 'https://pokeapi.co/api/v2/pokemon/42/',
    },
    {
      name: 'venomoth',
      url: 'https://pokeapi.co/api/v2/pokemon/49/',
    },
    {
      name: 'farfetchd',
      url: 'https://pokeapi.co/api/v2/pokemon/83/',
    },
    {
      name: 'horsea',
      url: 'https://pokeapi.co/api/v2/pokemon/116/',
    },
    {
      name: 'scyther',
      url: 'https://pokeapi.co/api/v2/pokemon/123/',
    },
    {
      name: 'kabutops',
      url: 'https://pokeapi.co/api/v2/pokemon/141/',
    },
    {
      name: 'aerodactyl',
      url: 'https://pokeapi.co/api/v2/pokemon/142/',
    },
    {
      name: 'articuno',
      url: 'https://pokeapi.co/api/v2/pokemon/144/',
    },
    {
      name: 'zapdos',
      url: 'https://pokeapi.co/api/v2/pokemon/145/',
    },
    {
      name: 'moltres',
      url: 'https://pokeapi.co/api/v2/pokemon/146/',
    },
    {
      name: 'dragonite',
      url: 'https://pokeapi.co/api/v2/pokemon/149/',
    },
    {
      name: 'mew',
      url: 'https://pokeapi.co/api/v2/pokemon/151/',
    },
    {
      name: 'totodile',
      url: 'https://pokeapi.co/api/v2/pokemon/158/',
    },
    {
      name: 'girafarig',
      url: 'https://pokeapi.co/api/v2/pokemon/203/',
    },
    {
      name: 'gligar',
      url: 'https://pokeapi.co/api/v2/pokemon/207/',
    },
    {
      name: 'scizor',
      url: 'https://pokeapi.co/api/v2/pokemon/212/',
    },
    {
      name: 'treecko',
      url: 'https://pokeapi.co/api/v2/pokemon/252/',
    },
    {
      name: 'seedot',
      url: 'https://pokeapi.co/api/v2/pokemon/273/',
    },
    {
      name: 'nuzleaf',
      url: 'https://pokeapi.co/api/v2/pokemon/274/',
    },
    {
      name: 'zangoose',
      url: 'https://pokeapi.co/api/v2/pokemon/335/',
    },
    {
      name: 'tropius',
      url: 'https://pokeapi.co/api/v2/pokemon/357/',
    },
    {
      name: 'absol',
      url: 'https://pokeapi.co/api/v2/pokemon/359/',
    },
    {
      name: 'buizel',
      url: 'https://pokeapi.co/api/v2/pokemon/418/',
    },
    {
      name: 'floatzel',
      url: 'https://pokeapi.co/api/v2/pokemon/419/',
    },
    {
      name: 'pidove',
      url: 'https://pokeapi.co/api/v2/pokemon/519/',
    },
    {
      name: 'tranquill',
      url: 'https://pokeapi.co/api/v2/pokemon/520/',
    },
    {
      name: 'unfezant',
      url: 'https://pokeapi.co/api/v2/pokemon/521/',
    },
    {
      name: 'sewaddle',
      url: 'https://pokeapi.co/api/v2/pokemon/540/',
    },
    {
      name: 'axew',
      url: 'https://pokeapi.co/api/v2/pokemon/610/',
    },
    {
      name: 'fletchling',
      url: 'https://pokeapi.co/api/v2/pokemon/661/',
    },
    {
      name: 'fletchinder',
      url: 'https://pokeapi.co/api/v2/pokemon/662/',
    },
    {
      name: 'talonflame',
      url: 'https://pokeapi.co/api/v2/pokemon/663/',
    },
    {
      name: 'helioptile',
      url: 'https://pokeapi.co/api/v2/pokemon/694/',
    },
    {
      name: 'heliolisk',
      url: 'https://pokeapi.co/api/v2/pokemon/695/',
    },
    {
      name: 'noibat',
      url: 'https://pokeapi.co/api/v2/pokemon/714/',
    },
    {
      name: 'noivern',
      url: 'https://pokeapi.co/api/v2/pokemon/715/',
    },
    {
      name: 'yveltal',
      url: 'https://pokeapi.co/api/v2/pokemon/717/',
    },
    {
      name: 'type-null',
      url: 'https://pokeapi.co/api/v2/pokemon/772/',
    },
    {
      name: 'silvally',
      url: 'https://pokeapi.co/api/v2/pokemon/773/',
    },
    {
      name: 'drampa',
      url: 'https://pokeapi.co/api/v2/pokemon/780/',
    },
    {
      name: 'scizor-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10046/',
    },
    {
      name: 'absol-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10057/',
    },
    {
      name: 'pidgeot-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10073/',
    },
  ],
};

export const RESPONSE_MOVE_FIXTURE_SWORDS_DANCE_ITEM: IResponseMove = {
  ...RESPONSE_MOVE_FIXTURE,
  id: 14,
  pp: 20,
  type: {
    name: 'normal',
    url: 'https://pokeapi.co/api/v2/type/1/',
  },
  name: 'swords-dance',
  power: null,
  target: {
    name: 'user',
    url: 'https://pokeapi.co/api/v2/move-target/7/',
  },
  priority: 0,
  accuracy: null,
  damage_class: {
    name: 'status',
    url: 'https://pokeapi.co/api/v2/move-damage-class/1/',
  },
  effect_chance: null,
  effect_entries: [
    {
      effect: 'Raises the user s Attack by two stages.',
      language: {
        name: 'en',
        url: 'https://pokeapi.co/api/v2/language/9/',
      },
      short_effect: 'Raises the user s Attack by two stages.',
    },
  ],
  learned_by_pokemon: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    },
    {
      name: 'ivysaur',
      url: 'https://pokeapi.co/api/v2/pokemon/2/',
    },
    {
      name: 'venusaur',
      url: 'https://pokeapi.co/api/v2/pokemon/3/',
    },
    {
      name: 'charmander',
      url: 'https://pokeapi.co/api/v2/pokemon/4/',
    },
    {
      name: 'charmeleon',
      url: 'https://pokeapi.co/api/v2/pokemon/5/',
    },
    {
      name: 'charizard',
      url: 'https://pokeapi.co/api/v2/pokemon/6/',
    },
    {
      name: 'beedrill',
      url: 'https://pokeapi.co/api/v2/pokemon/15/',
    },
    {
      name: 'raticate',
      url: 'https://pokeapi.co/api/v2/pokemon/20/',
    },
    {
      name: 'sandshrew',
      url: 'https://pokeapi.co/api/v2/pokemon/27/',
    },
    {
      name: 'sandslash',
      url: 'https://pokeapi.co/api/v2/pokemon/28/',
    },
    {
      name: 'oddish',
      url: 'https://pokeapi.co/api/v2/pokemon/43/',
    },
    {
      name: 'gloom',
      url: 'https://pokeapi.co/api/v2/pokemon/44/',
    },
    {
      name: 'vileplume',
      url: 'https://pokeapi.co/api/v2/pokemon/45/',
    },
    {
      name: 'paras',
      url: 'https://pokeapi.co/api/v2/pokemon/46/',
    },
    {
      name: 'parasect',
      url: 'https://pokeapi.co/api/v2/pokemon/47/',
    },
    {
      name: 'diglett',
      url: 'https://pokeapi.co/api/v2/pokemon/50/',
    },
    {
      name: 'dugtrio',
      url: 'https://pokeapi.co/api/v2/pokemon/51/',
    },
    {
      name: 'bellsprout',
      url: 'https://pokeapi.co/api/v2/pokemon/69/',
    },
    {
      name: 'weepinbell',
      url: 'https://pokeapi.co/api/v2/pokemon/70/',
    },
    {
      name: 'victreebel',
      url: 'https://pokeapi.co/api/v2/pokemon/71/',
    },
    {
      name: 'tentacool',
      url: 'https://pokeapi.co/api/v2/pokemon/72/',
    },
    {
      name: 'tentacruel',
      url: 'https://pokeapi.co/api/v2/pokemon/73/',
    },
    {
      name: 'rapidash',
      url: 'https://pokeapi.co/api/v2/pokemon/78/',
    },
    {
      name: 'farfetchd',
      url: 'https://pokeapi.co/api/v2/pokemon/83/',
    },
    {
      name: 'doduo',
      url: 'https://pokeapi.co/api/v2/pokemon/84/',
    },
    {
      name: 'dodrio',
      url: 'https://pokeapi.co/api/v2/pokemon/85/',
    },
    {
      name: 'krabby',
      url: 'https://pokeapi.co/api/v2/pokemon/98/',
    },
    {
      name: 'kingler',
      url: 'https://pokeapi.co/api/v2/pokemon/99/',
    },
    {
      name: 'exeggcute',
      url: 'https://pokeapi.co/api/v2/pokemon/102/',
    },
    {
      name: 'exeggutor',
      url: 'https://pokeapi.co/api/v2/pokemon/103/',
    },
    {
      name: 'cubone',
      url: 'https://pokeapi.co/api/v2/pokemon/104/',
    },
    {
      name: 'marowak',
      url: 'https://pokeapi.co/api/v2/pokemon/105/',
    },
    {
      name: 'hitmonlee',
      url: 'https://pokeapi.co/api/v2/pokemon/106/',
    },
    {
      name: 'hitmonchan',
      url: 'https://pokeapi.co/api/v2/pokemon/107/',
    },
    {
      name: 'lickitung',
      url: 'https://pokeapi.co/api/v2/pokemon/108/',
    },
    {
      name: 'rhyhorn',
      url: 'https://pokeapi.co/api/v2/pokemon/111/',
    },
    {
      name: 'rhydon',
      url: 'https://pokeapi.co/api/v2/pokemon/112/',
    },
    {
      name: 'tangela',
      url: 'https://pokeapi.co/api/v2/pokemon/114/',
    },
    {
      name: 'goldeen',
      url: 'https://pokeapi.co/api/v2/pokemon/118/',
    },
    {
      name: 'seaking',
      url: 'https://pokeapi.co/api/v2/pokemon/119/',
    },
    {
      name: 'scyther',
      url: 'https://pokeapi.co/api/v2/pokemon/123/',
    },
    {
      name: 'pinsir',
      url: 'https://pokeapi.co/api/v2/pokemon/127/',
    },
    {
      name: 'kabutops',
      url: 'https://pokeapi.co/api/v2/pokemon/141/',
    },
    {
      name: 'mew',
      url: 'https://pokeapi.co/api/v2/pokemon/151/',
    },
    {
      name: 'chikorita',
      url: 'https://pokeapi.co/api/v2/pokemon/152/',
    },
    {
      name: 'bayleef',
      url: 'https://pokeapi.co/api/v2/pokemon/153/',
    },
    {
      name: 'meganium',
      url: 'https://pokeapi.co/api/v2/pokemon/154/',
    },
    {
      name: 'totodile',
      url: 'https://pokeapi.co/api/v2/pokemon/158/',
    },
    {
      name: 'croconaw',
      url: 'https://pokeapi.co/api/v2/pokemon/159/',
    },
    {
      name: 'feraligatr',
      url: 'https://pokeapi.co/api/v2/pokemon/160/',
    },
    {
      name: 'ledyba',
      url: 'https://pokeapi.co/api/v2/pokemon/165/',
    },
    {
      name: 'ledian',
      url: 'https://pokeapi.co/api/v2/pokemon/166/',
    },
    {
      name: 'ariados',
      url: 'https://pokeapi.co/api/v2/pokemon/168/',
    },
    {
      name: 'bellossom',
      url: 'https://pokeapi.co/api/v2/pokemon/182/',
    },
    {
      name: 'hoppip',
      url: 'https://pokeapi.co/api/v2/pokemon/187/',
    },
    {
      name: 'skiploom',
      url: 'https://pokeapi.co/api/v2/pokemon/188/',
    },
    {
      name: 'jumpluff',
      url: 'https://pokeapi.co/api/v2/pokemon/189/',
    },
    {
      name: 'sunkern',
      url: 'https://pokeapi.co/api/v2/pokemon/191/',
    },
    {
      name: 'sunflora',
      url: 'https://pokeapi.co/api/v2/pokemon/192/',
    },
    {
      name: 'yanma',
      url: 'https://pokeapi.co/api/v2/pokemon/193/',
    },
    {
      name: 'gligar',
      url: 'https://pokeapi.co/api/v2/pokemon/207/',
    },
    {
      name: 'qwilfish',
      url: 'https://pokeapi.co/api/v2/pokemon/211/',
    },
    {
      name: 'scizor',
      url: 'https://pokeapi.co/api/v2/pokemon/212/',
    },
    {
      name: 'heracross',
      url: 'https://pokeapi.co/api/v2/pokemon/214/',
    },
    {
      name: 'sneasel',
      url: 'https://pokeapi.co/api/v2/pokemon/215/',
    },
    {
      name: 'teddiursa',
      url: 'https://pokeapi.co/api/v2/pokemon/216/',
    },
    {
      name: 'ursaring',
      url: 'https://pokeapi.co/api/v2/pokemon/217/',
    },
    {
      name: 'skarmory',
      url: 'https://pokeapi.co/api/v2/pokemon/227/',
    },
    {
      name: 'celebi',
      url: 'https://pokeapi.co/api/v2/pokemon/251/',
    },
    {
      name: 'treecko',
      url: 'https://pokeapi.co/api/v2/pokemon/252/',
    },
    {
      name: 'grovyle',
      url: 'https://pokeapi.co/api/v2/pokemon/253/',
    },
    {
      name: 'sceptile',
      url: 'https://pokeapi.co/api/v2/pokemon/254/',
    },
    {
      name: 'torchic',
      url: 'https://pokeapi.co/api/v2/pokemon/255/',
    },
    {
      name: 'combusken',
      url: 'https://pokeapi.co/api/v2/pokemon/256/',
    },
    {
      name: 'blaziken',
      url: 'https://pokeapi.co/api/v2/pokemon/257/',
    },
    {
      name: 'lotad',
      url: 'https://pokeapi.co/api/v2/pokemon/270/',
    },
    {
      name: 'lombre',
      url: 'https://pokeapi.co/api/v2/pokemon/271/',
    },
    {
      name: 'ludicolo',
      url: 'https://pokeapi.co/api/v2/pokemon/272/',
    },
    {
      name: 'seedot',
      url: 'https://pokeapi.co/api/v2/pokemon/273/',
    },
    {
      name: 'nuzleaf',
      url: 'https://pokeapi.co/api/v2/pokemon/274/',
    },
    {
      name: 'shiftry',
      url: 'https://pokeapi.co/api/v2/pokemon/275/',
    },
    {
      name: 'shroomish',
      url: 'https://pokeapi.co/api/v2/pokemon/285/',
    },
    {
      name: 'breloom',
      url: 'https://pokeapi.co/api/v2/pokemon/286/',
    },
    {
      name: 'ninjask',
      url: 'https://pokeapi.co/api/v2/pokemon/291/',
    },
    {
      name: 'mawile',
      url: 'https://pokeapi.co/api/v2/pokemon/303/',
    },
    {
      name: 'roselia',
      url: 'https://pokeapi.co/api/v2/pokemon/315/',
    },
    {
      name: 'gulpin',
      url: 'https://pokeapi.co/api/v2/pokemon/316/',
    },
    {
      name: 'swalot',
      url: 'https://pokeapi.co/api/v2/pokemon/317/',
    },
    {
      name: 'cacnea',
      url: 'https://pokeapi.co/api/v2/pokemon/331/',
    },
    {
      name: 'cacturne',
      url: 'https://pokeapi.co/api/v2/pokemon/332/',
    },
    {
      name: 'zangoose',
      url: 'https://pokeapi.co/api/v2/pokemon/335/',
    },
    {
      name: 'seviper',
      url: 'https://pokeapi.co/api/v2/pokemon/336/',
    },
    {
      name: 'solrock',
      url: 'https://pokeapi.co/api/v2/pokemon/338/',
    },
    {
      name: 'corphish',
      url: 'https://pokeapi.co/api/v2/pokemon/341/',
    },
    {
      name: 'crawdaunt',
      url: 'https://pokeapi.co/api/v2/pokemon/342/',
    },
    {
      name: 'lileep',
      url: 'https://pokeapi.co/api/v2/pokemon/345/',
    },
    {
      name: 'cradily',
      url: 'https://pokeapi.co/api/v2/pokemon/346/',
    },
    {
      name: 'anorith',
      url: 'https://pokeapi.co/api/v2/pokemon/347/',
    },
    {
      name: 'armaldo',
      url: 'https://pokeapi.co/api/v2/pokemon/348/',
    },
    {
      name: 'banette',
      url: 'https://pokeapi.co/api/v2/pokemon/354/',
    },
    {
      name: 'tropius',
      url: 'https://pokeapi.co/api/v2/pokemon/357/',
    },
    {
      name: 'absol',
      url: 'https://pokeapi.co/api/v2/pokemon/359/',
    },
    {
      name: 'walrein',
      url: 'https://pokeapi.co/api/v2/pokemon/365/',
    },
    {
      name: 'groudon',
      url: 'https://pokeapi.co/api/v2/pokemon/383/',
    },
    {
      name: 'rayquaza',
      url: 'https://pokeapi.co/api/v2/pokemon/384/',
    },
    {
      name: 'turtwig',
      url: 'https://pokeapi.co/api/v2/pokemon/387/',
    },
    {
      name: 'grotle',
      url: 'https://pokeapi.co/api/v2/pokemon/388/',
    },
    {
      name: 'torterra',
      url: 'https://pokeapi.co/api/v2/pokemon/389/',
    },
    {
      name: 'chimchar',
      url: 'https://pokeapi.co/api/v2/pokemon/390/',
    },
    {
      name: 'monferno',
      url: 'https://pokeapi.co/api/v2/pokemon/391/',
    },
    {
      name: 'infernape',
      url: 'https://pokeapi.co/api/v2/pokemon/392/',
    },
    {
      name: 'empoleon',
      url: 'https://pokeapi.co/api/v2/pokemon/395/',
    },
    {
      name: 'bidoof',
      url: 'https://pokeapi.co/api/v2/pokemon/399/',
    },
    {
      name: 'bibarel',
      url: 'https://pokeapi.co/api/v2/pokemon/400/',
    },
    {
      name: 'kricketune',
      url: 'https://pokeapi.co/api/v2/pokemon/402/',
    },
    {
      name: 'budew',
      url: 'https://pokeapi.co/api/v2/pokemon/406/',
    },
    {
      name: 'roserade',
      url: 'https://pokeapi.co/api/v2/pokemon/407/',
    },
    {
      name: 'cranidos',
      url: 'https://pokeapi.co/api/v2/pokemon/408/',
    },
    {
      name: 'rampardos',
      url: 'https://pokeapi.co/api/v2/pokemon/409/',
    },
    {
      name: 'cherubi',
      url: 'https://pokeapi.co/api/v2/pokemon/420/',
    },
    {
      name: 'cherrim',
      url: 'https://pokeapi.co/api/v2/pokemon/421/',
    },
    {
      name: 'gible',
      url: 'https://pokeapi.co/api/v2/pokemon/443/',
    },
    {
      name: 'gabite',
      url: 'https://pokeapi.co/api/v2/pokemon/444/',
    },
    {
      name: 'garchomp',
      url: 'https://pokeapi.co/api/v2/pokemon/445/',
    },
    {
      name: 'riolu',
      url: 'https://pokeapi.co/api/v2/pokemon/447/',
    },
    {
      name: 'lucario',
      url: 'https://pokeapi.co/api/v2/pokemon/448/',
    },
    {
      name: 'skorupi',
      url: 'https://pokeapi.co/api/v2/pokemon/451/',
    },
    {
      name: 'drapion',
      url: 'https://pokeapi.co/api/v2/pokemon/452/',
    },
    {
      name: 'toxicroak',
      url: 'https://pokeapi.co/api/v2/pokemon/454/',
    },
    {
      name: 'carnivine',
      url: 'https://pokeapi.co/api/v2/pokemon/455/',
    },
    {
      name: 'snover',
      url: 'https://pokeapi.co/api/v2/pokemon/459/',
    },
    {
      name: 'abomasnow',
      url: 'https://pokeapi.co/api/v2/pokemon/460/',
    },
    {
      name: 'weavile',
      url: 'https://pokeapi.co/api/v2/pokemon/461/',
    },
    {
      name: 'lickilicky',
      url: 'https://pokeapi.co/api/v2/pokemon/463/',
    },
    {
      name: 'rhyperior',
      url: 'https://pokeapi.co/api/v2/pokemon/464/',
    },
    {
      name: 'tangrowth',
      url: 'https://pokeapi.co/api/v2/pokemon/465/',
    },
    {
      name: 'yanmega',
      url: 'https://pokeapi.co/api/v2/pokemon/469/',
    },
    {
      name: 'leafeon',
      url: 'https://pokeapi.co/api/v2/pokemon/470/',
    },
    {
      name: 'gliscor',
      url: 'https://pokeapi.co/api/v2/pokemon/472/',
    },
    {
      name: 'gallade',
      url: 'https://pokeapi.co/api/v2/pokemon/475/',
    },
    {
      name: 'darkrai',
      url: 'https://pokeapi.co/api/v2/pokemon/491/',
    },
    {
      name: 'shaymin-land',
      url: 'https://pokeapi.co/api/v2/pokemon/492/',
    },
    {
      name: 'arceus',
      url: 'https://pokeapi.co/api/v2/pokemon/493/',
    },
    {
      name: 'snivy',
      url: 'https://pokeapi.co/api/v2/pokemon/495/',
    },
    {
      name: 'servine',
      url: 'https://pokeapi.co/api/v2/pokemon/496/',
    },
    {
      name: 'serperior',
      url: 'https://pokeapi.co/api/v2/pokemon/497/',
    },
    {
      name: 'oshawott',
      url: 'https://pokeapi.co/api/v2/pokemon/501/',
    },
    {
      name: 'dewott',
      url: 'https://pokeapi.co/api/v2/pokemon/502/',
    },
    {
      name: 'samurott',
      url: 'https://pokeapi.co/api/v2/pokemon/503/',
    },
    {
      name: 'patrat',
      url: 'https://pokeapi.co/api/v2/pokemon/504/',
    },
    {
      name: 'watchog',
      url: 'https://pokeapi.co/api/v2/pokemon/505/',
    },
    {
      name: 'drilbur',
      url: 'https://pokeapi.co/api/v2/pokemon/529/',
    },
    {
      name: 'excadrill',
      url: 'https://pokeapi.co/api/v2/pokemon/530/',
    },
    {
      name: 'leavanny',
      url: 'https://pokeapi.co/api/v2/pokemon/542/',
    },
    {
      name: 'scolipede',
      url: 'https://pokeapi.co/api/v2/pokemon/545/',
    },
    {
      name: 'lilligant',
      url: 'https://pokeapi.co/api/v2/pokemon/549/',
    },
    {
      name: 'dwebble',
      url: 'https://pokeapi.co/api/v2/pokemon/557/',
    },
    {
      name: 'crustle',
      url: 'https://pokeapi.co/api/v2/pokemon/558/',
    },
    {
      name: 'scrafty',
      url: 'https://pokeapi.co/api/v2/pokemon/560/',
    },
    {
      name: 'zorua',
      url: 'https://pokeapi.co/api/v2/pokemon/570/',
    },
    {
      name: 'zoroark',
      url: 'https://pokeapi.co/api/v2/pokemon/571/',
    },
    {
      name: 'sawsbuck',
      url: 'https://pokeapi.co/api/v2/pokemon/586/',
    },
    {
      name: 'karrablast',
      url: 'https://pokeapi.co/api/v2/pokemon/588/',
    },
    {
      name: 'escavalier',
      url: 'https://pokeapi.co/api/v2/pokemon/589/',
    },
    {
      name: 'ferrothorn',
      url: 'https://pokeapi.co/api/v2/pokemon/598/',
    },
    {
      name: 'axew',
      url: 'https://pokeapi.co/api/v2/pokemon/610/',
    },
    {
      name: 'fraxure',
      url: 'https://pokeapi.co/api/v2/pokemon/611/',
    },
    {
      name: 'haxorus',
      url: 'https://pokeapi.co/api/v2/pokemon/612/',
    },
    {
      name: 'beartic',
      url: 'https://pokeapi.co/api/v2/pokemon/614/',
    },
    {
      name: 'mienfoo',
      url: 'https://pokeapi.co/api/v2/pokemon/619/',
    },
    {
      name: 'mienshao',
      url: 'https://pokeapi.co/api/v2/pokemon/620/',
    },
    {
      name: 'pawniard',
      url: 'https://pokeapi.co/api/v2/pokemon/624/',
    },
    {
      name: 'bisharp',
      url: 'https://pokeapi.co/api/v2/pokemon/625/',
    },
    {
      name: 'bouffalant',
      url: 'https://pokeapi.co/api/v2/pokemon/626/',
    },
    {
      name: 'cobalion',
      url: 'https://pokeapi.co/api/v2/pokemon/638/',
    },
    {
      name: 'terrakion',
      url: 'https://pokeapi.co/api/v2/pokemon/639/',
    },
    {
      name: 'virizion',
      url: 'https://pokeapi.co/api/v2/pokemon/640/',
    },
    {
      name: 'landorus-incarnate',
      url: 'https://pokeapi.co/api/v2/pokemon/645/',
    },
    {
      name: 'keldeo-ordinary',
      url: 'https://pokeapi.co/api/v2/pokemon/647/',
    },
    {
      name: 'meloetta-aria',
      url: 'https://pokeapi.co/api/v2/pokemon/648/',
    },
    {
      name: 'chespin',
      url: 'https://pokeapi.co/api/v2/pokemon/650/',
    },
    {
      name: 'quilladin',
      url: 'https://pokeapi.co/api/v2/pokemon/651/',
    },
    {
      name: 'chesnaught',
      url: 'https://pokeapi.co/api/v2/pokemon/652/',
    },
    {
      name: 'frogadier',
      url: 'https://pokeapi.co/api/v2/pokemon/657/',
    },
    {
      name: 'greninja',
      url: 'https://pokeapi.co/api/v2/pokemon/658/',
    },
    {
      name: 'bunnelby',
      url: 'https://pokeapi.co/api/v2/pokemon/659/',
    },
    {
      name: 'diggersby',
      url: 'https://pokeapi.co/api/v2/pokemon/660/',
    },
    {
      name: 'fletchling',
      url: 'https://pokeapi.co/api/v2/pokemon/661/',
    },
    {
      name: 'fletchinder',
      url: 'https://pokeapi.co/api/v2/pokemon/662/',
    },
    {
      name: 'talonflame',
      url: 'https://pokeapi.co/api/v2/pokemon/663/',
    },
    {
      name: 'pancham',
      url: 'https://pokeapi.co/api/v2/pokemon/674/',
    },
    {
      name: 'pangoro',
      url: 'https://pokeapi.co/api/v2/pokemon/675/',
    },
    {
      name: 'honedge',
      url: 'https://pokeapi.co/api/v2/pokemon/679/',
    },
    {
      name: 'doublade',
      url: 'https://pokeapi.co/api/v2/pokemon/680/',
    },
    {
      name: 'aegislash-shield',
      url: 'https://pokeapi.co/api/v2/pokemon/681/',
    },
    {
      name: 'binacle',
      url: 'https://pokeapi.co/api/v2/pokemon/688/',
    },
    {
      name: 'barbaracle',
      url: 'https://pokeapi.co/api/v2/pokemon/689/',
    },
    {
      name: 'clauncher',
      url: 'https://pokeapi.co/api/v2/pokemon/692/',
    },
    {
      name: 'clawitzer',
      url: 'https://pokeapi.co/api/v2/pokemon/693/',
    },
    {
      name: 'hawlucha',
      url: 'https://pokeapi.co/api/v2/pokemon/701/',
    },
    {
      name: 'rowlet',
      url: 'https://pokeapi.co/api/v2/pokemon/722/',
    },
    {
      name: 'dartrix',
      url: 'https://pokeapi.co/api/v2/pokemon/723/',
    },
    {
      name: 'decidueye',
      url: 'https://pokeapi.co/api/v2/pokemon/724/',
    },
    {
      name: 'litten',
      url: 'https://pokeapi.co/api/v2/pokemon/725/',
    },
    {
      name: 'torracat',
      url: 'https://pokeapi.co/api/v2/pokemon/726/',
    },
    {
      name: 'incineroar',
      url: 'https://pokeapi.co/api/v2/pokemon/727/',
    },
    {
      name: 'pikipek',
      url: 'https://pokeapi.co/api/v2/pokemon/731/',
    },
    {
      name: 'trumbeak',
      url: 'https://pokeapi.co/api/v2/pokemon/732/',
    },
    {
      name: 'toucannon',
      url: 'https://pokeapi.co/api/v2/pokemon/733/',
    },
    {
      name: 'oricorio-baile',
      url: 'https://pokeapi.co/api/v2/pokemon/741/',
    },
    {
      name: 'rockruff',
      url: 'https://pokeapi.co/api/v2/pokemon/744/',
    },
    {
      name: 'lycanroc-midday',
      url: 'https://pokeapi.co/api/v2/pokemon/745/',
    },
    {
      name: 'fomantis',
      url: 'https://pokeapi.co/api/v2/pokemon/753/',
    },
    {
      name: 'lurantis',
      url: 'https://pokeapi.co/api/v2/pokemon/754/',
    },
    {
      name: 'stufful',
      url: 'https://pokeapi.co/api/v2/pokemon/759/',
    },
    {
      name: 'bewear',
      url: 'https://pokeapi.co/api/v2/pokemon/760/',
    },
    {
      name: 'golisopod',
      url: 'https://pokeapi.co/api/v2/pokemon/768/',
    },
    {
      name: 'type-null',
      url: 'https://pokeapi.co/api/v2/pokemon/772/',
    },
    {
      name: 'silvally',
      url: 'https://pokeapi.co/api/v2/pokemon/773/',
    },
    {
      name: 'komala',
      url: 'https://pokeapi.co/api/v2/pokemon/775/',
    },
    {
      name: 'mimikyu-disguised',
      url: 'https://pokeapi.co/api/v2/pokemon/778/',
    },
    {
      name: 'bruxish',
      url: 'https://pokeapi.co/api/v2/pokemon/779/',
    },
    {
      name: 'dhelmise',
      url: 'https://pokeapi.co/api/v2/pokemon/781/',
    },
    {
      name: 'jangmo-o',
      url: 'https://pokeapi.co/api/v2/pokemon/782/',
    },
    {
      name: 'hakamo-o',
      url: 'https://pokeapi.co/api/v2/pokemon/783/',
    },
    {
      name: 'kommo-o',
      url: 'https://pokeapi.co/api/v2/pokemon/784/',
    },
    {
      name: 'tapu-bulu',
      url: 'https://pokeapi.co/api/v2/pokemon/787/',
    },
    {
      name: 'kartana',
      url: 'https://pokeapi.co/api/v2/pokemon/798/',
    },
    {
      name: 'necrozma',
      url: 'https://pokeapi.co/api/v2/pokemon/800/',
    },
    {
      name: 'grookey',
      url: 'https://pokeapi.co/api/v2/pokemon/810/',
    },
    {
      name: 'thwackey',
      url: 'https://pokeapi.co/api/v2/pokemon/811/',
    },
    {
      name: 'rillaboom',
      url: 'https://pokeapi.co/api/v2/pokemon/812/',
    },
    {
      name: 'raboot',
      url: 'https://pokeapi.co/api/v2/pokemon/814/',
    },
    {
      name: 'cinderace',
      url: 'https://pokeapi.co/api/v2/pokemon/815/',
    },
    {
      name: 'inteleon',
      url: 'https://pokeapi.co/api/v2/pokemon/818/',
    },
    {
      name: 'greedent',
      url: 'https://pokeapi.co/api/v2/pokemon/820/',
    },
    {
      name: 'dubwool',
      url: 'https://pokeapi.co/api/v2/pokemon/832/',
    },
    {
      name: 'drednaw',
      url: 'https://pokeapi.co/api/v2/pokemon/834/',
    },
    {
      name: 'hatterene',
      url: 'https://pokeapi.co/api/v2/pokemon/858/',
    },
    {
      name: 'perrserker',
      url: 'https://pokeapi.co/api/v2/pokemon/863/',
    },
    {
      name: 'sirfetchd',
      url: 'https://pokeapi.co/api/v2/pokemon/865/',
    },
    {
      name: 'falinks',
      url: 'https://pokeapi.co/api/v2/pokemon/870/',
    },
    {
      name: 'duraludon',
      url: 'https://pokeapi.co/api/v2/pokemon/884/',
    },
    {
      name: 'zacian',
      url: 'https://pokeapi.co/api/v2/pokemon/888/',
    },
    {
      name: 'kubfu',
      url: 'https://pokeapi.co/api/v2/pokemon/891/',
    },
    {
      name: 'urshifu-single-strike',
      url: 'https://pokeapi.co/api/v2/pokemon/892/',
    },
    {
      name: 'zarude',
      url: 'https://pokeapi.co/api/v2/pokemon/893/',
    },
    {
      name: 'glastrier',
      url: 'https://pokeapi.co/api/v2/pokemon/896/',
    },
    {
      name: 'kleavor',
      url: 'https://pokeapi.co/api/v2/pokemon/900/',
    },
    {
      name: 'ursaluna',
      url: 'https://pokeapi.co/api/v2/pokemon/901/',
    },
    {
      name: 'sneasler',
      url: 'https://pokeapi.co/api/v2/pokemon/903/',
    },
    {
      name: 'overqwil',
      url: 'https://pokeapi.co/api/v2/pokemon/904/',
    },
    {
      name: 'quaquaval',
      url: 'https://pokeapi.co/api/v2/pokemon/914/',
    },
    {
      name: 'lokix',
      url: 'https://pokeapi.co/api/v2/pokemon/920/',
    },
    {
      name: 'ceruledge',
      url: 'https://pokeapi.co/api/v2/pokemon/937/',
    },
    {
      name: 'shroodle',
      url: 'https://pokeapi.co/api/v2/pokemon/944/',
    },
    {
      name: 'grafaiai',
      url: 'https://pokeapi.co/api/v2/pokemon/945/',
    },
    {
      name: 'klawf',
      url: 'https://pokeapi.co/api/v2/pokemon/950/',
    },
    {
      name: 'tinkatink',
      url: 'https://pokeapi.co/api/v2/pokemon/957/',
    },
    {
      name: 'tinkatuff',
      url: 'https://pokeapi.co/api/v2/pokemon/958/',
    },
    {
      name: 'tinkaton',
      url: 'https://pokeapi.co/api/v2/pokemon/959/',
    },
    {
      name: 'flamigo',
      url: 'https://pokeapi.co/api/v2/pokemon/973/',
    },
    {
      name: 'kingambit',
      url: 'https://pokeapi.co/api/v2/pokemon/983/',
    },
    {
      name: 'iron-hands',
      url: 'https://pokeapi.co/api/v2/pokemon/992/',
    },
    {
      name: 'iron-thorns',
      url: 'https://pokeapi.co/api/v2/pokemon/995/',
    },
    {
      name: 'frigibax',
      url: 'https://pokeapi.co/api/v2/pokemon/996/',
    },
    {
      name: 'arctibax',
      url: 'https://pokeapi.co/api/v2/pokemon/997/',
    },
    {
      name: 'baxcalibur',
      url: 'https://pokeapi.co/api/v2/pokemon/998/',
    },
    {
      name: 'chien-pao',
      url: 'https://pokeapi.co/api/v2/pokemon/1002/',
    },
    {
      name: 'iron-valiant',
      url: 'https://pokeapi.co/api/v2/pokemon/1006/',
    },
    {
      name: 'koraidon',
      url: 'https://pokeapi.co/api/v2/pokemon/1007/',
    },
    {
      name: 'miraidon',
      url: 'https://pokeapi.co/api/v2/pokemon/1008/',
    },
    {
      name: 'iron-leaves',
      url: 'https://pokeapi.co/api/v2/pokemon/1010/',
    },
    {
      name: 'fezandipiti',
      url: 'https://pokeapi.co/api/v2/pokemon/1016/',
    },
    {
      name: 'ogerpon',
      url: 'https://pokeapi.co/api/v2/pokemon/1017/',
    },
    {
      name: 'archaludon',
      url: 'https://pokeapi.co/api/v2/pokemon/1018/',
    },
    {
      name: 'iron-boulder',
      url: 'https://pokeapi.co/api/v2/pokemon/1022/',
    },
    {
      name: 'iron-crown',
      url: 'https://pokeapi.co/api/v2/pokemon/1023/',
    },
    {
      name: 'shaymin-sky',
      url: 'https://pokeapi.co/api/v2/pokemon/10006/',
    },
    {
      name: 'meloetta-pirouette',
      url: 'https://pokeapi.co/api/v2/pokemon/10018/',
    },
    {
      name: 'landorus-therian',
      url: 'https://pokeapi.co/api/v2/pokemon/10021/',
    },
    {
      name: 'keldeo-resolute',
      url: 'https://pokeapi.co/api/v2/pokemon/10024/',
    },
    {
      name: 'aegislash-blade',
      url: 'https://pokeapi.co/api/v2/pokemon/10026/',
    },
    {
      name: 'venusaur-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10033/',
    },
    {
      name: 'charizard-mega-x',
      url: 'https://pokeapi.co/api/v2/pokemon/10034/',
    },
    {
      name: 'charizard-mega-y',
      url: 'https://pokeapi.co/api/v2/pokemon/10035/',
    },
    {
      name: 'pinsir-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10040/',
    },
    {
      name: 'scizor-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10046/',
    },
    {
      name: 'heracross-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10047/',
    },
    {
      name: 'blaziken-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10050/',
    },
    {
      name: 'mawile-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10052/',
    },
    {
      name: 'absol-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10057/',
    },
    {
      name: 'garchomp-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10058/',
    },
    {
      name: 'lucario-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10059/',
    },
    {
      name: 'abomasnow-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10060/',
    },
    {
      name: 'sceptile-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10065/',
    },
    {
      name: 'gallade-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10068/',
    },
    {
      name: 'groudon-primal',
      url: 'https://pokeapi.co/api/v2/pokemon/10078/',
    },
    {
      name: 'rayquaza-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10079/',
    },
    {
      name: 'beedrill-mega',
      url: 'https://pokeapi.co/api/v2/pokemon/10090/',
    },
    {
      name: 'raticate-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10092/',
    },
    {
      name: 'raticate-totem-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10093/',
    },
    {
      name: 'sandshrew-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10101/',
    },
    {
      name: 'sandslash-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10102/',
    },
    {
      name: 'diglett-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10105/',
    },
    {
      name: 'dugtrio-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10106/',
    },
    {
      name: 'exeggutor-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10114/',
    },
    {
      name: 'marowak-alola',
      url: 'https://pokeapi.co/api/v2/pokemon/10115/',
    },
    {
      name: 'greninja-ash',
      url: 'https://pokeapi.co/api/v2/pokemon/10117/',
    },
    {
      name: 'oricorio-pom-pom',
      url: 'https://pokeapi.co/api/v2/pokemon/10123/',
    },
    {
      name: 'oricorio-pau',
      url: 'https://pokeapi.co/api/v2/pokemon/10124/',
    },
    {
      name: 'oricorio-sensu',
      url: 'https://pokeapi.co/api/v2/pokemon/10125/',
    },
    {
      name: 'lycanroc-midnight',
      url: 'https://pokeapi.co/api/v2/pokemon/10126/',
    },
    {
      name: 'lurantis-totem',
      url: 'https://pokeapi.co/api/v2/pokemon/10128/',
    },
    {
      name: 'mimikyu-busted',
      url: 'https://pokeapi.co/api/v2/pokemon/10143/',
    },
    {
      name: 'mimikyu-totem-disguised',
      url: 'https://pokeapi.co/api/v2/pokemon/10144/',
    },
    {
      name: 'mimikyu-totem-busted',
      url: 'https://pokeapi.co/api/v2/pokemon/10145/',
    },
    {
      name: 'kommo-o-totem',
      url: 'https://pokeapi.co/api/v2/pokemon/10146/',
    },
    {
      name: 'marowak-totem',
      url: 'https://pokeapi.co/api/v2/pokemon/10149/',
    },
    {
      name: 'rockruff-own-tempo',
      url: 'https://pokeapi.co/api/v2/pokemon/10151/',
    },
    {
      name: 'lycanroc-dusk',
      url: 'https://pokeapi.co/api/v2/pokemon/10152/',
    },
    {
      name: 'necrozma-dusk',
      url: 'https://pokeapi.co/api/v2/pokemon/10155/',
    },
    {
      name: 'necrozma-dawn',
      url: 'https://pokeapi.co/api/v2/pokemon/10156/',
    },
    {
      name: 'necrozma-ultra',
      url: 'https://pokeapi.co/api/v2/pokemon/10157/',
    },
    {
      name: 'meowth-galar',
      url: 'https://pokeapi.co/api/v2/pokemon/10161/',
    },
    {
      name: 'rapidash-galar',
      url: 'https://pokeapi.co/api/v2/pokemon/10163/',
    },
    {
      name: 'farfetchd-galar',
      url: 'https://pokeapi.co/api/v2/pokemon/10166/',
    },
    {
      name: 'zacian-crowned',
      url: 'https://pokeapi.co/api/v2/pokemon/10188/',
    },
    {
      name: 'urshifu-rapid-strike',
      url: 'https://pokeapi.co/api/v2/pokemon/10191/',
    },
    {
      name: 'zarude-dada',
      url: 'https://pokeapi.co/api/v2/pokemon/10192/',
    },
    {
      name: 'calyrex-ice',
      url: 'https://pokeapi.co/api/v2/pokemon/10193/',
    },
    {
      name: 'qwilfish-hisui',
      url: 'https://pokeapi.co/api/v2/pokemon/10234/',
    },
    {
      name: 'sneasel-hisui',
      url: 'https://pokeapi.co/api/v2/pokemon/10235/',
    },
    {
      name: 'samurott-hisui',
      url: 'https://pokeapi.co/api/v2/pokemon/10236/',
    },
    {
      name: 'lilligant-hisui',
      url: 'https://pokeapi.co/api/v2/pokemon/10237/',
    },
    {
      name: 'zoroark-hisui',
      url: 'https://pokeapi.co/api/v2/pokemon/10239/',
    },
    {
      name: 'decidueye-hisui',
      url: 'https://pokeapi.co/api/v2/pokemon/10244/',
    },
    {
      name: 'koraidon-limited-build',
      url: 'https://pokeapi.co/api/v2/pokemon/10264/',
    },
    {
      name: 'koraidon-sprinting-build',
      url: 'https://pokeapi.co/api/v2/pokemon/10265/',
    },
    {
      name: 'koraidon-swimming-build',
      url: 'https://pokeapi.co/api/v2/pokemon/10266/',
    },
    {
      name: 'koraidon-gliding-build',
      url: 'https://pokeapi.co/api/v2/pokemon/10267/',
    },
    {
      name: 'miraidon-low-power-mode',
      url: 'https://pokeapi.co/api/v2/pokemon/10268/',
    },
    {
      name: 'miraidon-drive-mode',
      url: 'https://pokeapi.co/api/v2/pokemon/10269/',
    },
    {
      name: 'miraidon-aquatic-mode',
      url: 'https://pokeapi.co/api/v2/pokemon/10270/',
    },
    {
      name: 'miraidon-glide-mode',
      url: 'https://pokeapi.co/api/v2/pokemon/10271/',
    },
    {
      name: 'ursaluna-bloodmoon',
      url: 'https://pokeapi.co/api/v2/pokemon/10272/',
    },
    {
      name: 'ogerpon-wellspring-mask',
      url: 'https://pokeapi.co/api/v2/pokemon/10273/',
    },
    {
      name: 'ogerpon-hearthflame-mask',
      url: 'https://pokeapi.co/api/v2/pokemon/10274/',
    },
    {
      name: 'ogerpon-cornerstone-mask',
      url: 'https://pokeapi.co/api/v2/pokemon/10275/',
    },
  ],
};
