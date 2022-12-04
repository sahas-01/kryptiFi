import React from 'react'
import { WorldIDWidget, WidgetProps } from "@worldcoin/id";

function IDLogin() {
    // init wallet
    const WidgetProps = {
        actionId: "wid_staging_897fc908a76422db0fc65f9578cda7d6",
        signal: "user-id",
        enableTelemetry: true,
        signalDescription: "Receive initial airdrop April 2022",
        theme: "light",
        debug: true, // DO NOT SET TO `true` IN PRODUCTION
        onSuccess: (result) => console.log(result),
        onError: ({ code, detail }) => console.log({ code, detail }),
        onInitSuccess: () => console.log("Init successful"),
        onInitError: (error) => console.log("Error while initialization World ID", error),
    };

    return (
        // Center the widget in the middle of the page
        <div className="flex justify-center items-center h-screen">
            <WorldIDWidget {...WidgetProps} />
        </div>
    );
}

export default IDLogin
