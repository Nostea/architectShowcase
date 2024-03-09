import { useContext, useEffect } from "react";
import { LoadingContext } from "../../components/Context/Context";

const Loadingsscreen = () => {
  // So importiere ich den useContext in den jeweilige dateien. Ich kann selber bestimmt ob ich auch den setter oder getter importiere
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  return (
    <section>
      <h1>ich Lade...</h1>
      <img src="../../../public/svg/loadingWheel.svg" alt="" />
    </section>
  );
};

export default Loadingsscreen;
