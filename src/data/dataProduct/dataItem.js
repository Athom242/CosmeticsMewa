const importAll = (r) => r.keys().map(r);
const imageMap=importAll(require.context('../../media', false, /\.(png|jpe?g|svg)$/));


const category={
  "Marque":{

  },
  "cheveux":{

  },
  "Maquillage":{

  },
  "Soins":{

  },
  "Parfum":{

  },
  "divers":{

  }
};

// console.log("Bonjour tout le monde je suis là",imageMap)
export default {
    "device":{
        "current":"$",
        "listExistance":["$","Euro","CFA XOF","CFA XAF"]
    },
    "products":[{
        "idProductType": "#455010",
        "nameProduct":"Lotion de toilet",
        "price": {"current":99.99,"last":0},
        "dateInput":"10/12/2004",
        "image":[{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},],
        // "images":{
        //   "front":"...",
        //   "left":"...",
        //   "right":"...",
        //   "center":"...",
        // },
        "idCategory":"",
        "quantity":1,
        "descr":{
          "short":"Lorem Ipsum fichier",
          "long":"Lorem Ipsum fichier dans le monde je vais le faire dans le monde"
        },
        "comments":[],
        "addInformation":{
          "weight":{"value":2,
          "unit":"kg"},
          "dimensions":{
            "long":2,
            "large":4,
            "height":5,
            "unit":"cm"
          }
        }
      },
      {
        "idProductType": "#455030",
        "nameProduct":"Lotion de toilet",
        "price": {"current":1.25,"last":0},
        "dateInput":"10/12/2004",
        "image":[{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},],
        "idCategory":"",
        "quantity":1,
        "descr":{
          "short":"Lorem Ipsum fichier",
          "long":"Lorem Ipsum fichier dans le monde je vais le faire dans le monde"
        },
        "comments":[],
        "addInformation":{
          "weight":{"value":2,
          "unit":"kg"},
          "dimensions":{
            "long":2,
            "large":4,
            "height":5,
            "unit":"cm"
          }
        }
      },
      {
        "idProductType": "#455020",
        "nameProduct":"Lotion de toilet",
        "price": {"current":25,"last":0},
        "dateInput":"10/12/2004",
        "image":[{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},],
        "idCategory":"",
        "quantity":1,
        "descr":{
          "short":"Lorem Ipsum fichier",
          "long":"Lorem Ipsum fichier dans le monde je vais le faire dans le monde"
        },
        "comments":[],
        "addInformation":{
          "weight":{"value":2,
          "unit":"kg"},
          "dimensions":{
            "long":2,
            "large":4,
            "height":5,
            "unit":"cm"
          }
        }
      },
      {
        "idProductType": "#455025",
        
        "nameProduct":"Lotion de toilet",
        "price": {"current":75,"last":0},
        "dateInput":"10/12/2004",
        "image":[{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},],
        "idCategory":"",
        "quantity":1,
        "descr":{
          "short":"Lorem Ipsum fichier",
          "long":"Lorem Ipsum fichier dans le monde je vais le faire dans le monde"
        },
        "comments":[],
        "addInformation":{
          "weight":{"value":2,
          "unit":"kg"},
          "dimensions":{
            "long":2,
            "large":4,
            "height":5,
            "unit":"cm"
          }
        }
      },
      {
        "idProductType": "#455011",
        "nameProduct":"Lotion de toilet",
        "price": {"current":99.99,"last":0},
        "dateInput":"10/12/2004",
        "image":[{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},],
        "idCategory":"",
        "quantity":1,
        "descr":{
          "short":"Lorem Ipsum fichier",
          "long":"Lorem Ipsum fichier dans le monde je vais le faire dans le monde"
        },
        "comments":[],
        "addInformation":{
          "weight":{"value":2,
          "unit":"kg"},
          "dimensions":{
            "long":2,
            "large":4,
            "height":5,
            "unit":"cm"
          }
        }
      },
      {
        "idProductType": "#455035",
        "nameProduct":"Lotion de toilet",
        "price": {"current":1.25,"last":0},
        "dateInput":"10/12/2004",
        "image":[{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},],
        "idCategory":"",
        "quantity":1,
        "descr":{
          "short":"Lorem Ipsum fichier",
          "long":"Lorem Ipsum fichier dans le monde je vais le faire dans le monde"
        },
        "comments":[],
        "addInformation":{
          "weight":{"value":2,
          "unit":"kg"},
          "dimensions":{
            "long":2,
            "large":4,
            "height":5,
            "unit":"cm"
          }
        }
      },
      {
        "idProductType": "#455023",
        "nameProduct":"Lotion de toilet",
        "price": {"current":25.5,"last":0},
        "dateInput":"10/12/2004",
        "image":[{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},],
        "idCategory":"",
        "quantity":1,
        "descr":{
          "short":"Lorem Ipsum fichier",
          "long":"Lorem Ipsum fichier dans le monde je vais le faire dans le monde"
        },
        "comments":[],
        "addInformation":{
          "weight":{"value":2,
          "unit":"kg"},
          "dimensions":{
            "long":2,
            "large":4,
            "height":5,
            "unit":"cm"
          }
        }
      },
      {
        "idProductType": "#455027",
        "nameProduct":"Lotion de toilet",
        "price": {"current":75,"last":0},
        "dateInput":"10/12/2004",
        "image":[{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},],
        "idCategory":"",
        "quantity":1,
        "descr":{
          "short":"Lorem Ipsum fichier",
          "long":"Lorem Ipsum fichier dans le monde je vais le faire dans le monde"
        },
        "comments":[],
        "addInformation":{
          "weight":{"value":2,
          "unit":"kg"},
          "dimensions":{
            "long":2,
            "large":4,
            "height":5,
            "unit":"cm"
          }
        }
      },
      {
        "idProductType": "#302545",
        "nameProduct":"Lotion de toilet",
        "price": {"current":75,"last":0},
        "dateInput":"10/12/2004",
        "image":[{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},],
        "idCategory":"",
        "quantity":1,
        "descr":{
          "short":"Lorem Ipsum fichier",
          "long":"Lorem Ipsum fichier dans le monde je vais le faire dans le monde"
        },
        "comments":[],
        "addInformation":{
          "weight":{"value":2,
          "unit":"kg"},
          "dimensions":{
            "long":2,
            "large":4,
            "height":5,
            "unit":"cm"
          }
        }
      },
      {
        "idProductType": "#302544",
        "nameProduct":"Lotion de toilet",
        "price": {"current":75,"last":0},
        "dateInput":"10/12/2004",
        "image":[{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},{pos:"front",img:imageMap[1]},],
        "idCategory":"",
        "quantity":1,
        "descr":{
          "short":"Lorem Ipsum fichier",
          "long":"Lorem Ipsum fichier dans le monde je vais le faire dans le monde"
        },
        "comments":[],
        "addInformation":{
          "weight":{"value":2,
          "unit":"kg"},
          "dimensions":{
            "long":2,
            "large":4,
            "height":5,
            "unit":"cm"
          }
        }
      }
    ]
}