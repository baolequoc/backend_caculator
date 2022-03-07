function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
  }

var convert = function convertExpresstion(sample) {
  if (sample.includes('x')) {
    sample = replaceAll(sample, 'x', '*');
  }
  if (sample.includes('%')) {
    sample = replaceAll(sample, '%', '/100');
  }
  if (sample.includes('^')) {
    sample = replaceAll(sample, '^', '**');
  }
  return  eval(sample);

}
module.exports = convert;