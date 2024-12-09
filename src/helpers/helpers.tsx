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
  