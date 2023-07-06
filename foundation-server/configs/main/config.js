// Miscellaneous Configuration
const config = {};
config.identifier = "";
config.language = "english";

// Logger Configuration
config.logger = {};
config.logger.logColors = true;
config.logger.logLevel = "log";

// Database Configuration (SQL)
config.client = {};
config.client.tls = false;

// Master Database
config.client.master = {};
config.client.master.host = "127.0.0.1";
config.client.master.port = 5432;
config.client.master.username = "postgres";
config.client.master.password = "postgres";
config.client.master.database = "postgres";

// Worker Database
config.client.worker = {};
config.client.worker.host = "127.0.0.1";
config.client.worker.port = 5432;
config.client.worker.username = "postgres";
config.client.worker.password = "postgres";
config.client.worker.database = "postgres";

// Clustering Configuration
config.clustering = {};
config.clustering.enabled = true;
config.clustering.forks = "auto";

// TLS Configuration
config.tls = {};
config.tls.ca = "";
config.tls.key = "";
config.tls.cert = "";

// Server Configuration
config.server = {};
config.server.enabled = true;
config.server.host = "127.0.0.1";
config.server.port = 3001;
config.server.tls = false;

// Cache Configuration
config.server.cache = {};
config.server.cache.enabled = true;
config.server.cache.timing = "1 minute";

// Limiter Configuration
config.server.limiter = {};
config.server.limiter.enabled = true;
config.server.limiter.window = 900000; // ms
config.server.limiter.maximum = 100;

// Export Configuration
module.exports = config;
