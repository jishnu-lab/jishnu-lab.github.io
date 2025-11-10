import { cn } from "@/lib/utils";

export const FundingTile = ({ agency, grant, logo, totalBudget, myBudget, effort, role, duration }) => {
return (
    <div className={cn("bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-lg shadow-lg p-6 flex flex-col items-center m-4")}>
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
        <h3 className="text-lg font-bold mb-2 text-center">{agency}</h3>
        <div className="mb-2 text-center">
            <span className="font-semibold">Grant:</span> {grant}
        </div>
        {role && (
            <div className="mb-1 text-center">
                <span className="font-semibold">Role:</span> {role}
            </div>
        )}
        {duration && (
            <div className="mb-1 text-center">
                <span className="font-semibold">Duration:</span> {duration}
            </div>
        )}
        <div className="mb-1 text-center">
            <span className="font-semibold">Total Budget:</span> {totalBudget}
        </div>
        <div className="mb-1 text-center">
            <span className="font-semibold">Lab Budget:</span> {myBudget}
        </div>
        {/* {effort && (
            <div className="mb-1 text-center">
                <span className="font-semibold">Effort:</span> {effort}
            </div>
        )} */}
    </div>
);
}