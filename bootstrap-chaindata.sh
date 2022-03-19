#!/bin/bash

dir="$(dirname "$(realpath "$0")")"
output_dir="$dir/bitcoin-testnet-data/testnet3/"
echo "Output dir: $output_dir"
mkdir -p $output_dir

if find "$output_dir" -mindepth 1 -maxdepth 1 | read; then
    echo "Directory is not empty"
    exit 1
fi

output_file=bitcoin-testnet-chain.tar.zst

if [ -e "$output_file" ]
then
    echo "Chainstate archive file already exists $output_file ... skipping download"
else
    curl --progress-bar -o $output_file https://m-shared-public.s3.eu-central-1.amazonaws.com/bitcoin-testnet-chain.tar.zst
fi

if ! command -v pv &> /dev/null
then
    tar xaf $output_file -C "$output_dir" --verbose
else
    pv $output_file | tar --use-compress-program=unzstd -x -C "$output_dir"
fi


