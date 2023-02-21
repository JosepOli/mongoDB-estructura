
db.createCollection('Client', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Client',
        required: ['client_id', 'Localitat'],
        properties: {
          client_id: {
            bsonType: 'objectId'
          },
          Nom: {
            bsonType: 'string'
          },
          Cognom: {
            bsonType: 'string'
          },
          Adreça: {
            bsonType: 'string'
          },
          Codi_Postal: {
            bsonType: 'int'
          },
          Localitat: {
            bsonType: 'objectId'
          },
          Telefon: {
            bsonType: 'int'
          }
        }
      }
    }
  });
  db.createCollection('Localitat', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Localitat',
        required: ['localitat_id', 'Provincia'],
        properties: {
          localitat_id: {
            bsonType: 'objectId'
          },
          Nom: {
            bsonType: 'string'
          },
          Provincia: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });
  db.createCollection('Provincia', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Provincia',
        required: ['provincia_id'],
        properties: {
          provincia_id: {
            bsonType: 'objectId'
          },
          Nom: {
            bsonType: 'string'
          }
        }
      }
    }
  });
  db.createCollection('Comanda', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Comanda',
        required: ['comanda_id', 'Tipus_Comanda', 'Productes_Comanda', 'Client', 'Botiga'],
        properties: {
          comanda_id: {
            bsonType: 'objectId'
          },
          Data_Hora: {
            bsonType: 'timestamp'
          },
          Tipus_Comanda: {
            bsonType: 'objectId'
          },
          Productes_Comanda: {
            bsonType: 'objectId'
          },
          Client: {
            bsonType: 'objectId'
          },
          Botiga: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });
  db.createCollection('Productes_Comanda', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Productes_Comanda',
        required: ['productes_comanda_id', 'Productes'],
        properties: {
          productes_comanda_id: {
            bsonType: 'objectId'
          },
          Productes: {
            bsonType: 'objectId'
          },
          Productes_comanda_quantitat: {
            bsonType: 'int'
          }
        }
      }
    }
  });
  db.createCollection('Producte', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Producte',
        required: ['producte_id', 'Categoria_Producte'],
        properties: {
          producte_id: {
            bsonType: 'objectId'
          },
          Nom: {
            bsonType: 'string'
          },
          Descripcio: {
            bsonType: 'string'
          },
          Imatge: {
            bsonType: 'binData'
          },
          Preu: {
            bsonType: 'int'
          },
          Categoria_Producte: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });
  db.createCollection('Categoria_Producte', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Categoria_Producte',
        required: ['Categoria_producte_id'],
        properties: {
          Categoria_producte_id: {
            bsonType: 'objectId'
          },
          tipus_producte: {
            bsonType: 'string'
          }
        }
      }
    }
  });
  db.createCollection('Botiga', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Botiga',
        required: ['botiga_id', 'Localitat', 'Empleat'],
        properties: {
          botiga_id: {
            bsonType: 'objectId'
          },
          Adreça: {
            bsonType: 'string'
          },
          Codi_Postal: {
            bsonType: 'int'
          },
          Localitat: {
            bsonType: 'objectId'
          },
          Empleat: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });
  db.createCollection('Empleat', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Empleat',
        required: ['empleat_id'],
        properties: {
          empleat_id: {
            bsonType: 'objectId'
          },
          Nom: {
            bsonType: 'string'
          },
          Cognom: {
            bsonType: 'string'
          },
          NIF: {
            bsonType: 'string'
          },
          Telefon: {
            bsonType: 'int'
          }
        }
      }
    }
  });
  db.createCollection('Tipus_Comanda', {
    validator: {
      $jsonSchema: {
        bsonType: 'object',
        title: 'Tipus_Comanda',
        required: ['tipus_comanda_id', 'Empleat'],
        properties: {
          tipus_comanda_id: {
            bsonType: 'objectId'
          },
          Nom_comanda: {
            bsonType: 'string'
          },
          Hora_lliurament_domicili: {
            bsonType: 'timestamp'
          },
          Empleat: {
            bsonType: 'objectId'
          }
        }
      }
    }
  });