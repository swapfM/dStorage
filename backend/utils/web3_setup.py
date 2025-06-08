from web3 import Web3
import os

w3 = Web3(Web3.HTTPProvider(os.getenv("WEB3_PROVIDER")))
