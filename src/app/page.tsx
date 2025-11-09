'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Ruler,
  Hammer,
  Shield,
  Clock,
  CheckCircle,
  FileText,
  Star,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

const smartRenoLogo = "/assets/smartreno-logo.png";
const contractorIndoor = "/assets/contractor-homeowner-indoor.png";
const contractorHandshake1 = "/assets/contractor-homeowner-handshake-1.png";
const contractorHandshake2 = "/assets/contractor-homeowner-handshake-2.png";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    {
      icon: Ruler,
      title: "On-site Estimate Scheduling",
      description:
        "Pick a time that works for you. We auto-assign a vetted estimator and send calendar invites with travel time built in.",
    },
    {
      icon: Hammer,
      title: "3 Competitive Bids",
      description:
        "Receive three transparent proposals from trusted contractors matched to your project scope and location.",
    },
    {
      icon: Shield,
      title: "Built-in Protections",
      description:
        "Milestone-based payments, documented change orders, and optional SmartReno Warranty for extra peace of mind.",
    },
    {
      icon: Clock,
      title: "Faster Decisions",
      description:
        "Centralized messaging keeps everyone aligned so selections happen on time and projects stay on track.",
    },
  ];

  const steps = [
    {
      step: 1,
      title: "Tell us about your project",
      text: "Answer a few quick questions and share photos. Kitchens, baths, additions & basements.",
    },
    {
      step: 2,
      title: "Book an on-site estimate",
      text: "Secure your spot with a small fee. Your SmartReno estimator visits, measures, and documents the scope.",
    },
    {
      step: 3,
      title: "Compare 3 bids side-by-side",
      text: "We shortlist contractors and deliver three apples-to-apples proposals with clear milestones.",
    },
  ];

  const faqs = [
    {
      q: "What types of projects does SmartReno support?",
      a: "Interior/exterior remodeling, additions, kitchens, bathrooms, basements, decks, siding, and more. Typical budgets range from $10K–$100K+.",
    },
    {
      q: "How are contractors vetted?",
      a: "We check license/insurance where applicable, review past work, and monitor platform performance and homeowner feedback.",
    },
    {
      q: "How do payments work?",
      a: "We structure milestone-based payment schedules tied to objective checkpoints (e.g., inspections passed).",
    },
    {
      q: "Is there a warranty?",
      a: "Yes. SmartReno offers an optional warranty add-on designed to increase trust and protect workmanship post-completion.",
    },
  ];

  const testimonials = [
    {
      name: "Danielle R.",
      location: "Bergen County, NJ",
      quote:
        "We loved seeing three comparable bids in one place. The milestone schedule kept our kitchen timeline honest and predictable.",
    },
    {
      name: "Marcus T.",
      location: "Morris County, NJ",
      quote:
        "The estimator visit was thorough and the contractor we chose was fantastic. Messaging in the app made decisions simple.",
    },
  ];

  const userTypes = [
    {
      value: "homeowners",
      label: "Homeowners",
      description: "Start your renovation project with confidence. Get competitive bids, transparent pricing, and professional oversight from start to finish.",
      link: "/homeowners",
    },
    {
      value: "contractors",
      label: "Contractors",
      description: "Find high-quality, pre-vetted projects in your area. Bid on jobs that match your expertise and grow your business with SmartReno.",
      link: "/contractors",
    },
    {
      value: "estimators",
      label: "Estimators",
      description: "Join our network of professional estimators. Conduct on-site assessments, create detailed project scopes, and help homeowners start their projects right.",
      link: "/estimators",
    },
    {
      value: "architects",
      label: "Architects",
      description: "Collaborate with homeowners and contractors on innovative designs. Bring your architectural visions to life with SmartReno's streamlined platform.",
      link: "/architects",
    },
    {
      value: "designers",
      label: "Interior Designers",
      description: "Partner with us to offer your design expertise to a wide range of renovation projects. Help clients create beautiful, functional spaces.",
      link: "/designers",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <nav className="container mx-auto px-4 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a href="/" className="flex items-center">
              <Image src={smartRenoLogo} alt="SmartReno" width={160} height={40} className="h-10 w-auto" />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              <a href="#how" className="text-sm text-slate-700 hover:text-foreground transition-colors">
                How it works
              </a>
              <a href="#features" className="text-sm text-slate-700 hover:text-foreground transition-colors">
                Features
              </a>
              <a href="#faq" className="text-sm text-slate-700 hover:text-foreground transition-colors">
                FAQ
              </a>
              <a href="#contact" className="text-sm text-slate-700 hover:text-foreground transition-colors">
                Contact
              </a>
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <Button variant="outline" asChild>
                <a href="/join-waitlist">Join waitlist</a>
              </Button>
              <Button asChild className="shadow-md hover:shadow-lg transition-shadow">
                <a href="/estimate">Get my estimate →</a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="border-t py-4 md:hidden">
              <div className="flex flex-col gap-4">
                <a href="#how" className="text-sm text-slate-700" onClick={() => setMobileMenuOpen(false)}>
                  How it works
                </a>
                <a href="#features" className="text-sm text-slate-700" onClick={() => setMobileMenuOpen(false)}>
                  Features
                </a>
                <a href="#faq" className="text-sm text-slate-700" onClick={() => setMobileMenuOpen(false)}>
                  FAQ
                </a>
                <a href="#contact" className="text-sm text-slate-700" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </a>
                <div className="flex flex-col gap-2 pt-2">
                  <Button variant="outline" asChild>
                    <a href="/join-waitlist">Join waitlist</a>
                  </Button>
                  <Button asChild>
                    <a href="/estimate">Get my estimate →</a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <Badge variant="secondary" className="w-fit mb-6">
              Renovations, simplified
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight lg:text-5xl xl:text-6xl text-balance mb-6">
              Get <span className="text-primary">3 competitive bids</span> from trusted
              contractors—without the headaches
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              SmartReno guides you from on-site estimate to final walkthrough. Clear scopes,
              milestone payments, and everything in one place.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-all">
                <a href="/estimate">Start my project →</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#how">See how it works</a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Licensed & Insured Contractors</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Optional Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                <span>Transparent Proposals</span>
              </div>
            </div>
          </div>

          <div className="lg:pl-8 order-1 lg:order-2">
            <div className="relative max-w-lg mx-auto">
              <div className="absolute -top-4 -right-4 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30" />
              <Image 
                src={contractorIndoor} 
                alt="Contractor showing homeowner project details on tablet" 
                width={500} 
                height={500} 
                className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl max-w-[240px] hidden sm:block">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-sm">Kitchen Remodel</h3>
                    <Badge variant="secondary" className="text-primary border-primary/20 text-xs">
                      Live
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center">
                      <div className="font-semibold text-primary">3</div>
                      <div className="text-muted-foreground">Bids</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-primary">Thu</div>
                      <div className="text-muted-foreground">Estimate</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-primary">✓</div>
                      <div className="text-muted-foreground">Warranty</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y bg-slate-50">
        <div className="container mx-auto px-4 py-8 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: "3", label: "Side-by-side bids" },
              { value: "1 hr", label: "Typical on-site visit" },
              { value: "24 mo", label: "Optional warranty" },
              { value: "100%", label: "Milestone payments" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4">
            How SmartReno works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple flow designed to reduce surprises and keep your project moving.
          </p>
        </div>
        
        {/* Image showcase */}
        <div className="grid gap-6 md:grid-cols-2 mb-12 max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <Image 
              src={contractorHandshake1} 
              alt="Contractor and homeowner shaking hands at property" 
              width={500} 
              height={256} 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <Image 
              src={contractorHandshake2} 
              alt="SmartReno contractor meeting with satisfied homeowner" 
              width={500} 
              height={256} 
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          {steps.map((step) => (
            <Card key={step.step} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-4 text-primary border-primary/20">
                  Step {step.step}
                </Badge>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-all">
            <a href="/estimate">Start my project →</a>
          </Button>
        </div>
      </section>

      {/* User Portals Section */}
      <section id="portals" className="bg-slate-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4">
              Built for Every Role
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Whether you're a homeowner, contractor, or designer, SmartReno provides the tools and resources you need to succeed. Find your portal and discover how we can help you.
            </p>
          </div>
          <Tabs defaultValue="homeowners" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
              {userTypes.map((userType) => (
                <TabsTrigger key={userType.value} value={userType.value}>
                  {userType.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {userTypes.map((userType) => (
              <TabsContent key={userType.value} value={userType.value}>
                <Card className="mt-6">
                  <CardContent className="p-6 text-center">
                    <p className="text-lg text-muted-foreground mb-4">
                      {userType.description}
                    </p>
                    <Button asChild>
                      <a href={userType.link}>Explore the {userType.label} Portal →</a>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>


      {/* Features */}
      <section id="features" className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4">
              Everything in one place
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From estimate to final walkthrough—organized scopes, clear proposals, and centralized
              communication.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 border border-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-4">
            Homeowners love the clarity
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from homeowners who completed their projects with SmartReno.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-4">"{testimonial.quote}"</p>
                <div className="text-sm text-muted-foreground">
                  {testimonial.name} · {testimonial.location}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Email Capture CTA */}
      <section className="bg-primary text-primary-foreground py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Be first to get access</h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            We're rolling out in Northern NJ first. Join the list and we'll notify you when new
            project slots open.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto mb-4"
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
            />
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="whitespace-nowrap"
            >
              Join waitlist →
            </Button>
          </form>
          <div className="text-sm opacity-80">No spam. Unsubscribe anytime.</div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="container mx-auto px-4 py-16 lg:px-8 lg:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight lg:text-4xl mb-8 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <Card key={idx} className="overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold pr-8">{faq.q}</h3>
                      <ChevronDown
                        className={`h-5 w-5 text-muted-foreground transition-transform ${
                          openFaq === idx ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {openFaq === idx && (
                      <p className="mt-4 text-muted-foreground">{faq.a}</p>
                    )}
                  </CardContent>
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t bg-white">
        <div className="container mx-auto px-4 py-12 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3 mb-8">
            <div>
              <a href="/" className="inline-block mb-4">
                <Image src={smartRenoLogo} alt="SmartReno" width={160} height={40} className="h-10 w-auto" />
              </a>
              <p className="text-sm text-muted-foreground max-w-xs">
                Renovations made simple for homeowners. Compare bids, manage milestones, and
                complete your project with confidence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#how" className="text-muted-foreground hover:text-foreground">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-muted-foreground hover:text-foreground">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-muted-foreground hover:text-foreground">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:info@smartreno.io"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    info@smartreno.io
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+12017889502"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    (201) 788-9502
                  </a>
                </li>
                <li className="text-muted-foreground">Northern New Jersey</li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SmartReno Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
