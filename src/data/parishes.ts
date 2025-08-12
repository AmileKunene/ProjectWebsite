export type ParishContactType = 'phone' | 'email';

export interface Parish {
  name: string;
  location: string;
  contact: string;
  telephone?: string;
  type: ParishContactType;
  description?: string;
}

export const parishData: Record<string, Parish[]> = {
  "Mthatha Region": [
    {
      name: "Ascension Parish",
      location: "98 Chief Jojo Street, Southridge Park, Mthatha",
      contact: "063 073 1361",
      type: "phone",
      description: "A vibrant parish serving Southridge Park and surrounding neighborhoods, known for welcoming liturgies, strong youth ministry, and active small Christian communities."
    },
    {
      name: "All Saints",
      location: "6 Creaister Street, Mthatha",
      contact: "076 333 3451",
      telephone: "047 532 2829",
      type: "phone",
      description: "A historic community at the heart of Mthatha, All Saints brings families together for prayer, catechesis, and outreach, with a warm spirit of hospitality."
    },
    {
      name: "St. Paul's (Mthatha)",
      location: "217-218 Church Street, Ngangelizwe",
      contact: "061 038 3086",
      telephone: "047 532 0580",
      type: "phone",
      description: "The Cathedral’s sister parish in Ngangelizwe, St. Paul’s is a hub for formation, sacraments, and community support, rooted in joyful, reverent worship."
    },
    {
      name: "St. Anthony Bedford",
      location: "Chris Hani Location",
      contact: "071 908 1684",
      type: "phone",
      description: "A mission-centered community in Chris Hani Location, fostering faith through prayer groups, home visits, and practical care for vulnerable households."
    },
    {
      name: "St. Emmanuel Landsend",
      location: "Mpeko A/A, KwaDlomo",
      contact: "071 908 1684",
      type: "phone",
      description: "Serving Mpeko and KwaDlomo villages, St. Emmanuel blends deep traditional values with the Gospel, building unity through choirs and lay leadership."
    },
    {
      name: "Ngqeleni (St Joseph's)",
      location: "58 Armstrong Street, Ngqeleni",
      contact: "083 740 1918",
      type: "phone",
      description: "St Joseph’s is a close-knit coastal parish in Ngqeleni, known for lively liturgy, youth choirs, and programs that strengthen family life."
    },
    {
      name: "Cala (Sacred Heart)",
      location: "11 Zithethele, Mthatha",
      contact: "067 711 3301",
      type: "phone",
      description: "A growing community devoted to the Sacred Heart, encouraging Eucharistic devotion, catechesis for all ages, and consistent outreach to the poor."
    }
  ],
  "Matatiele Region": [
    {
      name: "Mariazell (Sacred Heart)",
      location: "Thaba Chicha",
      contact: "072 179 9312",
      type: "phone",
      description: "Rooted in the rich heritage of Mariazell, the parish draws pilgrims and locals alike, celebrating faith with strong devotional life and community projects."
    },
    {
      name: "Marialiden (St Mary)",
      location: "Mpharane A/A",
      contact: "079 374 4554",
      type: "phone",
      description: "A Marian parish serving Mpharane A/A, nurturing discipleship through rosary groups, leadership formation, and care for the elderly."
    },
    {
      name: "Shepherd's Hope",
      location: "Mehlolwaneng Village",
      contact: "frmafuponya@gmail.com",
      type: "email",
      description: "A pastoral outstation focused on accompaniment and reconciliation, offering catechesis, family support, and outreach in remote communities."
    },
    {
      name: "Tsita (St Andrew's)",
      location: "Nkowene Village",
      contact: "072 863 5621",
      type: "phone",
      description: "An energetic rural parish where families gather for spirited Sunday worship, Bible sharing, and initiatives that uplift youth and livelihoods."
    }
  ],
  "Mount Fletcher Region": [
    {
      name: "Farview (Our Lady Of Lourdes)",
      location: "Dengwane Village",
      contact: "073 895 5630",
      type: "phone",
      description: "A mountain parish dedicated to Our Lady of Lourdes, fostering healing, prayer, and solidarity among scattered homesteads."
    },
    {
      name: "Mt Fletcher (St Martin)",
      location: "213 Back Street",
      contact: "084 321 2237",
      type: "phone",
      description: "At the center of town life, St Martin’s unites diverse neighborhoods with strong choirs, sacramental preparation, and service to the needy."
    }
  ],
  "Qumbu & Tsolo": [
    {
      name: "Qumbu (Christ The King)",
      location: "25 Main Street",
      contact: "064 780 2568",
      type: "phone",
      description: "A beacon in Qumbu, gathering the faithful for vibrant liturgy, leadership training, and programs that support families and young people."
    },
    {
      name: "Martyrs Of Uganda (Tsolo)",
      location: "Dengwane Village",
      contact: "073 895 5630",
      type: "phone",
      description: "Inspired by the Ugandan martyrs, this parish promotes holiness through youth leadership, missionary zeal, and devotion to the Eucharist."
    }
  ],
  "Maclear & Elliot": [
    {
      name: "Maclear (St Francis)",
      location: "1 Phambili Street",
      contact: "083 690 9093",
      type: "phone",
      description: "Guided by Saint Francis, the parish embraces simplicity, care for creation, and fraternity through prayer, music, and service."
    },
    {
      name: "St Barnabas (Elliot)",
      location: "9 Masson Street",
      contact: "083 518 7767",
      type: "phone",
      description: "A welcoming community in Elliot, encouraging faith formation, small Christian communities, and neighborly care across the town."
    }
  ],
  "Ngcobo & Cala": [
    {
      name: "Ngcobo (St Paul's)",
      location: "9 Elliot Street",
      contact: "083 518 7767",
      type: "phone",
      description: "St Paul’s in Ngcobo is known for Scripture-centered catechesis, family ministries, and a spirit of perseverance in faith."
    },
    {
      name: "Cala (Sacred Heart)",
      location: "474 Bo Street",
      contact: "060 694 6063",
      type: "phone",
      description: "A dedicated Sacred Heart community in Cala, marked by strong lay leadership, Eucharistic adoration, and outreach to schools."
    },
    {
      name: "Elliotdale (Sacred Heart)",
      location: "11–22 Main Road, Elliotdale",
      contact: "072 179 9312",
      type: "phone",
      description: "Serving Elliotdale and nearby villages, the parish celebrates faith with powerful hymnody and hands-on support for the poor."
    }
  ],
  "Libode Area": [
    {
      name: "Cwele (St Michael's)",
      location: "Cwele A/A",
      contact: "073 232 5609",
      type: "phone",
      description: "Under the protection of St Michael, the parish promotes prayer, youth mentorship, and pastoral home visits across Cwele A/A."
    },
    {
      name: "Mount Nicholas Libode",
      location: "Masameni A/A",
      contact: "060 694 6063",
      type: "phone",
      description: "A missionary parish journeying with families in Masameni A/A, strengthening unity through catechesis and community-building activities."
    }
  ],
  "Port St. John's": [
    {
      name: "St. John the Baptist",
      location: "191 Mountain Road",
      contact: "083 974 4886",
      type: "phone",
      description: "Situated near the Wild Coast, the parish welcomes residents and travelers, offering joyful worship and practical support to local families."
    }
  ]
};

export const createParishSlug = (name: string, region: string) => {
  const base = `${region} ${name}`.toLowerCase();
  return base
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
};

export const getAllParishes = () =>
  Object.entries(parishData).flatMap(([region, parishes]) =>
    parishes.map((parish) => ({ ...parish, region, slug: createParishSlug(parish.name, region) }))
  );
