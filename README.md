# Usage Instructions

### Requirements:

- Docker and docker-compose
- At least 100GB of free disk space

#### Clone repo

```shell
git clone https://github.com/zone117x/tbtc-mining.git
cd tbtc-mining/
```

#### Configure mining reward address

Specify the testnet btc address in the `TBTC_ADDRESS` environment variable inside [`docker-compose.yml`](docker-compose.yml).

#### Optionally, to speed up testnet chain sync, use the bootstrap bitcoin testnet chain data with:

```shell
./bootstrap-chaindata.sh
```

#### Run services with:

```shell
docker-compose up
```

#### Transfering tBTC

First, determine the bitcoin docker container ID:

```shell
docker-compose ps -q bitcoin
# d40f951ff1aa072425110422732fb79b55f34af652d2e653cb94156ee73ad004 (example output)
```

Verify `bitcoin-cli` is working with:

```shell
docker exec <YOUR_CONTAINER_ID> bitcoin-cli -rpcport=18332 -rpcuser=rpcuser -rpcpassword=rpcpassword getmininginfo
```

Create a wallet with [`createwallet`](https://developer.bitcoin.org/reference/rpc/createwallet.html):

```shell
docker exec <YOUR_CONTAINER_ID> bitcoin-cli -rpcport=18332 -rpcuser=rpcuser -rpcpassword=rpcpassword createwallet ""
```

Import the private key to your mining reward address with [`importprivkey`](https://developer.bitcoin.org/reference/rpc/importprivkey.html):

```shell
docker exec <YOUR_CONTAINER_ID> bitcoin-cli -rpcport=18332 -rpcuser=rpcuser -rpcpassword=rpcpassword importprivkey "<YOUR_PRIVATE_KEY>"
```

Send tBTC with [`sendtoaddress`](https://developer.bitcoin.org/reference/rpc/sendtoaddress.html):

```shell
docker exec <YOUR_CONTAINER_ID> bitcoin-cli -rpcport=18332 -rpcuser=rpcuser -rpcpassword=rpcpassword sendtoaddress "<RECIPIENT_ADDRESS>" <tBTC_AMOUNT>
```

## Mining with NiceHash

Place a new order on the SHA256 hashpower marketplace.

- Ensure selected algorithm is `SHA256`.
- Fill in the public server IP / hostname.
- Specify the pool port configured in [`foundation-server/configs/pools/bitcoin.js`](foundation-server/configs/pools/bitcoin.js), the default is `3002`.
- For username, specify the same tbtc address used for the above `TBTC_ADDRESS` config, the default is `tb1qc7sfev9vr5w5uqsft7rmy23s42yx50rac8ftrw`.
- Password does not matter, use a placeholder like `x`.

<img src='images/nicehash-pool-setup.png' width='600'>

Click "test pool" and all tests should pass:

<img src='images/nicehash-pool-verification.png' width='600'>

## Install docker and docker-compose (Debian based OS)

```bash
sudo apt-get update && sudo apt-get install -y git jq sed curl
sudo apt remove docker-desktop
rm -r $HOME/.docker/desktop
sudo rm /usr/local/bin/com.docker.cli
sudo apt purge docker-desktop
sudo apt-get update
sudo apt-get install -y ca-certificates     curl     gnupg     lsb-release
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo   "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update && sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
sudo groupadd docker
sudo usermod -aG docker $USER
VERSION=$(curl --silent https://api.github.com/repos/docker/compose/releases/latest | jq .name -r)
DESTINATION=/usr/local/bin/docker-compose
sudo curl -L https://github.com/docker/compose/releases/download/${VERSION}/docker-compose-$(uname -s)-$(uname -m) -o $DESTINATION
sudo chmod 755 $DESTINATION
```
