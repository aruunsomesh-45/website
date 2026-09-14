import Contact from "@/components/Contact";

export const metadata = {
  title: "Contact | Prestige Moment",
  description: "Get in touch with us to discuss your next project.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#111111] pt-12">
      <Contact />
    </main>
  );
}
