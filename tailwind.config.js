const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    container: {
      center: true,
      padding: "1rem !important",
    },
    important: true,
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
    },
    boxShadow: {
      header: "0 5px 15px rgba(0, 0, 0, 0.06)",
      menu: "0 40px 60px rgba(0, 0, 0, 0.2)",
      feature: "20px 20px 34px rgba(0, 0, 0, 0.03)",
      featureHover: "20px 20px 34px rgba(70, 62, 221, 0.1)",
      product: "20px 20px 30px rgba(0, 0, 0, 0.02)",
      productHover: "20px 20px 30px rgba(0, 0, 0, 0.06)",
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      payment: "4px 4px 16px 8px #0000001a",
      none: "none",
    },
    screens: {
      sm: "375px",

      md: "477px",

      lg: "799px",

      xl: "1280px",

      "2xl": "1536px",
    },
    opacity: {},
    colors: {
      ...colors,
    },
    extend: {
      colors: {
        //TODO after integrate with backend delete all this colors [primary, primary2, secondary, secondary2, secondary3, secondary4]
        bgHeader: "#e3e6f3",
        txtP: "#465b52",
        primary: "#088178",
        txtMain: "#1a1a1a",
        txtPrimary: "#222",
        txtPrimary2: "#333",
        txtPrimary3: "#444",
        menuClr: "#E3E6F3",
        iconClr: "#465b52",
        txtMenu: "#555",
        feat1: "#fddde4",
        feat2: "#cdebbc",
        feat3: "#d1e8f2",
        feat4: "#cdd4f8",
        feat5: "#f6dbf6",
        feat6: "#fff2e5",
        featBorder: "#FFFFFF",
        prod: "#606063",
        star: "#f3b519",
        cartPro: "#e8f6ea",
        spanBnr: "#ef3636",
        spanBnr2: "#ec5443",
        newsletter: "#041e42",
        newsp: "#818ea0",
        newSpan: "#ffbd27",
        txtBlog: "#c9cdce",
        appAbout: "#041e42",
        formBorder: "#9999995e",
        formBorder2: "#e1e1e1",
        correct: "#0f5132",
      },
      fontSize: {
        "13-px": "13px",
        "15-px": "15px",
        "17-px": "17px",
        "22-px": "22px",
        "26-px": "26px",
        "32-px": "32px",
        "38-px": "38px",
        "46-px": "46px",
        "50-px": "50px",
        "70-px": "70px",
      },
      spacing: {
        17: "70px",
        18: "75px",
        25: "100px",
        37: "150px",
      },
      maxWidth: {
        18: "75px",
      },
      width: {
        90: "90%",
        85: "85%",
        80: "80%",
      },
      backgroundImage: {
        mainLanding: "url('../../../../../assets/img/hero4.png')",
        mainBtn: "url('../../../../../assets/img/button.png')",
        banner: "url('../../../../../assets/img/banner/b2.jpg')",
        banner2: "url('../../../../../assets/img/banner/b17.jpg')",
        bnr3: "url('../../../../../assets/img/banner/b10.jpg')",
        smBnr1: "url('../../../../../assets/img/banner/b7.jpg')",
        smBnr2: "url('../../../../../assets/img/banner/b4.jpg')",
        smBnr3: "url('../../../../../assets/img/banner/b18.jpg')",
        newsImg: "url('../../../../assets/img/banner/b14.png')",
        shopPage: "url('../../../../assets/img/banner/b1.jpg')",
        blogPage: "url('../../../../assets/img/banner/b19.jpg')",
        aboutPage: "url('../../../../assets/img/banner/cont.jpg')",
        contactPage: "url('../../../../assets/img/about/banner.png')",
        cartPage: "url('../../../../assets/img/banner/cart2.jpg')",
      },
    },
  },
  plugins: [],
};
