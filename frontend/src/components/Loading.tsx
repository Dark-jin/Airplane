import animationloading from "../assets/97952-loading-animation-blue.json";
import Lottie from "react-lottie";

const Loading = () => {
  return (
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: animationloading,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }}
      width={300}
      height={300}
      isClickToPauseDisabled
    />
  );
};
export default Loading;
