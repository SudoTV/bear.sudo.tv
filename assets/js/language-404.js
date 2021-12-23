const language = getLanguage();

(() => {

    if (
        window.location.pathname.startsWith('/zh')
        || window.location.pathname.startsWith('/en')
    ) {
        return;
    }

    if (language === 'zh-CN') {
        window.location.href = `/zh${window.location.pathname}`;
    } else {
        window.location.href = `/en${window.location.pathname}`;
    }
})();
