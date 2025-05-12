import { cn } from "@/lib/utils";
export const NewsCard = ({
    title,
    description,
    icon,
    linkRendered,
    index
  }) => {
    return (
      <div
        className={cn(
          "flex flex-col h-full py-5 border-t border-neutral-800 dark:border-neutral-800 relative group/feature",
        )}>
        <div
            className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-200 dark:from-neutral-900 via-transparent to-transparent pointer-events-none" />
        <div
          className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
          {icon}
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
          <div
            className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-600 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
          <span
            className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-900 dark:text-neutral-100">
            {title}
          </span>
        </div>
        <div
          className="text-sm text-neutral-800 dark:text-neutral-300 max-w-xs relative z-10 px-10">
          {description}
          <strong>{linkRendered}</strong>
        </div>
      </div>
    );
  };
  