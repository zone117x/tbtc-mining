// Miscellaneous Configuration
const config = {};
config.identifier = '';
config.language = 'english';

// Logger Configuration
config.logger = {};
config.logger.logColors = true;
config.logger.logLevel = 'log';

// Database Configuration (SQL)
config.client = {};
config.client.tls = false;

// Master Database
config.client.master = {};
config.client.master.host = process.env.PGHOST;
config.client.master.port = parseInt(process.env.PGPORT);
config.client.master.username = process.env.POSTGRES_USER;
config.client.master.password = process.env.POSTGRES_PASSWORD;
config.client.master.database = process.env.POSTGRES_DB;

// Worker Database
config.client.worker = {};
config.client.worker.host = process.env.PGHOST;
config.client.worker.port = parseInt(process.env.PGPORT);
config.client.worker.username = process.env.POSTGRES_USER;
config.client.worker.password = process.env.POSTGRES_PASSWORD;
config.client.worker.database = process.env.POSTGRES_DB;

// Clustering Configuration
config.clustering = {};
config.clustering.enabled = true;
config.clustering.forks = 'auto';

// TLS Configuration
config.tls = {};
config.tls.ca = '';
config.tls.key = '';
config.tls.cert = '';

// Server Configuration
config.server = {};
config.server.host = '0.0.0.0';
config.server.port = parseInt(process.env.FOUNDATION_SERVER_PORT);
config.server.tls = false;

// Cache Configuration
config.server.cache = {};
config.server.cache.enabled = true;
config.server.cache.timing = '1 minute';

// Limiter Configuration
config.server.limiter = {};
config.server.limiter.enabled = true;
config.server.limiter.window = 900000; // ms
config.server.limiter.maximum = 100;

// Export Configuration
module.exports = config;
