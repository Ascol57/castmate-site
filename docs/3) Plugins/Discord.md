# Discord
CastMate can use the Discord Webhooks system to send messages to discord channels.

## Channels
![image info](https://www.castmate.io/docs/plugins/discord/webhook-resource.png)
To get the webhook URL, in discord got *Channel Settings -> Integrations -> New Webhook*
![image info](https://www.castmate.io/docs/plugins/discord/create-webhook.gif)

## Actions

<div class="card" style="--main-color: rgb(114, 137, 218); --background-color: rgb(16, 26, 61); --dark-color: rgb(27, 43, 101); --light-color: rgb(32, 52, 122);">
    <a class="name"><span class="mdi mdi-message"></span>Discord Message</a>
    <div class="content">
        <p class="description">Sends a message in a discord channel via a webhook.</p>
        <p class="configText">Configuration :</p>
        <ul>
            <li>
                <div>
                    <a class="name">Channel</a>
                    <a class="tag">Webhook Resource</a>
                </div>
                <p>Determines which channel to put the message in via which webhook you've picked.</p>
            </li>
            <li>
                <div>
                    <a class="name">Message</a>
                    <a class="tag scriptable">string</a>
                </div>
                <p>The message you'd like to send.</p>
            </li>
        </ul>
    </div>
</div>