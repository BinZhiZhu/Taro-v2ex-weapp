/**
 *  拼接cdn头像地址
 *
 * @param url
 */
const formatAvatar = (url: string): string => {
  return `https:${url}`;
}

export default formatAvatar
