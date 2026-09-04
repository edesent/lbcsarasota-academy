import { sendToSlack } from "@/lib/slack-form";

const labels: Record<string, string> = {
  parent_name: "Parent or guardian",
  parent_email: "Email",
  phone: "Phone",
  student_name: "Student",
  grade_requested: "Grade requested",
  school_year: "School year requested",
  additional_students: "Additional students",
  referral_source: "How they heard about LBA",
  enrollment_updates_consent: "Enrollment updates consent",
  notes: "Questions or comments",
};

function value(body: Record<string, unknown>, key: string) {
  return String(body[key] ?? "").trim();
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid waiting-list request." }, { status: 400 });
  }

  if (body.botcheck) {
    return Response.json({ success: true });
  }

  const parentName = value(body, "parent_name");
  const parentEmail = value(body, "parent_email");
  const phone = value(body, "phone");
  const studentName = value(body, "student_name");
  const gradeRequested = value(body, "grade_requested");
  const schoolYear = value(body, "school_year");
  const consent = value(body, "enrollment_updates_consent");

  if (!parentName || !parentEmail || !phone || !studentName || !gradeRequested || !schoolYear || consent !== "Yes") {
    return Response.json(
      { error: "Please complete all required fields and agree to receive enrollment updates." },
      { status: 400 }
    );
  }

  const fields = Object.entries(labels)
    .map(([key, label]) => [label, value(body, key)] as [string, string])
    .filter(([, fieldValue]) => fieldValue);

  const result = await sendToSlack({
    subject: "🏫 New Liberty Baptist Academy waiting-list request",
    name: parentName,
    contact: [parentEmail, phone].join(" · "),
    fields,
  });

  if (!result.ok) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ success: true });
}
