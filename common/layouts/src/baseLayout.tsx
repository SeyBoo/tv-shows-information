import { FunctionComponent, PropsWithChildren } from "react";

interface BaseLayoutProps {
  title: string | React.ReactNode;
}

export const BaseLayout: FunctionComponent<
  PropsWithChildren<BaseLayoutProps>
> = ({ title, children }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <h1 className="text-white text-2xl p-8 font-semibold">{title}</h1>
      {children}
    </div>
  );
};
