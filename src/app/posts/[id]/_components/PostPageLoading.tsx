import clsx from "clsx"

export const PostPageSkeleton = ({
  rowCount = 3,
  titleWidth = "h-5",
}: {
  rowCount?: number
  titleWidth?: string
}) => {
  return (
    <div role="status" className="space-y-2.5 animate-pulse w-full flex flex-col justify-center">
      <div className="flex items-center w-full max-w-[500px] mx-auto">
        <div className={clsx(" bg-gray-200 rounded-md dark:bg-gray-700 w-32", titleWidth)}></div>
        <div className={clsx(" ms-2 bg-gray-300 rounded-md  dark:bg-gray-600 w-24", titleWidth)}></div>
        <div className={clsx(" ms-2 bg-gray-300  rounded-md dark:bg-gray-600 w-full", titleWidth)}></div>
      </div>
      {new Array(rowCount).fill(null).map((_, i) => (
        <div className="h-2.5 bg-gray-200 rounded-md dark:bg-gray-700 w-full" key={i} />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  )
}
