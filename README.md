## Download
- Clone the HB repo at branch `feat/xrpl-dex-gateway` : https://github.com/manas0203/hbot-xrpl-dex-interface/tree/main/gateway

## Environment
- Python 3.8.2
- NodeJS 12.20.0
- Yarn 1.22.17

## Install
- Use the commands in `Hummingbot` section to install hummingbot: https://docs.hummingbot.org/installation/source/#hummingbot
- Follow this guide to setup gateway: https://docs.hummingbot.org/developers/gateway/setup/
- For adding XRPL wallet, use the following section `Add Wallet`

## Add Wallet
- Run Gateway
- Run Hummingbot
- Inside Hummingbot console, use the following commands and inputs to add your xrpl wallet:
<img width="996" alt="CleanShot 2023-01-06 at 23 23 35@2x" src="https://user-images.githubusercontent.com/9627489/211053828-c58dbd52-eda4-4bf7-9d83-d077c02a6762.png">


## Run Script
- Use `start --script xrpldex_simple_pmm.py` command to start the `xrpldex_simple_pmm` script
<img width="710" alt="CleanShot 2023-01-06 at 23 24 23@2x" src="https://user-images.githubusercontent.com/9627489/211053986-70fb5223-0b4d-4fa9-a3b4-f8dedf87666d.png">

- Use `status` command to see general information
<img width="725" alt="CleanShot 2022-12-29 at 23 33 41@2x" src="https://user-images.githubusercontent.com/9627489/209982367-80cb06c9-aa19-4cbb-af8a-f26413862aa7.png">
- Use `stop` command to stop script
<img width="580" alt="CleanShot 2022-12-29 at 23 36 35@2x" src="https://user-images.githubusercontent.com/9627489/209982655-17729190-ba38-4a85-bec5-c7c2d99b750e.png">


## Simple PMM Script Features
- You should find the script at this path: `scripts/xrpldex_simple_pmm.py`
- The script does the followings:
  - Let you do a simple pure market making strategy with multiple order levels on a single token pairs on XRPL DEX
  - Support SAP (Simple Average Price), WAP (Weighted Average Price), and VWAP (Volume Weighted Average Price) price strategye

### Configurations
- To change the market or tokens pair to trade, edit `_base_token` and `_quote_token`
![CleanShot 2023-01-06 at 23 25 34@2x](https://user-images.githubusercontent.com/9627489/211054659-62af9985-e593-489f-88e7-cbd2b4cbc07d.png)
- To change network to `mainnet` or `testnet`, edit these:
![CleanShot 2023-01-06 at 23 29 14@2x](https://user-images.githubusercontent.com/9627489/211054892-8f283c86-5060-4791-9580-6130fc632f77.png)
- Script main configurations:
![CleanShot 2023-01-06 at 23 30 52@2x](https://user-images.githubusercontent.com/9627489/211056012-00b2b3fe-06f9-49f4-804f-42fd9c827ff2.png)

