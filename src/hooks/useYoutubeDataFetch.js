import { useDispatch } from "react-redux";
import { YOUTUBE_VIDEO_SEARCH_API } from "../utils/constants";
import { addMainMovie } from "../utils/movieSlice";

const useYoutubeApi = () => {
    const dispatch = useDispatch()
  const goBackOrTrailerToggle = async () => {
      const dataa = await fetch(
        YOUTUBE_VIDEO_SEARCH_API +
          "%20Latest%20trending%20movie%20trailer%20fullscreen&key=" +
          process.env.REACT_APP_YOUTUBE_API_KEY
      );
      const json = await dataa.json();
      let r = json?.items
        ?.map((data) => {
          if (data?.snippet?.title?.toLowerCase().includes("official")) {
            return data;
          } else {
            return null;
          }
        })
        .filter(Boolean);
        const  {snippet, id} = await r[0]
        function getMovieName(pin) {
            // Find the index of the first opening parenthesis and the first pipe symbol
            const indexParenthesis = pin.indexOf('(');
            const indexPipe = pin.indexOf('|');
          
            // Determine the minimum index of the two (if any of them are found)
            const minIndex = Math.min(indexParenthesis === -1 ? Infinity : indexParenthesis, 
                                       indexPipe === -1 ? Infinity : indexPipe);
          
            // Extract the substring up to the minimum index if found, otherwise return the original string
            return minIndex !== Infinity ? pin.substring(0, minIndex).trim() : pin.trim();
          }
          
        r && dispatch(
            addMainMovie({
              movieTrailerURL: id?.videoId,
              movieName: getMovieName(snippet?.title),
              description: snippet?.description,
            })
          );
        return r;
  };
  return { youtubeApiFetch: goBackOrTrailerToggle };
};

export default useYoutubeApi;
