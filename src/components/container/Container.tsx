import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  styles?: string;
};

export default function Container({ children, styles }: ContainerProps) {
  return (
    <div className={`${styles} px-[15px] md:px-8 relative`}>{children}</div>
  );
}
