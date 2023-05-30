import React from "react"
import { TwitterTimelineEmbed } from "react-twitter-embed"

const TwitterContainer = () => {
    return (
        <section className="twitterContainer">
            <div className="twitter-embed">
                <TwitterTimelineEmbed
                    sourceType="list"
                    id="1663550262110453762"
                    options={{
                        tweetLimit: "5",
                        width: 400,
                        height: 400,
                    }}
                    noHeader="true"
                    noBorders="true"
                    noFooter="true"
                />
            </div>
        </section>
    )
}

export default TwitterContainer
