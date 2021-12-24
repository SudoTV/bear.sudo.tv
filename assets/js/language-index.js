const language = getLanguage();

(() => {

    if (language === 'zh-CN') {
        window.location.href = '/zh-CN';
    } else {
        window.location.href = '/en-US';
    }
})();
