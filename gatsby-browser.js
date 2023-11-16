exports.onInitialClientRender = () => {
    const html = document.querySelector("html");
    if (html) {
      html.setAttribute("lang", "pt-br");
    }
  };
  