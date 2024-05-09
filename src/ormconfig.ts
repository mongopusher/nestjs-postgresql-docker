import { DataSource } from 'typeorm';
import { DataSourceOptions } from 'typeorm/data-source/DataSourceOptions';

import * as dotenv from 'dotenv';
dotenv.config();

const config: DataSourceOptions = {
    type: 'postgres',
    host: 'db',
    port: 5432,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    logging: true,
    synchronize: true,
    entities: [],
    migrations: [],
} as any;

export const connectionSource: DataSource = new DataSource(config);
export default config;
