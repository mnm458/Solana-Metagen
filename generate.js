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


/*
  --------------- ONLY VALID FOR SOLANA METADATA ----------------

  A collection can have multiple creators, the shares value indicates the % of the earnings an address will get from secondary market sales
  if you put more than 1 creator remember that the sum of all their fees must be 100
*/

const creators = [
    //Creator 1 Example
    {
      "address": "0x1Example",
      "share": 50
    },
    //Creator 2 Example
    {
      "address": "0x2Example",
      "share": 50
    },
  ]
  
fs_extra.emptyDirSync("./metadata")
hidden ? generateHidden() : generateMetadata();