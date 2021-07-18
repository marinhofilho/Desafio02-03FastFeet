import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import Recipient from '../app/models/Recipient';
import User from '../app/models/User';
import Deliverymen from '../app/models/Deliverymen';
import File from '../app/models/File';
import Order from '../app/models/Order';
import Problem from '../app/models/Problem';

import databaseConfig from '../config/database';

const models = [Recipient, User, Deliverymen, File, Order, Problem];

class Database {
  constructor() {
    this.init();
    // this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  /* mongo() {
    this.mongoConnection = mongoose.connect(
      'mongodb://localhost:27017/fastfeet',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      }
    );
  } */
}

export default new Database();
