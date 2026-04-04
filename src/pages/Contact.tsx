import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import managerImage from "@/assets/mun.png";
import emailjs from "emailjs-com";
import { useRef } from "react";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    { icon: Phone, label: t("contact.phone"), value: "+230 5851 9491 / +230 5422 2994", href: "tel:+230 58519491" },
    { icon: MessageCircle, label: "WhatsApp", value: "+230 5851 9491", href: "https://wa.me/23058519491?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20transport%20services." },
    { icon: Mail, label: t("contact.email"), value: "camionexpressmru@gmail.com", href: "mailto:camionexpressmru@gmail.com" },
    { icon: MapPin, label: t("contact.address"), value: "Mahebourg, Mauritius", href: "#" },
  ];

  const formRef = useRef<HTMLFormElement | null>(null);

const sendEmail = (e: React.FormEvent) => {
  e.preventDefault();

  if (!formRef.current) return; // ✅ prevents error

  emailjs
    .sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        alert("Message sent successfully!");
        formRef.current?.reset();
      },
      (error) => {
        alert("Failed to send message. Please try again.");
        console.error(error);
      }
    );
    console.log(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);
};


  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <h1 className="font-display text-5xl md:text-6xl text-foreground mb-2 flex items-center gap-3">
            <img src="https://jknnhftxmlrqrojihufl.supabase.co/storage/v1/object/public/fleet-images/Hino_Dutro_with_Mauritian_flag_design-removebg-preview.png" alt="contact" className="w-20 h-20 md:w-20 md:h-20" />
            <span>
              {t("contact.title")}{" "}
              <span className="text-primary">{t("contact.titleHighlight")}</span>
            </span>
          </h1>
          <p className="text-muted-foreground mb-12">{t("contact.subtitle")}</p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {contactInfo.map((c) => (
                <a key={c.label} href={c.href} target={c.label === "WhatsApp" ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <c.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{c.label}</div>
                    <div className="text-foreground whitespace-pre-line group-hover:text-primary transition-colors">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>

<form ref={formRef} onSubmit={sendEmail} className="space-y-4">
  <input
    type="text"
    name="name"
    placeholder={t("contact.yourName")}
    className="w-full px-4 py-3 bg-card border border-border rounded-md"
    required
  />

  <input
    type="email"
    name="email"
    placeholder={t("contact.yourEmail")}
    className="w-full px-4 py-3 bg-card border border-border rounded-md"
    required
  />

  <textarea
    name="message"
    placeholder={t("contact.yourMessage")}
    rows={5}
    className="w-full px-4 py-3 bg-card border border-border rounded-md"
    required
  />

  <button
    type="submit"
    className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-md"
  >
    {t("contact.sendMessage")}
  </button>
</form>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            
            {/* Content */}
            <div className="order-1 lg:order-2">
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
                {t("home.aboutUs")}{" "}
                <span className="text-primary">{t("home.aboutHighlight")}</span>
              </h2>

              <p className="text-muted-foreground mb-6">
                {t("home.aboutDesc")}
              </p>

              {/* Image (shows BELOW title on mobile) */}
              <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg mb-6 lg:hidden">
                <div className="h-64 overflow-hidden">
                  <img
                    src={managerImage}
                    alt="Muntasir Buhora - Manager at Camion Express"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center border-t border-border">
                  <h3 className="font-display text-xl text-foreground">
                    {t("home.managerName")}
                  </h3>
                  <p className="text-primary text-sm font-semibold">
                    {t("home.managerRole")}
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6 shadow-sm">
                <h3 className="font-display text-2xl text-foreground mb-3">
                  {t("home.meetManager")}
                </h3>

                <p className="text-muted-foreground mb-4">
                  {t("home.managerBio")}
                </p>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>
                    <strong>{t("home.experience")}:</strong>{" "}
                    {t("home.managerExperience")}
                  </p>
                  <p>
                    <strong>{t("home.specialty")}:</strong>{" "}
                    {t("home.managerSpecialty")}
                  </p>
                </div>
              </div>
            </div>

            {/* Image (desktop only) */}
            <div className="hidden lg:block order-2 lg:order-1">
              <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
                <div className="h-[400px] overflow-hidden">
                  <img
                    src={managerImage}
                    alt="John Doe - Operations Manager at Camion Express"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center border-t border-border">
                  <h3 className="font-display text-xl text-foreground">
                    {t("home.managerName")}
                  </h3>
                  <p className="text-primary text-sm font-semibold">
                    {t("home.managerRole")}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
