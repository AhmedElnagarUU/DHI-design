import { PageHeader } from "@/components/shared/PageHeader";
import { ClientList } from "@/components/Clients/ClientList";
import { ClientTestimonials } from "@/components/Clients/ClientTestimonials";

export default function ClientsPage() {
  return (
    <main>
      <PageHeader
        title="Our Clients"
        description="We're proud to work with leading brands and individuals who trust us with their spaces."
      />
      <div className="container mx-auto px-8 py-20">
        <ClientList />
        <ClientTestimonials />
      </div>
    </main>
  );
}