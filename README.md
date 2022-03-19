# Usage Instructions

### Requirements:
 * Docker Compose
 * At least 100GB of free disk space
 * Ubuntu-20.x (if using the bootstrap script)

#### Clone repo
```shell
git clone https://github.com/zone117x/tbtc-mining.git
cd tbtc-mining/
```

#### Configure mining reward address
Specify the testnet btc address in the `TBTC_ADDRESS` environment variable inside `docker-compose.yml`

#### Optionally, to speed up testnet chain sync, use the bootstrap bitcoin testnet chain data with:
```shell
./bootstrap-chain.sh
```

#### Run services with:
```shell
docker-compose up
```