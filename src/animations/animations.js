import { keyframes } from "@mui/system";

export const slideInRight = keyframes` 0% {
  -webkit-transform: translateX(10px);
          transform: translateX(10px);
}
100% {
  -webkit-transform: translateX(0px);
          transform: translateX(0px);
}`;
export const slideInUp = keyframes` 0% {
  -webkit-transform: translateY(10px);
          transform: translateY(10px);
}
100% {
  -webkit-transform: translateY(0px);
          transform: translateY(0px);
}`;

export const textShadowPopBl = keyframes`0% {
  text-shadow: 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555, 0 0 #555555;
  -webkit-transform: translateX(0) translateY(0);
          transform: translateX(0) translateY(0);
}
100% {
  text-shadow: -1px 1px #555555, -1px 1px #555555, -1px 1px #555555, -1px 1px #555555, -1px 1px #555555, -1px 1px #555555, -1px 1px #555555, -1px 1px #555555;
  -webkit-transform: translateX(2px) translateY(-2px);
          transform: translateX(2px) translateY(-2px);
}`;
