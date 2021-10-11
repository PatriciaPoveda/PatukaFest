const bcrypt = require("bcryptjs");

const encrypt = (textPlain) => {
  const hash = bcrypt.hash(textPlain, 10);
  return hash;
};

const compare = async (textPlain, hashPassword) => {
  return await bcrypt.compare(textPlain, hashPassword);
};

module.exports = {
  encrypt: encrypt,
  compare: compare,
};
