#!/bin/bash

dir="$(dirname "$(realpath "$0")")"
output_dir="$dir/bitcoin-testnet-data/testnet3/"
echo "Output dir: $output_dir"
mkdir -p $output_dir

if find "$output_dir" -mindepth 1 -maxdepth 1 | read; then
    echo "Directory is not empty"
    exit 1
fi

curl -O https://m-shared-public.s3.eu-central-1.amazonaws.com/bitcoin-testnet-chain.tar.zst
tar xaf bitcoin-testnet-chain.tar.zst -C "$output_dir"