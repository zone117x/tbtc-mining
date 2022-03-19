# Usage Instructions

### Requirements:
 * Docker Compose
 * At least 100GB of free disk space

#### Clone repo
```shell
git clone https://github.com/zone117x/tbtc-mining.git
cd tbtc-mining/
```

#### Configure mining reward address
Specify the testnet btc address in the `TBTC_ADDRESS` environment variable inside [`docker-compose.yml`](docker-compose.yml).

#### Optionally, to speed up testnet chain sync, use the bootstrap bitcoin testnet chain data with:
```shell
./bootstrap-chain.sh
```

#### Run services with:
```shell
docker-compose up
```


## NiceHash

Place a new order on the SHA256 hashpower marketplace.

* Ensure selected algorithm is `SHA256`.
* Fill in the public server IP / hostname.
* Specify the pool port configured in [`foundation-server/configs/pools/bitcoin.js`](foundation-server/configs/pools/bitcoin.js), the default is `3002`.
* For username, specify the same tbtc address used for the above `TBTC_ADDRESS` config, the default is `tb1qc7sfev9vr5w5uqsft7rmy23s42yx50rac8ftrw`.
* Password does not matter, use a placeholder like `x`.

<img src='images/nicehash-pool-setup.png' width='600'>

Click "test pool" and all tests should pass:

<img src='images/nicehash-pool-verification.png' width='600'>
