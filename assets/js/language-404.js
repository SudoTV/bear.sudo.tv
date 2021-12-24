const language = getLanguage();

(() => {
    const path = window.location.pathname;

    if (availableLanguages.some((each) => {
        return path.startsWith(`/${each}`);
    })) {
        return;
    }

    if (language === 'zh-CN') {
        window.location.href = `/zh-CN${window.location.pathname}`;
    } else {
        window.location.href = `/en-US${window.location.pathname}`;
    }
})();
