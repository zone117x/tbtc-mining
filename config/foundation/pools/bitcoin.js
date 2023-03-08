// Miscellaneous Configuration
const config = {};
config.enabled = true;
config.name = 'Pool-Bitcoin';
config.template = 'bitcoin';

// Miscellaneous Configuration
config.primary = {};
config.primary.address = process.env.RECIPIENT_ADDR;

// Coin Configuration
config.primary.coin = {};
config.primary.coin.name = 'Bitcoin';
config.primary.coin.symbol = 'BTC';
config.primary.coin.algorithm = 'sha256d';

// Checks Configuration
config.primary.checks = {};
config.primary.checks.enabled = true;

// Daemon Configuration
config.primary.daemons = [];

const daemons1 = {};
daemons1.host = process.env.BITCOIN_RPC_HOST;
daemons1.port = parseInt(process.env.BITCOIN_RPC_PORT);
daemons1.username = process.env.BITCOIN_RPC_USER;
daemons1.password = process.env.BITCOIN_RPC_PASSWORD;
config.primary.daemons.push(daemons1);

// Payment Configuration
config.primary.payments = {};
config.primary.payments.enabled = false;
config.primary.payments.minConfirmations = 10;
config.primary.payments.minPayment = 0.005;
config.primary.payments.transactionFee = 0.004;
config.primary.payments.daemon = {};
config.primary.payments.daemon.host = '127.0.0.1';
config.primary.payments.daemon.port = 8332;
config.primary.payments.daemon.username = 'blinkhash';
config.primary.payments.daemon.password = 'password';

// Recipients Configuration
config.primary.recipients = [];

const recipient1 = {};
recipient1.address = process.env.RECIPIENT_ADDR;
recipient1.percentage = 1;
// config.primary.recipients.push(recipient1);

// Statistics Configuration
config.primary.statistics = {};
config.primary.statistics.enabled = true;

// ZMQ Configuration
config.primary.zmq = {};
config.primary.zmq.enabled = true;
config.primary.zmq.host = process.env.BITCOIN_ZMQ_HOST;
config.primary.zmq.port = parseInt(process.env.BITCOIN_ZMQ_PORT);

// Port Configuration
config.ports = [];

const ports1 = {};
ports1.port = parseInt(process.env.STRATUM_PORT);
ports1.enabled = true;
ports1.type = 'shared';
ports1.tls = false;
ports1.difficulty = {};
ports1.difficulty.initial = 524288;
ports1.difficulty.minimum = 524288;
ports1.difficulty.maximum = 1048576;
ports1.difficulty.targetTime = 15;
ports1.difficulty.retargetTime = 90;
ports1.difficulty.variance = 0.9;
config.ports.push(ports1);

// Settings Configuration
config.settings = {};

// Banning Configuration
config.settings.banning = {};
config.settings.banning.banLength = 600000; // ms;
config.settings.banning.checkThreshold = 500;
config.settings.banning.invalidPercent = 50;
config.settings.banning.purgeInterval = 300000; // ms;

// Timeout Configuration
config.settings.timeout = {};
config.settings.timeout.connection = 600000; // ms
config.settings.timeout.rebroadcast = 60000; // ms

// Interval Configuration
config.settings.interval = {};
config.settings.interval.blocks = 1000; // ms
config.settings.interval.checks = 90000; // ms
config.settings.interval.historical = 600000; // ms
config.settings.interval.payments = 7200000; // ms
config.settings.interval.recent = 600000; // ms
config.settings.interval.rounds = 60000; // ms
config.settings.interval.statistics = 90000; // ms

// Window Configuration
config.settings.window = {};
config.settings.window.hashrate = 300000; // ms
config.settings.window.inactive = 604800000; // ms
config.settings.window.rounds = 21600000; // ms
config.settings.window.updates = 300000; // ms

// Export Configuration
module.exports = config;