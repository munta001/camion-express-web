import { Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary border-t border-border py-12">
      <div className="container grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img
              src="https://dsjanwtkkivnudgfdvii.supabase.co/storage/v1/object/sign/Camion%20Express/Hino_Dutro_with_Mauritian_flag_design-removebg-preview.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YWFhOTllZS1lMmEzLTQ1NTctYjFjOC01OWNlNzk5YmY4M2QiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJDYW1pb24gRXhwcmVzcy9IaW5vX0R1dHJvX3dpdGhfTWF1cml0aWFuX2ZsYWdfZGVzaWduLXJlbW92ZWJnLXByZXZpZXcucG5nIiwiaWF0IjoxNzc3NzkzNTExLCJleHAiOjE5MzU0NzM1MTF9.zjj21UJoVOTmhEWVTwm0HrUERvo8r-JxxUbCaPIAqmc"
              alt="Camion Express Logo"
              className="h-12 w-12 object-contain"
            />
            <span className="font-display text-xl text-foreground">CAMION<span className="text-primary"> EXPRESS</span></span>
          </div>
          <p className="text-sm text-muted-foreground italic mb-2">Nou livré ou materiaux dan ler fami.</p>
          <p className="text-sm text-muted-foreground">{t("footer.subtitle")}</p>
        </div>
        <div>
          <h4 className="font-display text-lg mb-3 text-foreground">{t("footer.quickLinks")}</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">{t("nav.home")}</Link>
            <Link to="/services" className="hover:text-primary transition-colors">{t("nav.services")}</Link>
            <Link to="/fleet" className="hover:text-primary transition-colors">{t("nav.fleet")}</Link>
            <Link to="/quotation" className="hover:text-primary transition-colors">{t("nav.quotation")}</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">{t("nav.contact")}</Link>
            <Link to="/login" className="text-primary hover:opacity-80 transition-opacity">{t("nav.ownerLogin")}</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg mb-3 text-foreground">{t("footer.contactInfo")}</h4>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>📞 +230 5851 9491</p>
            <p>📧 camionexpressmru@gmail.com</p>
            <p>📍 Mahebourg, Mauritius</p>
          </div>
        </div>
      </div>
      <div className="container mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        {t("footer.rights")}
      </div>
    </footer>
  );
};

export default Footer;
