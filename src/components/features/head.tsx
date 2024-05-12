import NextHead from 'next/head';

export function Head() {
  return (
    <NextHead>
      <title>Tannatee Juchan&apos;s Pages</title>
      <meta charSet="UTF-8" />
      <meta
        name="description"
        content="Personal page for Tannatee Juchan's pages. I've not idea to design. Sorry for inconvenience."
      />
      <meta name="author" content="Tannatee Juchan" />
      <meta
        name="keywords"
        content="teelyjc, teely, developer, tannatee, juchan"
      />

      <meta property="og:title" content="Tannatee Juchan's Pages" />
      <meta
        property="og:description"
        content="Personal page for Tannatee Juchan's pages. I've not idea to design. Sorry for inconvenience."
      />
      <meta property="og:url" content="https://teelyjc.dev" />
    </NextHead>
  );
}
