export const goUnicode = str => {
  return str.replace(/&#8212;/, '-').replace(/&#8230;/, '...')
}