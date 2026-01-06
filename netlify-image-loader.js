export default function netlifyLoader({ src, width, quality }) {
  const params = [`w=${width}`];

  if (quality) {
    params.push(`q=${quality}`);
  }

  const paramsString = params.join("&");

  return `${src}?${paramsString}`;
}
