"use client";
import funding from "@/assets/data/funding.json";
import { FundingTile } from "@/components/ui/funding-tile";

export function FundingTileData({ type = "current" }) {
    // funding.json format is { "current": [...], "completed": [...] }
    const current = funding.current || [];
    const completed = funding.completed || [];
    const showOnly = type === "current" || type === "completed" ? type : null;

    if (showOnly === "current") {
        return (
            <div className="flex flex-wrap justify-center items-center">
                {current.map((fund) => (
                    <FundingTile key={fund.agency + fund.grant} {...fund} />
                ))}
            </div>
        );
    }

    if (showOnly === "completed") {
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
                <h3 id="current-funding" className="text-lg font-semibold mb-3">
                    Current Funding
                </h3>
                <div className="flex flex-wrap justify-center items-center">
                    {current.map((fund) => (
                        <FundingTile key={fund.agency + fund.grant} {...fund} />
                    ))}
                </div>
            </section>

            {completed.length > 0 && (
                <section aria-labelledby="past-funding" className="mt-8">
                    <h3 id="past-funding" className="text-lg font-semibold mb-3">
                        Past Funding
                    </h3>
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