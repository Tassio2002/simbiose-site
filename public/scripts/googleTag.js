export const initLinkedPixel2 = () => {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  gtag("config", "G-L1VDPRBXQQ");
};
