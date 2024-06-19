import React, { ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';

const components = {
  h1: (props: any) => <h1 className="text-3xl font-bold mt-4 text-green-600" {...props} />,
};

const MDXProviderWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MDXProviderWrapper;
