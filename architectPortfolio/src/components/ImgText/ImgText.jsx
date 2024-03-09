import { Link } from "react-router-dom";
import "./ImgText.css";

const ImgText = () => {
  return (
    <>
      <section className="img-text-section">
        <div className="img-main-container">
          <div className="image-container-1">
            <img src="../../../public/img/building2.png" alt="" />
            <img src="../../../public/img/building3.png" alt="" />
          </div>
          <div className="image-container-2">
            <img src="../../../public/img/building4.png" alt="" />
          </div>
        </div>

        <div className="text-container">
          <h2>About</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially unchanged.
          </p>

          <Link to="/">
            <button type="button">Read More</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ImgText;
