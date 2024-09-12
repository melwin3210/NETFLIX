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
        r && dispatch(
            addMainMovie({
              movieTrailerURL: id?.videoId,
              movieName: snippet?.title,
              description: snippet?.description,
            })
          );
        return r;
  };
  return { youtubeApiFetch: goBackOrTrailerToggle };
};

export default useYoutubeApi;
