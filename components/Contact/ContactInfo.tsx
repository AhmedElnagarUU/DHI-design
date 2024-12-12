import { Mail, MapPin, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-light text-white mb-6">Get in Touch</h2>
        <p className="text-white/60 leading-relaxed">
          We'd love to hear from you. Our friendly team is always here to chat about your ideas and answer any questions.
        </p>
      </div>
      
      <div className="space-y-6">
        <ContactItem
          icon={<MapPin className="w-6 h-6" />}
          title="Office"
          content="123 Design Street, New York, NY 10001"
        />
        <ContactItem
          icon={<Phone className="w-6 h-6" />}
          title="Phone"
          content="+1 (555) 123-4567"
        />
        <ContactItem
          icon={<Mail className="w-6 h-6" />}
          title="Email"
          content="info@dhidesign.com"
        />
      </div>
    </div>
  );
}

function ContactItem({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-emerald-400">{icon}</div>
      <div>
        <h3 className="text-white font-medium mb-1">{title}</h3>
        <p className="text-white/60">{content}</p>
      </div>
    </div>
  );
}