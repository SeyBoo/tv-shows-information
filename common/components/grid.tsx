import { FunctionComponent, PropsWithChildren } from "react";

export const Grid: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col items-center gap-4 md:flex-row md:flex-wrap md:justify-center min-h-screen h-full">
      {children}
    </div>
  );
};
