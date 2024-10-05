import { useState, useEffect } from 'react';

function useCustomMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = (e) => setMatches(e.matches);

    setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener('change', listener);

    return () => mediaQueryList.removeEventListener('change', listener);
  }, [query]);

  return matches;
}

export default useCustomMediaQuery;
