interface RenderTemplateParams {
  markup: string;
  styles: string;
}

export const renderTemplate = ({
  markup,
  styles,
}: RenderTemplateParams) => {
  return `
    <html>
      <head>
        <title>THP</title>
        ${ styles }
        <script src="/build/bundle.js" defer></script>
      </head>
      <body>
        <div id="app-root">${ markup }</div>
      </body>
    </html>
  `;
};
