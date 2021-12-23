const language = getLanguage();

(() => {

    if (language === 'zh-CN') {
        window.location.href = '/zh';
    } else {
        window.location.href = '/en';
    }
})();
