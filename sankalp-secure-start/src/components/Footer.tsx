import { Shield, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold">Sankalp Insurance</span>
            </div>
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Your trusted licensed insurance broker for Life and Motor insurance solutions across India.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#products" className="hover:text-primary-foreground transition-colors">Life Insurance</a></li>
              <li><a href="#products" className="hover:text-primary-foreground transition-colors">Private Car Insurance</a></li>
              <li><a href="#products" className="hover:text-primary-foreground transition-colors">Two-Wheeler Insurance</a></li>
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="font-display font-semibold mb-4">Compliance</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Grievance Redressal & Escalation</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> support@sankalpinsurance.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +91 1800-XXX-XXXX
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5" /> Mumbai, Maharashtra, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/40">
              © {new Date().getFullYear()} Sankalp Insurance Brokers Pvt. Ltd. All rights reserved.
            </p>
            <div className="text-xs text-primary-foreground/40 text-center md:text-right">
              <p>IRDAI Registration No: IRDA/DB/XXX/XX | Broker License No: XXX</p>
              <p className="mt-1">Sankalp Insurance Brokers Pvt. Ltd. is a licensed insurance broker regulated by IRDAI.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
