exports.slugify = function(str) {
  return str
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/\./g, '-')
    .trim();
};
