import { sendToSlack } from "@/lib/slack-form";

const labels: Record<string, string> = {
  student_name: "Student name",
  preferred_name: "Preferred name",
  birthdate: "Birthdate",
  birthplace: "Birthplace",
  sex: "Sex",
  age: "Age",
  grade_applying: "Grade applying for",
  last_grade_completed: "Last grade completed",
  school_attended: "School attended",
  address: "Address",
  city: "City",
  state: "State",
  zip: "ZIP",
  parent_email: "Parent email",
  home_phone: "Home phone",
  dad_cell: "Dad cell",
  mom_cell: "Mom cell",
  emergency_contact: "Additional emergency contact",
  physician_name: "Physician",
  physician_phone: "Physician phone",
  health_insurance: "Health insurance",
  policy_number: "Policy number",
  failed_subject: "Failed academic subject",
  failed_subject_explanation: "Failed subject explanation",
  academic_level: "Previous academic level",
  academic_strengths: "Academic strengths",
  academic_weaknesses: "Academic weaknesses",
  disciplinary_difficulty: "Disciplinary difficulty",
  disciplinary_explanation: "Disciplinary explanation",
  records_ready: "Records ready",
  pickup_authorized: "Authorized pickup",
  notes: "Notes",
};

function value(body: Record<string, unknown>, key: string) {
  const item = body[key];
  if (Array.isArray(item)) return item.map(String).join(", ").trim();
  return String(item ?? "").trim();
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid application." }, { status: 400 });
  }

  if (body.botcheck) {
    return Response.json({ success: true });
  }

  const studentName = value(body, "student_name");
  const parentEmail = value(body, "parent_email");
  const phone = value(body, "dad_cell") || value(body, "mom_cell") || value(body, "home_phone");

  if (!studentName || !parentEmail || !phone) {
    return Response.json(
      { error: "Please include the student's name, parent email, and a phone number." },
      { status: 400 }
    );
  }

  const fields = Object.entries(labels)
    .map(([key, label]) => [label, value(body, key)] as [string, string])
    .filter(([, fieldValue]) => fieldValue);

  const result = await sendToSlack({
    subject: "🏫 New Liberty Baptist Academy application",
    name: studentName,
    contact: [parentEmail, phone].filter(Boolean).join(" · "),
    fields,
  });

  if (!result.ok) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ success: true });
}
