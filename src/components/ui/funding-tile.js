import { cn } from "@/lib/utils";

export const FundingTile = ({ agency, logo, grant, title, role, startDate, endDate }) => {
return (
    <div className={cn("bg-gray-400/80 dark:bg-neutral-900/80 backdrop-blur border border-gray-200 dark:border-neutral-800 rounded-lg shadow-lg p-6 flex flex-col items-center m-4")}>
        {/* LOGO CONTAINER */}
        <div
            className="flex items-center justify-center bg-white dark:bg-white mb-2"
            style={{ width: 110, height: 70 }} // adjust as needed for uniform size
        >
            <img
            src={logo}
            alt={agency + " logo"}
            className="max-h-full max-w-full object-contain"
            style={{
                width: "auto", 
                height: "60px", // or 70px to match container
                display: "block",
                margin: "0 auto"
            }}
            />
      </div>
        {/* DETAILS */}
        <h3 className="text-lg font-bold mb-2 text-center">{agency}</h3>
        <div className="mb-2 text-center">
            <span className="font-semibold">Grant:</span> {grant}
        </div>
        {role && (
            <div className="mb-1 text-center">
                <span className="font-semibold">Role:</span> {role}
            </div>
        )}
        {startDate && (
            <div className="mb-1 text-center">
                <span className="font-semibold">Start:</span> {startDate}
            </div>
        )}
        {endDate && (
            <div className="mb-1 text-center">
                <span className="font-semibold">End:</span> {endDate}
            </div>
        )}
        {/* {title && (
            <div className="mb-1 text-center">
                <span className="font-semibold">Title:</span> {title}
            </div>
        )} */}
    </div>
);
}