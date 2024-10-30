import { Navigator } from "@/features/weather";
import classes from "./header.module.css";
import icon from "@/shared/assets/images/cloudy-sun.png";


export const Header = () => {
  return (

    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={icon} alt="cloudy" />
        <h1>Weather App</h1>
        <div>
            Your reliable assistant in weather planning!</div>
      </div>
      <Navigator />
    </header>


  );
};
