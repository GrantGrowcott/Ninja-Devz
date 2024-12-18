export const handleNavigation = (route: string, navigate: (route: string) => void) => {
    let scrollToPosition: number | undefined;
  
    if (route === "/About") {
      scrollToPosition = window.innerHeight / 2;
    } else if (route === "/Contact") {
      scrollToPosition = window.innerHeight / 4;
    }
  
    navigate(route);
    setTimeout(() => window.scrollTo({ top: scrollToPosition, behavior: "smooth" }), 100);
    window.scrollTo(0, 0);
  };
  


  export function gtag_report_conversion(url: string) {
    const callback = function () {
      if (typeof url !== "undefined") {
        window.location.href = url;
      }
    };
  
    gtag("event", "conversion", {
      send_to: "AW-11497787633/jr0aCIjW7vgZEPGhyeoq",
      event_callback: callback,
    });
  
    return false;
  }