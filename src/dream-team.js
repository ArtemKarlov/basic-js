const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members || !Array.isArray(members)) {
    return false;
  }
  const teamName = members.map(member => {
    if (typeof member === 'string') {
      member = member.trim();
      return member[0].toUpperCase();
    }
  });

  return teamName.sort().join('');
};
