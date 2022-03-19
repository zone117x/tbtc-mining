// Miscellaneous Configuration
const config = {};
config.enabled = true;
config.name = 'Pool1';
config.coins = ['Bitcoin'];
// Banning Configuration
config.banning = {};
config.banning.time = 600;
config.banning.invalidPercent = 50;
config.banning.checkThreshold = 500;
config.banning.purgeInterval = 300;
// Port Configuration
config.ports = [];
const ports1 = {};
ports1.port = 3002;
ports1.enabled = true;
ports1.type = 'solo';
ports1.tls = false;
ports1.difficulty = {};
ports1.difficulty.initial = 500000;
ports1.difficulty.minimum = 500000;
ports1.difficulty.maximum = 500000;
ports1.difficulty.targetTime = 15;
ports1.difficulty.retargetTime = 90;
ports1.difficulty.variance = 0.3;
config.ports.push(ports1);
// P2P Configuration
config.p2p = {};
config.p2p.enabled = true;
config.p2p.host = '127.0.0.1';
config.p2p.port = 18333;
// Statistics Configuration
config.statistics = {};
config.statistics.blocksInterval = 20;
config.statistics.hashrateInterval = 20;
config.statistics.historicalInterval = 1800;
config.statistics.refreshInterval = 20;
config.statistics.paymentsInterval = 20;
config.statistics.hashrateWindow = 300;
config.statistics.historicalWindow = 86400;
// Settings Configuration
config.settings = {};
config.settings.blockRefreshInterval = 1000;
config.settings.connectionTimeout = 6000;
config.settings.jobRebroadcastTimeout = 60;
config.settings.tcpProxyProtocol = false;
// Miscellaneous Configuration
config.primary = {};
config.primary.address = process.env['TBTC_ADDRESS'];
// Rewards Configuration
config.primary.coin = {};
config.primary.coin.rewards = {};
config.primary.coin.rewards.type = '';
config.primary.coin.rewards.addresses = [process.env['TBTC_ADDRESS']];
// Coin Configuration
config.primary.coin.name = 'Bitcoin';
config.primary.coin.symbol = 'BTC';
config.primary.coin.asicboost = true;
config.primary.coin.getinfo = false;
config.primary.coin.hybrid = false;
config.primary.coin.parameters = {};
config.primary.coin.segwit = true;
config.primary.coin.version = 4;
// Algorithm Configuration
config.primary.coin.algorithms = {};
config.primary.coin.algorithms.mining = 'sha256d';
config.primary.coin.algorithms.block = 'sha256d';
config.primary.coin.algorithms.coinbase = 'sha256d';
// Mainnet Configuration
config.primary.coin.mainnet = {};
config.primary.coin.mainnet.bech32 = 'bc';
config.primary.coin.mainnet.bip32 = {};
config.primary.coin.mainnet.bip32.public = Buffer.from('0488B21E', 'hex').readUInt32LE(0);
config.primary.coin.mainnet.bip32.private = Buffer.from('0488ADE4', 'hex').readUInt32LE(0);
config.primary.coin.mainnet.peerMagic = 'f9beb4d9';
config.primary.coin.mainnet.pubKeyHash = Buffer.from('00', 'hex').readUInt8(0);
config.primary.coin.mainnet.scriptHash = Buffer.from('05', 'hex').readUInt8(0);
config.primary.coin.mainnet.wif = Buffer.from('80', 'hex').readUInt8(0);
config.primary.coin.mainnet.coin = 'btc';
// Testnet Configuration
config.primary.coin.testnet = {};
config.primary.coin.testnet.bech32 = 'tb';
config.primary.coin.testnet.bip32 = {};
config.primary.coin.testnet.bip32.public = Buffer.from('043587CF', 'hex').readUInt32LE(0);
config.primary.coin.testnet.bip32.private = Buffer.from('04358394', 'hex').readUInt32LE(0);
config.primary.coin.testnet.peerMagic = '0b110907';
config.primary.coin.testnet.pubKeyHash = Buffer.from('6F', 'hex').readUInt8(0);
config.primary.coin.testnet.scriptHash = Buffer.from('C4', 'hex').readUInt8(0);
config.primary.coin.testnet.wif = Buffer.from('EF', 'hex').readUInt8(0);
config.primary.coin.testnet.coin = 'btc';
// Daemon Configuration
config.primary.daemons = [];
const daemons1 = {};
daemons1.host = '127.0.0.1';
daemons1.port = 18332;
daemons1.username = 'rpcuser';
daemons1.password = 'rpcpassword';
config.primary.daemons.push(daemons1);
// Payment Configuration\n\
config.primary.payments = {};
config.primary.payments.enabled = false;
config.primary.payments.checkInterval = 20;
config.primary.payments.paymentInterval = 7200;
config.primary.payments.minConfirmations = 10;
config.primary.payments.minPayment = 0.005;
config.primary.payments.transactionFee = 0.0004;
config.primary.payments.daemon = {};
config.primary.payments.daemon.host = '127.0.0.1';
config.primary.payments.daemon.port = 18332;
config.primary.payments.daemon.username = 'rpcuser';
config.primary.payments.daemon.password = 'rpcpassword';
config.primary.recipients = [];
module.exports = config;