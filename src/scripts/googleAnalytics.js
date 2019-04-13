import { settings } from "../config/profile";
import ReactGA from "react-ga";

const { GOOGLE_ANALYTICS_ID } = settings;

ReactGA.initialize(GOOGLE_ANALYTICS_ID);
const googleAnalytics = ReactGA;

export { googleAnalytics };
