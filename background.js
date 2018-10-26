chrome.runtime.onInstalled.addListener(function(){
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
        
    });
    chrome.declarativeContent.onPageChanged.addRules([
            {
                conditions: [
                    // 在特定url下，插件才有效
                    new chrome.declarativeContent.PageStateMatcher({
                        //pageUrl: {urlContains: 'baidu.com'} // 配置url包含
                        //pageUrl: {urlMatches: 'baidu.com'} // 配置url正则
                        pageUrl: {
                            //hostPrefix: 'onetouch.', // 配置url前缀
                            hostSuffix: '.com',     // 配置url后缀
                            schemes: ['https']      // 配置请求头
                        },
                    })
                ],
                actions: [new chrome.declarativeContent.ShowPageAction()]
            }
        ]);
    // 在background 会有这样的console
    chrome.tabs.onSelectionChanged.addListener(function(tabId) {
        console.log(45);
    });
    
});

