browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type == "content") {
        browser.runtime.sendNativeMessage("com.tsg0o0.safariweba11y.Extension", {message: "Hello"}, function(response) {
            const obj = JSON.parse(response);
            if (obj.type == "native") {
                sendResponse(obj);
            }
        });
    }
    return true;
});
