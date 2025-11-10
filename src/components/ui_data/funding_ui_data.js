"use client";
import funding from "@/assets/data/funding.json";
import { FundingTile } from "@/components/ui/funding-tile";

export function FundingTileData({ type = "Current" }) {
    // funding.json now is a flat array with a "status" field ("Current" or "Completed")
    const fundings = funding || []; // funding is now a flat array
    const current = fundings.filter(f => f.status === "Current");
    const completed = fundings.filter(f => f.status === "Completed");
    const showOnly = type === "Current" || type === "Completed" ? type : null;

    if (showOnly === "Current") {
        return (
            <div className="flex flex-wrap justify-center items-center">
                {current.map((fund) => (
                    <FundingTile key={fund.agency + fund.grant} {...fund} />
                ))}
            </div>
        );
    }

    if (showOnly === "Completed") {
        return (
            <div className="flex flex-wrap justify-center items-center">
                {completed.map((fund) => (
                    <FundingTile key={fund.agency + fund.grant} {...fund} />
                ))}
            </div>
        );
    }

    return (
        <div>
            <section aria-labelledby="current-funding" className="mb-6">
                {/* <h3 id="current-funding" className="text-lg font-semibold mb-3">
                    Current Funding
                </h3> */}
                <div className="flex flex-wrap justify-center items-center">
                    {current.map((fund) => (
                        <FundingTile key={fund.agency + fund.grant} {...fund} />
                    ))}
                </div>
            </section>
            {completed.length > 0 && (
                <section aria-labelledby="past-funding" className="mt-8">
                    {/* <h3 id="past-funding" className="text-lg font-semibold mb-3">
                        Past Funding
                    </h3> */}
                    <div className="flex flex-wrap justify-center items-center">
                        {completed.map((fund) => (
                            <FundingTile key={fund.agency + fund.grant} {...fund} />
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
