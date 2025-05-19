import { Toaster } from "react-hot-toast";

const Toasters = () => (
  <Toaster
    position="top-right"   
    gutter={8}
    toastOptions={{ duration: 4000 }}
  />
);

export default Toasters;
