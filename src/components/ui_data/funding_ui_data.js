"use client";
import funding from "@/assets/data/funding.json";
import { FundingTile } from "@/components/ui/funding-tile";

export function FundingTileData({ type }) {
    const fundings = funding || [];
    const current = fundings.filter(f => f.status === "Current");
    const completed = fundings.filter(f => f.status === "Completed");

    // showOnly will be explicitly the passed type if valid, else default "All"
    const showOnly = type === "Current" || type === "Completed" || type === "All" ? type : "All";

    if (showOnly === "Current") {
        return (
            <div className="flex flex-wrap justify-center items-center">
                {current.map(fund => (
                    <FundingTile key={fund.agency + fund.grant} {...fund} />
                ))}
            </div>
        );
    }

    if (showOnly === "Completed") {
        return (
            <div className="flex flex-wrap justify-center items-center">
                {completed.map(fund => (
                    <FundingTile key={fund.agency + fund.grant} {...fund} />
                ))}
            </div>
        );
    }

    // For "All" or default fallback, show both current and completed
    return (
        <div>
            <section aria-labelledby="current-funding" className="mb-6">
                <h2 id="current-funding" className="sr-only">Current Funding</h2>
                <div className="flex flex-wrap justify-center items-center">
                    {current.map(fund => (
                        <FundingTile key={fund.agency + fund.grant} {...fund} />
                    ))}
                </div>
            </section>
            {completed.length > 0 && (
                <section aria-labelledby="past-funding" className="mt-8">
                    <h2 id="past-funding" className="sr-only">Past Funding</h2>
                    <div className="flex flex-wrap justify-center items-center">
                        {completed.map(fund => (
                            <FundingTile key={fund.agency + fund.grant} {...fund} />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
