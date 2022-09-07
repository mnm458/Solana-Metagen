const { NETWORK } = require('./Network.js')

const fs = require("fs");
const fs_extra = require("fs-extra");

const network = NETWORK.eth;
const collection_size = 5
const hidden = false;
const CID = "your_cid";
const name = "Your collection name";
const symbol = "Your collection symbol";
const description = "Your collection description";
const fee_basis = 1000; // Define how much % you want from secondary market sales 1000 = 10%
