import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const schema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(120),
  email: z.string().trim().email("Please enter a valid business email"),
  phone: z.string().trim().min(4, "Please enter your phone number").max(40),
  designation: z.string().trim().min(2, "Please enter your designation").max(120),
  company: z.string().trim().min(2, "Please enter your company name").max(160),
  country: z.string().trim().min(2, "Please enter your country").max(80),
  project: z.string().trim().max(2000).optional(),
});

type Field = {
  name: keyof z.infer<typeof schema>;
  label: string;
  placeholder: string;
  type?: React.HTMLInputTypeAttribute;
};

const FIELDS: Field[] = [
  {
    name: "fullName",
    label: "Full Name",
    placeholder: "John Smith",
  },
  {
    name: "email",
    label: "Business Email",
    type: "email",
    placeholder: "john@company.com",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "+1 234 567 890",
  },
  {
    name: "designation",
    label: "Designation",
    placeholder: "Chief Technology Officer",
  },
  {
    name: "company",
    label: "Company / Institution",
    placeholder: "ABC Bank Ltd.",
  },
  {
    name: "country",
    label: "Country",
    placeholder: "United States",
  },
];

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    const fd = new FormData(form);
    const data = Object.fromEntries(fd.entries());

    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message || "Please complete all required fields.");
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/business@stafrof.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `New Business Enquiry - ${parsed.data.company}`,
            _replyto: parsed.data.email,

            Name: parsed.data.fullName,
            Email: parsed.data.email,
            Phone: parsed.data.phone,
            Designation: parsed.data.designation,
            Company: parsed.data.company,
            Country: parsed.data.country,
            "Project Details": parsed.data.project || "Not provided",
          }),
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      form.reset();

      toast.success(
        "Thank you for contacting Stafróf Intelligence Corporation. Our business team has received your enquiry and will respond within 1–2 business days."
      );
    } catch {
      toast.error(
        "Unable to send your enquiry at the moment. Please try again shortly or email us directly at business@stafrof.com."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 sm:grid-cols-2 text-left"
    >
      {FIELDS.map((field) => (
        <div key={field.name} className="grid gap-2">
          <Label
            htmlFor={field.name}
            className="text-slate-700 font-semibold text-sm"
          >
            {field.label} <span className="text-red-500">*</span>
          </Label>

          <Input
            id={field.name}
            name={field.name}
            type={field.type || "text"}
            placeholder={field.placeholder}
            required
            className="h-12 rounded-xl border-slate-200 bg-slate-50/80 text-slate-900 placeholder:text-slate-400 focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
          />
        </div>
      ))}

      <div className="sm:col-span-2 grid gap-2">
        <Label
          htmlFor="project"
          className="text-slate-700 font-semibold text-sm"
        >
          How can we help you?
        </Label>

        <Textarea
          id="project"
          name="project"
          rows={6}
          placeholder="Briefly describe your business goals, project requirements, or the solutions you're looking for."
          className="rounded-xl border-slate-200 bg-slate-50/80 text-slate-900 placeholder:text-slate-400 resize-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
        />
      </div>

      <div className="sm:col-span-2 pt-2">

        <Button
          type="submit"
          size="lg"
          disabled={submitting}
          className="rounded-full bg-brand hover:bg-brand-2 text-ink px-10 py-6 font-semibold shadow-lg transition-all"
        >
          {submitting ? "Sending Your Request..." : "Request Consultation"}
        </Button>

        <div className="mt-5 space-y-1">

          <p className="text-sm text-slate-600">
            ✓ Typical response time:
            <span className="font-semibold">
              {" "}
              1–2 business days
            </span>
          </p>

          <p className="text-sm text-slate-500 leading-6">
            Your information will remain confidential and will only be used to
            respond to your enquiry. For immediate assistance, contact{" "}
            <span className="font-semibold text-slate-700">
              business@stafrof.com
            </span>.
          </p>

        </div>
      </div>
    </form>
  );
}