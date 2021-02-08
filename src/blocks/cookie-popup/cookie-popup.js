(function() {
  if (!window.cookieconsent) {
    return;
  }

  let position;
  if (isMobile.any) {
    position = 'bottom';
  } else {
    position = 'bottom-left';
  }

  window.cookieconsent.initialise({
    "palette": {
      "popup": {
        "background": "#1d1d1b"
      },
      "button": {
        "background": "#343432"
      }
    },
    "showLink": false,
    "theme": "classic",
    "position": position,
    "content": {
      "message": "<p style='margin-bottom:8px;font-weight:500'>Мы используем файлы cookie, чтобы Вам было удобнее пользоваться нашим сайтом.</p><p style='font-size:14px;margin-top:0'>Продолжая просматривать, вы соглашаетесь на использование файлов cookie. Более подробную информацию вы можете получить в нашей <a href='#'>Политике конфиденциальности</a>, а также в <a href='#'>Условиях и положениях</a>.</p>",
      "dismiss": "Принять"
    }
  });
})();
