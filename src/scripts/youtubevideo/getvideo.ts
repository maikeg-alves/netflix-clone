export const getVideo = async (movie_id: number): Promise<string> => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${process.env.NEXT_KEY_API}&language=pt-BR`,
  );
  const data = await response.json();

  if (data.results && data.results.length > 0) {
    return data.results[0].key;
  }
  
  return '';
};

export const viewVideo = (movie_id: string) => {
  const url = `https://www.youtube.com/watch?v=${movie_id}`;
  window.open(url, '_blank');
};
