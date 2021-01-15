module.exports = {
  title: 'akashi_thesis_bulletin', // populated into `manifest.json`, default to `title` of the first entry or `name` in `package.json`.
  author: 'yamasy1549 <sanae@yamasy.info>', // default to `author` in `package.json` or undefined.
  language: 'ja', // default to `en`.
  size: 'A4', // paper size.
  theme: 'main.css', // .css or local dir or npm package. default to undefined.
  entry: [
    'index.md',
  ], // `entry` can be `string` or `object` if there's only single markdown file.
  // toc: true, // whether generate and include toc.html or not (does not affect manifest.json), default to `true`. if `string` given, use it as a custom toc.html.
  // cover: './cover.png', // cover image. default to undefined.
  // workDir: './dist', // default to `.vivliostyle`.
}
