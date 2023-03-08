FROM debian:bullseye-backports
RUN apt-get update && apt-get install -y wget zstd
ENV BOOTSTRAP_URL https://m-shared-public.s3.eu-central-1.amazonaws.com/bitcoin-testnet-chain.tar.zst
CMD wget --progress=dot:giga -O- "$BOOTSTRAP_URL" | tar -I zstd -xvf - -C /data -v