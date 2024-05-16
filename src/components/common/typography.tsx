import { forwardRef } from 'react';

type TypographyElement = 'h1' | 'h2' | 'h3' | 'h4' | 'p';

interface TypographyProps {
  as: TypographyElement;
  children?: string;
}

export const Typography = forwardRef<HTMLHeadingElement, TypographyProps>(
  (props, ref) => {
    const Tag = props.as || 'h1';

    const classNamePerElement = (tag: TypographyElement): string => {
      switch (tag) {
        case 'h1':
          return 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl';
        case 'h2':
          return 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0';
        case 'h3':
          return 'scroll-m-20 text-2xl font-semibold tracking-tight';
        case 'h4':
          return 'scroll-m-20 text-xl font-semibold tracking-tight';
        case 'p':
          return 'leading-7 [&:not(:first-child)]:mt-6';
      }
    };

    return (
      <Tag ref={ref} className={classNamePerElement(Tag)}>
        {props.children}
      </Tag>
    );
  },
);

Typography.displayName = 'Typography';
