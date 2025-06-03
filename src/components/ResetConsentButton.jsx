import { useCookies } from "react-cookie";
import Link from "next/link";

const ResetConsentButton = () => {
  const [, , removeCookie] = useCookies(["userConsent"]);

  const resetConsent = () => {
    removeCookie("userConsent", { path: "/" });
    window.location.reload();
  };

  return (
    <Link href="/" onClick={resetConsent} className="hover:underline">
      Cookie-Einwilligung zurücksetzen
    </Link>
  );
};

export default ResetConsentButton;
