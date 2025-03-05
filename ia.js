const urlclaude = "https://api.anthropic.com/v1/messages";
const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + token
};

const requestbody = {
    model:"claude-3-5-sonnet-20241022",
    max_tokens: 1024,
    messages: [
        {role:"user", content: "Hello, world!"} 
    ]
    
};

const respuesta = await fetch(apiUrl, {method:"POST", headers:{
    "x-api-key": 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,
    "anthropic-version": "2023-06-01",
    "Content-Type": "application/json",
    "anthropic-dangerous-direct-browser-access": "true"
}, body: JSON.stringify(requestbody)});

