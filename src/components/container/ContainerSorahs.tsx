import { ReactNode } from "react";

type ContainerSorahsProps = {
  children: ReactNode;
  styles?: string;
  show?: boolean;
};

export default function ContainerSorahs({
  children,
  styles,
  show,
}: ContainerSorahsProps) {
  return (
    <div
      className={`${styles} bg-fixed bg-cover bg-center min-h-[calc(100vh-70px)] relative`}
    >
      {/* Side */}
      {show && (
        <div className="absolute top-0 right-0 w-full h-full bg-paige-color/80 dark:bg-slate-900 -z[1]" />
      )}
      {children}
    </div>
  );
}
