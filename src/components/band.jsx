import { useEffect, useRef } from "react";
import * as THREE from "three";
import back from "../assets/img/background.webp";

const Band = () => {
  return (
    <div className="band-container">
      <div className="band-item">
        <p className="band-back-text">
          TAILORED <br />
          TECHNOLOGY <br />
          FOR YOUR PET
        </p>
        <img src={back} alt="background" className="band-background" />
      </div>
    </div>
  );
};

export default Band;
