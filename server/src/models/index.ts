import { Sequelize } from 'sequelize';
import config from '../config/database';

import user from './user';
import admin from './admin';
import article from './article';
import project from './project';
import track from './track';
import projectArticle from './projectArticle';

const env = process.env.NODE_ENV || 'development';
const CURRENT_STATE = config[env];

const sequelize = new Sequelize(
  CURRENT_STATE.database,
  CURRENT_STATE.username,
  CURRENT_STATE.password,
  CURRENT_STATE,
);

const database: any = { sequelize: sequelize, Sequelize: Sequelize };

database.user = user(sequelize, Sequelize);
database.admin = admin(sequelize, Sequelize);
database.article = article(sequelize, Sequelize);
database.project = project(sequelize, Sequelize);
database.track = track(sequelize, Sequelize);
database.projectArticle = projectArticle(sequelize, Sequelize);

Object.keys(database).forEach(modelName => {
  if (database[modelName].associate) {
    database[modelName].associate(database);
  }
});

export default database;
