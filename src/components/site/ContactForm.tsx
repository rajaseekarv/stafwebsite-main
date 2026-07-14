import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const schema = z.object({
  firstName: z.string().trim().min(1, "Required").max(80),
  lastName: z.string().trim().min(1, "Required").max(80),
  email: z.string().trim().email("Invalid email").max(200),
  phone: z.string().trim().min(4, "Required").max(40),
  jobTitle: z.string().trim().min(1, "Required").max(120),
  company: z.string().trim().min(1, "Required").max(160),
  country: z.string().trim().min(1, "Required").max(80),
  project: z.string().trim().max(2000).optional(),
});

const FIELDS: Array<{ name: keyof z.infer<typeof schema>; label: string; type?: string; full?: boolean }> = [
  { name: "firstName", label: "First Name" },
  { name: "lastName", label: "Last Name" },
  { name: "email", label: "Business Email", type: "email" },
  { name: "phone", label: "Phone Number", type: "tel" },
  { name: "jobTitle", label: "Job Title" },
  { name: "company", label: "Company / Institution" },
  { name: "country", label: "Country" },
];

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const first = parsed.error.issues[0];
      toast.error(first?.message ?? "Please fill all required fields");
      return;
    }

    setSubmitting(true);

    fetch("https://formsubmit.co/ajax/business@Stafróf.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "_replyto": parsed.data.email,
        "Subject": `Contact Us Enquiry — ${parsed.data.company}`,
        "Name": `${parsed.data.firstName} ${parsed.data.lastName}`,
        "Email": parsed.data.email,
        "Phone": parsed.data.phone,
        "Job Title": parsed.data.jobTitle,
        "Company": parsed.data.company,
        "Country": parsed.data.country,
        "Project Details": parsed.data.project || "(none)"
      })
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to submit contact form");
        return res.json();
      })
      .then(() => {
        setSubmitting(false);
        toast.success("Thank you! Your enquiry has been sent successfully to business@Stafróf.com.");
        (e.target as HTMLFormElement).reset();
      })
      .catch(err => {
        setSubmitting(false);
        toast.error("Failed to submit. Please try again or email business@Stafróf.com directly.");
      });
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2 text-left">
      {FIELDS.map((f) => (
        <div key={f.name} className="grid gap-1.5">
          <Label htmlFor={f.name} className="text-slate-700 font-semibold text-sm">
            {f.label} <span className="text-red-500">*</span>
          </Label>
          <Input 
            id={f.name} 
            name={f.name} 
            type={f.type ?? "text"} 
            required 
            className="bg-slate-50/80 border-slate-200 text-slate-900 focus:bg-white focus:border-brand focus:ring-1 focus:ring-brand rounded-xl h-11 placeholder-slate-400 transition-all"
          />
        </div>
      ))}
      <div className="grid gap-1.5 sm:col-span-2">
        <Label htmlFor="project" className="text-slate-700 font-semibold text-sm">Tell us about your project</Label>
        <Textarea 
          id="project" 
          name="project" 
          rows={5} 
          placeholder="A bit of context helps us connect you with the right team faster." 
          className="bg-slate-50/80 border-slate-200 text-slate-900 focus:bg-white focus:border-brand focus:ring-1 focus:ring-brand rounded-xl placeholder-slate-400 resize-none transition-all"
        />
      </div>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" disabled={submitting} className="w-full rounded-full sm:w-auto sm:px-10 bg-brand text-ink hover:bg-brand-2 shadow-md font-semibold transition-all">
          {submitting ? "Sending..." : "Submit enquiry"}
        </Button>
        <p className="mt-3 text-xs text-slate-500">
          Your details will be sent to <span className="font-semibold text-slate-700">business@Stafróf.com</span>.
        </p>
      </div>
    </form>
  );
}
