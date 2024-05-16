import NextHead from 'next/head';

type HeaderProps = {
  pageName?: string;
};

const DEFAULT_TITLE = "Teely's Platform";

export function Header({ pageName }: HeaderProps) {
  return (
    <NextHead>
      {pageName ? (
        <title>{`${pageName} - ${DEFAULT_TITLE}`}</title>
      ) : (
        <title>{DEFAULT_TITLE}</title>
      )}
    </NextHead>
  );
}
