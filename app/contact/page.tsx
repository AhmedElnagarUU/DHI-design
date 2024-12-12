import { ContactForm } from "@/components/Contact/ContactForm";
import { ContactInfo } from "@/components/Contact/ContactInfo";
import { PageHeader } from "@/components/shared/PageHeader";

export default function ContactPage() {
  return (
    <main>
      <PageHeader 
        title="Get in Touch" 
        description="Let's discuss your next project and bring your vision to life."
      />
      <div className="container mx-auto px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </main>
  );
}