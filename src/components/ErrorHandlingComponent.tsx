export const ErrorHandlingComponent = ({ error }: { error: string }) => {
  return (
    <h2 className="text-2xl sm:text-3xl font-cairo text-green-header dark:text-white">
      {error} :(
    </h2>
  );
};
