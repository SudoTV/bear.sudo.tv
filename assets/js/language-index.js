const language = window.navigator.userLanguage || window.navigator.language;

(() => {

    if (language === 'zh-CN') {
        window.location.href = '/zh';
    } else {
        window.location.href = '/en';
    }
})();
