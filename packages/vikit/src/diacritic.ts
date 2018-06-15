/**
 * Remove diacritics from Vietnamese sentences.
 * 
 * @example
 * const str = 'Vì Đức Chúa Trời yêu thương thế gian'
 * const result = diacritics(str) // 'vi-duc-chua-troi-yeu-thuong-the-gian'
 * 
 * @param str Vietnamese string.
 * @return Removed diacritics string.
 */
export const diacritics = (str: string): string => {
  if (str) {
    const trim = (alias: string) => {
      let str = alias;
      str = str.toLowerCase();
      str = str.replace(
        /à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,
        'a',
      );
      str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ễ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
      str = str.replace(/ì|í|ị|ỉ|ĩ|ì|í|ị|ỉ|ĩ/g, 'i');
      str = str.replace(
        /ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,
        'o',
      );
      str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
      str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ|ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
      str = str.replace(/đ|đ/g, 'd');
      str = str.replace(
        /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,
        '-',
      );
      str = str.replace(/-+-/g, '-');
      str = str.replace(/^\-+|\-+$/g, '');
      return str;
    };
    return trim(trim(str));
  } else {
    return '-';
  }
};
