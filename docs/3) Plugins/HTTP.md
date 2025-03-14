# HTTP
CastMate can send and receive basic HTTP Requests.

## Actions
<div class="card" style="--main-color: #9E436E; --background-color: #000000; --dark-color: #0F060A; --light-color: #210E17;">
    <a class="name"><span class="mdi mdi-web"></span>HTTP Request</a>
    <div class="content">
        <p class="description">Sends a basic HTTP Request.</p>
        <div class="warning">
            <span class="mdi mdi-alert"></span>
            <div>
                <a class="title">Known Issue</a>
                <a class="description">You currently can't specify headers. This limits the usability of this with services which require authorization. This will be fixed in the future.</a>
            </div>
        </div>
        <p class="configText">Configuration :</p>
        <ul>
            <li>
                <div>
                    <a class="name">Method</a>
                    <a class="tag">HTTP Method</a>
                </div>
                <p>GET, POST, DELETE, PUT, or PATCH</p>
            </li>
            <li>
                <div>
                    <a class="name">Address</a>
                    <a class="tag scriptable">string</a>
                </div>
                <p>The URL to make the request to.</p>
            </li>
            <li>
                <div>
                    <a class="name">BODY</a>
                    <a class="tag scriptable">string</a>
                </div>
                <p>The data you'd like in the request body.</p>
            </li>
        </ul>
    </div>
</div>

## Triggers
<div class="card" style="--main-color: #9E436E; --background-color: #000000; --dark-color: #0F060A; --light-color: #210E17;">
    <a class="name"><span class="mdi mdi-web"></span>HTTP Endpoint</a>
    <div class="content">
        <p class="description">Receives an HTTP Request</p>
        <p class="configText">Configuration :</p>
        <ul>
            <li>
                <div>
                    <a class="name">Method</a>
                    <a class="tag">HTTP Method</a>
                </div>
                <p>GET, POST, DELETE, PUT, or PATCH</p>
            </li>
            <li>
                <div>
                    <a class="name">Route</a>
                    <a class="tag">string</a>
                </div>
                <p>Subroute off of <i>/plugins/endpoints/</i>. So if you put /test as the route, to hit the endpoint with an http request you'd use the address <i>http://localhost:85/plugins/endpoints/test</i>. The port may not be 85 if you changed it under the CastMate settings.</p>
                <div class="warning">
                    <span class="mdi mdi-alert"></span>
                    <div>
                        <a class="title">Known Issue</a>
                        <a class="description">Must start with a /.</a>
                    </div>
                </div>
            </li>
        </ul>
        <p class="configText">Context :</p>
        <ul>
            <li>
                <div>
                    <a class="name">params</a>
                    <a class="tag">Object</a>
                </div>
                <p>Params parsed out using the express.js router rules.</p>
            </li>
            <li>
                <div>
                    <a class="name">query</a>
                    <a class="tag">Object</a>
                </div>
                <p>URL Query parameters (After the ?)</p>
            </li>
            <li>
                <div>
                    <a class="name">body</a>
                    <a class="tag">Object</a>
                </div>
                <p>JSON Parsed request body.</p>
            </li>
        </ul>
    </div>
</div>