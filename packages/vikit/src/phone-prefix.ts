const OLD_PREFIX = ['0120', '0121', '0122', '0126', '0128', '0123', '0124', '0125', '0127', '0129', '0162', '0163', '0164', '0165', '0166', '0167', '0168', '0169', '0186', '0188', '0199'];
const NEW_PREFIX = ['070', '079', '077', '076', '078', '083', '084', '085', '081', '082', '032', '033', '034', '035', '036', '037', '038', '039', '056', '058', '059'];

/**
* Change phone prefix with the new rules.
* @param {string} phoneNumber Which phone number to change.
* @return {string} Changed phone number or the same if not in the change list.
*/
export const changePhonePrefix = (phoneNumber: string): string => {
  const prefix = phoneNumber.substr(0, 4);
  const i = OLD_PREFIX.indexOf(prefix);
  if (i > -1) {
    return phoneNumber.replace(OLD_PREFIX[i], NEW_PREFIX[i])
  }
  return phoneNumber;
}