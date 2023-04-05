import animationloading from "../assets/97952-loading-animation-blue.json";
import Lottie from "react-lottie";

const Loading = () => {
  return (
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: Lottie,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }}
      isClickToPauseDisabled
    />
  );
};
export default Loading;
