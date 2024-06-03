import { Download } from "../Download";
import { useAuthContext } from "../Auth/AuthContext";

export const DownloadPage = () => {
  const { isLoggedIn } = useAuthContext();
  if(!isLoggedIn){
    window.location.href = '/';
  }
    return <Download />;
  };