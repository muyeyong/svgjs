document.addEventListener('DOMContentLoaded', function() {
  const svgWrapperEl = document.createElement('div');

  svgWrapperEl.id = 'svg_sprite_created_by_svg2js';
  svgWrapperEl.style = 'position: absolute; width: 0; height: 0;';
  svgWrapperEl.setAttribute('aria-hidden', true);
  svgWrapperEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg"><symbol id="add"  fill="none" viewBox="0 0 16 16"><g clip-path="url(#add_svg__a)"><path fill="currentColor" fill-rule="evenodd" d="M3.833 3A.833.833 0 0 0 3 3.833v8.334c0 .46.373.833.833.833h8.334c.46 0 .833-.373.833-.833V3.833A.833.833 0 0 0 12.167 3H3.833ZM8.5 7.5v-2h-1v2h-2v1h2v2h1v-2h2v-1h-2Z" clip-rule="evenodd"/></g><defs><clipPath id="add_svg__a"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></symbol><symbol id="svg/zuoyi_icon"  viewBox="0 0 21 15"><defs><linearGradient id="zuoyi_icon_svg__a" x1="66.194%" x2="35.208%" y1="0%" y2="89.296%"><stop offset="0%" stop-color="#374BDD"/><stop offset="100%" stop-color="#3647DD"/></linearGradient><linearGradient id="zuoyi_icon_svg__b" x1="35.804%" x2="68.042%" y1="1.182%" y2="98.789%"><stop offset="0%" stop-color="#344CCD"/><stop offset="100%" stop-color="#26D9F8"/></linearGradient><linearGradient id="zuoyi_icon_svg__c" x1="50%" x2="67.286%" y1="27.778%" y2="74.549%"><stop offset="0%" stop-color="#315ACF"/><stop offset="100%" stop-color="#27D7F6"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(#zuoyi_icon_svg__a)" d="M15.34 0 8 15h3.857L19 0z"/><path fill="url(#zuoyi_icon_svg__b)" d="M0 0h3.744L11 15H7.001z"/><path fill="url(#zuoyi_icon_svg__c)" d="M15 0h4.244L21 4h-4.237z"/></g></symbol><symbol id="svg/single-color-01"  fill="none" viewBox="0 0 16 16"><path fill="currentColor" d="M4.98 10.312 7.294 8 4.98 5.688l.707-.707L8 7.293l2.312-2.312.707.707L8.707 8l2.312 2.312-.707.707L8 8.707 5.688 11.02l-.707-.707Z"/><path fill="currentColor" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1Zm0 1a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"/></symbol><symbol id="svg/workshop/zbwd"  fill="none" viewBox="0 0 16 16"><g fill="#4A5970" clip-path="url(#zbwd_svg__a)"><path d="M9 2.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4.5 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-9 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/><path fill-rule="evenodd" d="M6 2.341a6.002 6.002 0 0 0-3.718 7.483l.867-.609A5.01 5.01 0 0 1 6 3.415V2.342Zm-.405 10.044-.893.628A5.97 5.97 0 0 0 8 14c1.164 0 2.25-.332 3.17-.905l-.905-.636a4.98 4.98 0 0 1-2.265.54 4.978 4.978 0 0 1-2.405-.614ZM14 8c0 .688-.116 1.348-.329 1.964l-.858-.604A5.001 5.001 0 0 0 10 3.416V2.34c2.33.824 4 3.046 4 5.659Z" clip-rule="evenodd"/></g><defs><clipPath id="zbwd_svg__a"><path fill="currentColor" d="M0 0h16v16H0z"/></clipPath></defs></symbol><symbol id="svg/workshop/ywxd"  fill="none" viewBox="0 0 16 16"><path fill="currentColor" d="M7 6.333h4.14v.89H7v-.89Zm0-1.666h4.14v.889H7v-.89ZM6 2h6v1H6V2Zm3 8.778V9h1v2.667H6V9h1v1.778h2ZM6 9v.889H2C2 9.398 2.398 9 2.889 9H3V4.778a1 1 0 0 1 1-1V9h1V4.667H4v-.89h1V3a1 1 0 0 1 1-1v7Zm6 0V2a1 1 0 0 1 1 1v6h.111c.491 0 .889.398.889.889h-4V9h2Zm1 4.333V9.89h1v3.333a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9.89h1v3.444h10Z"/></symbol><symbol id="svg/workshop/tmap-logo"  fill="none" viewBox="0 0 77 20"><g clip-path="url(#tmap-logo_svg__a)"><path fill="#2B559F" d="m9.973 3 1.997 4.379L5.81 17H1L9.973 3Zm6.745 0 1.996 4.379L12.555 17h-4.81l8.973-14Z"/><path fill="#489B71" d="m19.278 9.4-2.384 3.754L19.27 17h4.804l-4.797-7.6Z"/><path fill="#202F47" d="m38.27 4.544-.325 1.81h-3.026l-1.87 10.527h-2.215l1.87-10.527H29.67l.324-1.81h8.275Zm10.7 0a7.416 7.416 0 0 1 2.117.224c.402.11.753.359.987.702.21.383.31.814.29 1.25a14.086 14.086 0 0 1-.283 2.273l-1.41 7.916h-2.16l1.263-7.291c.113-.653.19-1.158.247-1.516.05-.28.078-.565.085-.85a1.32 1.32 0 0 0-.099-.54.705.705 0 0 0-.409-.316 4.87 4.87 0 0 0-1.27-.105h-1.277l-1.87 10.61h-2.2l1.87-10.61h-3.267l-1.87 10.61h-2.2l2.18-12.357h9.276Zm10.639-.098a7.6 7.6 0 0 1 2.06.224c.47.114.884.393 1.163.786.269.459.396.986.367 1.516a13.018 13.018 0 0 1-.24 2.224l-1.368 7.72h-2.215l.84-4.702h-4.452l-.833 4.702h-2.165l1.573-8.814c.086-.52.209-1.034.367-1.537.114-.361.28-.704.493-1.018.184-.263.425-.482.706-.638.356-.18.74-.298 1.136-.351a13.394 13.394 0 0 1 2.024-.112h.544Zm-3.528 5.972h4.445l.232-1.257c.112-.597.18-1.203.205-1.81a1.168 1.168 0 0 0-.176-.702.911.911 0 0 0-.53-.323 5.17 5.17 0 0 0-.994-.07h-.416a4.331 4.331 0 0 0-1.34.155c-.3.088-.554.29-.706.56a5.24 5.24 0 0 0-.416 1.489l-.304 1.957ZM71.46 4.544c.32-.002.641.015.96.049.279.02.552.084.811.19.226.095.42.253.557.456.158.261.232.565.212.87a12.52 12.52 0 0 1-.226 1.86l-.282 1.55a7.054 7.054 0 0 1-.423 1.572c-.156.375-.398.71-.706.976a2.33 2.33 0 0 1-1.03.512 6.24 6.24 0 0 1-1.523.161h-3.104l-.741 4.162h-2.18L65.98 4.544h5.481Zm.085 3.424c.075-.354.124-.712.148-1.073a.482.482 0 0 0-.26-.484 2.559 2.559 0 0 0-.967-.12h-2.603l-.819 4.702h2.526c.327.017.653-.043.952-.175.245-.128.437-.336.543-.59.182-.45.303-.922.36-1.403l.12-.857Z"/></g><defs><clipPath id="tmap-logo_svg__a"><path fill="#fff" d="M1 3h73v14H1z"/></clipPath></defs></symbol><symbol id="svg/workshop/tjzq"  fill="none" viewBox="0 0 16 16"><g clip-path="url(#tjzq_svg__a)"><path fill="#4A5970" fill-rule="evenodd" d="M7.892 1.52a.25.25 0 0 0-.392.206v1.045a6 6 0 1 0 5.096 2.122l-.769.646A4.996 4.996 0 1 1 7.5 3.779v.995c0 .202.226.32.392.206l2.21-1.524a.25.25 0 0 0 0-.412L7.893 1.52Z" clip-rule="evenodd"/></g><path fill="#4A5970" fill-rule="evenodd" d="M7.5 6h1v3H11v1H7.5V6Z" clip-rule="evenodd"/><defs><clipPath id="tjzq_svg__a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></symbol></svg>`;

  document.body.appendChild(svgWrapperEl);
});
