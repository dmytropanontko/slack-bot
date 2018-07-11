const everySecond = /.{1,2}/g
const twoAndMoreSpaces = /\s{2,}/
const parseDate = date => date.match(everySecond).reverse().join('/')

const parseCredo = credo => credo.toString('ascii').split(/\n/).map(invoice => {
  if (!invoice) {
    return null
  }

  const parsed = invoice.split(twoAndMoreSpaces);
  const total = parsed[4].match(/^\d+/)[0] * 1;
  const name = parsed[6];
  const date = parseDate(parsed[parsed.length - 1]);

  return { total, name, date };
});

const parseOtp = otp => otp.toString('ascii').split(/\n/).map(invoice => {
  if (!invoice) {
    return null
  }

  const parsed = invoice.split(twoAndMoreSpaces);
  const total = parsed[3].match(/^\d+/)[0] * 1;
  const name = parsed[3].match(/\D+$/)[0];
  const date = parseDate(parsed[parsed.length - 1]);

  return { total, name, date };
});

module.exports = { parseOtp, parseCredo };
