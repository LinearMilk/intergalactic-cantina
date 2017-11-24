{(dishes.length) ? dishes.map((dish, i) =>
  <Dish key={i}
        name={dish.name}
        price={dish.price}
        description={dish.description}
        tags={dish.tags} />
) : <p>No Dishes</p>
}

{(tags.length) ? tags.map((tag,i) =>
  <li className={"list-inline-item " + tag} key={i}>
      <span className='icon'>
        {(tag) === 'vegan' ?
          <i className="fa fa-check" aria-hidden="true"></i>
         : (tag) === 'meat-only' ?
          <i className="fa fa-male" aria-hidden="true"></i>
         :
          <i className="fa fa-leaf" aria-hidden="true"></i>
        }
      </span>
     {tag}
  </li>
) : ""
}

// let dishes = [beverages, dinner dishes, lunch dishes]
//
// beverages = [wines, beers, spirits, cocktails, hot-drinks, non-intoxicants]
//
// lunchDishes = [hot, cold, awesome]
//
// dinnerDishes = [starters, main courses, food-of-the-day]

let dishes = [
  {
  category: 'beverages',
  subcategories: [
    {
    subcategory: 'wines',
      dishes: [
        {
        name: 'Klingon Bloodwine',
        price: 20,
        description: 'Perhaps today is a good day to die.',
        tags: ['klingon','alcoholic'],
        image: '',
        thumbnail:'',
        },
        {
        name: 'Del Rio Vineyards Pinot Gris',
        price: '10',
        description: 'Earth Wine',
        tags: ['terran','alcoholic'],
        image: '',
        thumbnail:'',
        }
        ]
    },
    { subcategory: 'beers',
      dishes: [
        {
        name: 'Kingpin Double Red Ale',
        price: 6,
        description: 'I&rsquom just a man with a dream.',
        tags: ['terran','alcoholic'],
        image: '',
        thumbnail:'',
        },
        {
        name: 'Green Flash Imperial IPA',
        price: '10',
        description: 'Earth Wine',
        tags: ['terran','alcoholic'],
        image: '',
        thumbnail:'',
        }
      ]
    },
    { subcategory: 'spirits',
    dishes: [
      {
      name: 'Acamarian brandy',
      price: 30,
      description: 'An amber-colored alcoholic beverage from Acamar III',
      tags: ['alcoholic'],
      image: '',
      thumbnail:'',
      },
      {
      name: 'Synthehol',
      price: '25',
      description: 'All the taste and smell, none of the effects.',
      tags: ['ferengi'],
      image: '',
      thumbnail:'',
      }
  ]
  },
  { subcategory: 'cocktails',
  dishes: [
    {
    name: 'Pan Galactic Gargle Blaster',
    price: 500,
    description: 'Best drink in existence. You should NEVER have more than two.',
    tags: ['alcoholic'],
    image: '',
    thumbnail:'',
    },
    {
    name: 'Finagle&rsquos Folly',
    price: '35',
    description: 'Known from here to Orion',
    tags: ['alcoholic'],
    image: '',
    thumbnail:'',
    }
  ]
  },
  { subcategory: 'hot-drinks',
  dishes: [
    {
    name: 'Hot Pan Galactic Gargle Blaster',
    price: 500,
    description: 'Best drink in existence. You should NEVER have more than two.',
    tags: ['alcoholic'],
    image: '',
    thumbnail:'',
    },
    {
    name: 'Hot Finagle&rsquos Folly',
    price: '35',
    description: 'Known from here to Orion',
    tags: ['alcoholic'],
    image: '',
    thumbnail:'',
    }
  ]
  },
  { subcategory: 'non-intoxicants',
  dishes: [
    {
    name: 'Tea',
    price: 500,
    description: 'Best drink in existence. You should NEVER have more than two.',
    tags: ['terran'],
    image: '',
    thumbnail:'',
    },
    {
    name: 'Water',
    price: '35',
    description: 'Known from here to Orion',
    tags: ['terran'],
    image: '',
    thumbnail:'',
    }
  ]
  },
] ,
},
  { category: 'dinner dishes',



  },

  { category: 'lunch dishes',



  },


]



  {
    name: '',
    price: '',
    description: '',
    tags: ['', '']
  },
  {
    name: '',
    price: '',
    description: '',
    tags: ['', '']
  },{
    name: '',
    price: '',
    description: '',
    tags: ['']
  }];
