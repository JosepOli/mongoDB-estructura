db.createCollection('Adreça', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Adreça',
      required: ['adreça_id'],
      properties: {
        adreça_id: {
          bsonType: 'objectId'
        },
        Carrer: {
          bsonType: 'string'
        },
        Numero: {
          bsonType: 'int'
        },
        Pis: {
          bsonType: 'int'
        },
        Porta: {
          bsonType: 'string'
        },
        Ciutat: {
          bsonType: 'string'
        },
        Codi_Postal: {
          bsonType: 'int'
        },
        Pais: {
          bsonType: 'string'
        }
      }
    }
  }
});
db.createCollection('Proveidor', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Proveidor',
      required: ['proveidor_id', 'Adreça'],
      properties: {
        proveidor_id: {
          bsonType: 'objectId'
        },
        Nom: {
          bsonType: 'string'
        },
        Adreça: {
          bsonType: 'objectId'
        },
        Telefon: {
          bsonType: 'int'
        },
        Fax: {
          bsonType: 'int'
        },
        NIF: {
          bsonType: 'int'
        }
      }
    }
  }
});
db.createCollection('Ulleres', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Ulleres',
      required: ['ulleres_id', 'Proveidor', 'Empleats'],
      properties: {
        ulleres_id: {
          bsonType: 'objectId'
        },
        Marca: {
          bsonType: 'string'
        },
        Graduació: {
          bsonType: 'int'
        },
        Tipus_muntura: {
          bsonType: 'string'
        },
        Color_muntura: {
          bsonType: 'string'
        },
        Preu: {
          bsonType: 'int'
        },
        Proveidor: {
          bsonType: 'objectId'
        },
        Empleats: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Clients', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Clients',
      required: ['client_id', 'Adreça'],
      properties: {
        client_id: {
          bsonType: 'objectId'
        },
        Nom: {
          bsonType: 'string'
        },
        Adreça: {
          bsonType: 'objectId'
        },
        Telefon: {
          bsonType: 'int'
        },
        Email: {
          bsonType: 'string'
        },
        Data_registre: {
          bsonType: 'timestamp'
        },
        Clients_referit: {
          bsonType: 'objectId'
        }
      }
    }
  }
});
db.createCollection('Empleats', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      title: 'Empleats',
      required: ['empleat_id'],
      properties: {
        empleat_id: {
          bsonType: 'objectId'
        },
        Nom_empleat: {
          bsonType: 'string'
        }
      }
    }
  }
});
