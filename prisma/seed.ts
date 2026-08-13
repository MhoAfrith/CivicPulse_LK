import { PrismaClient, Role, CaseStatus, Category, VerificationDecision, PledgeType } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const adapter = new PrismaBetterSqlite3({ url: "file:dev.db" });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Starting CivicPulse LK Seed process...");

  // Clear existing data
  await prisma.auditLog.deleteMany();
  await prisma.notification.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.ngoCommitment.deleteMany();
  await prisma.fieldEvidence.deleteMany();
  await prisma.fieldTask.deleteMany();
  await prisma.caseAssignment.deleteMany();
  await prisma.verification.deleteMany();
  await prisma.reportMedia.deleteMany();
  await prisma.report.deleteMany();
  await prisma.user.deleteMany();
  await prisma.dsDivision.deleteMany();
  await prisma.platformSetting.deleteMany();

  // 1. Create DS Divisions
  const dsColombo = await prisma.dsDivision.create({
    data: {
      code: "DS-COL-01",
      nameEn: "Colombo Divisional Secretariat",
      nameSi: "කොළඹ ප්‍රාදේශීය ලේකම් කාර්යාලය",
      nameTa: "கொழும்பு பிரதேச செயலகம்",
      district: "Colombo",
      province: "Western Province",
      latitude: 6.9271,
      longitude: 79.8612,
    },
  });

  const dsKandy = await prisma.dsDivision.create({
    data: {
      code: "DS-KND-02",
      nameEn: "Kandy Four Gravets DS",
      nameSi: "මහනුවර කඩවත්සතර ප්‍රාදේශීය ලේකම්",
      nameTa: "கண்டி பிரதேச செயலகம்",
      district: "Kandy",
      province: "Central Province",
      latitude: 7.2906,
      longitude: 80.6337,
    },
  });

  const dsGalle = await prisma.dsDivision.create({
    data: {
      code: "DS-GAL-03",
      nameEn: "Galle Four Gravets DS",
      nameSi: "ගාල්ල කඩවත්සතර ප්‍රාදේශීය ලේකම්",
      nameTa: "காலி பிரதேச செயலகம்",
      district: "Galle",
      province: "Southern Province",
      latitude: 6.0535,
      longitude: 80.2210,
    },
  });

  const dsJaffna = await prisma.dsDivision.create({
    data: {
      code: "DS-JAF-04",
      nameEn: "Jaffna Divisional Secretariat",
      nameSi: "යාපනය ප්‍රාදේශීය ලේකම් කාර්යාලය",
      nameTa: "யாழ்ப்பாணம் பிரதேச செயலகம்",
      district: "Jaffna",
      province: "Northern Province",
      latitude: 9.6615,
      longitude: 80.0255,
    },
  });

  console.log("✅ DS Divisions created");

  // 2. Create Users (7 Roles)
  const adminUser = await prisma.user.create({
    data: {
      email: "admin@civicpulse.lk",
      name: "Dinesh Abeywardena",
      role: Role.ADMIN,
      preferredLanguage: "en",
      trustScore: 100.0,
      organization: "CivicPulse LK Governance Board",
      dsDivisionId: dsColombo.id,
    },
  });

  const dsOfficerUser = await prisma.user.create({
    data: {
      email: "dso.colombo@civicpulse.lk",
      name: "K. Perera (DS Officer)",
      role: Role.DS_OFFICER,
      preferredLanguage: "si",
      trustScore: 98.0,
      organization: "Colombo Divisional Secretariat",
      dsDivisionId: dsColombo.id,
    },
  });

  const rdaAgencyUser = await prisma.user.create({
    data: {
      email: "agency.rda@civicpulse.lk",
      name: "Road Development Authority (RDA)",
      role: Role.GOVT_AGENCY,
      preferredLanguage: "en",
      trustScore: 95.0,
      organization: "RDA Western Province Division",
      dsDivisionId: dsColombo.id,
    },
  });

  const nwsdbAgencyUser = await prisma.user.create({
    data: {
      email: "agency.water@civicpulse.lk",
      name: "Water Supply Board (NWSDB)",
      role: Role.GOVT_AGENCY,
      preferredLanguage: "en",
      trustScore: 94.0,
      organization: "National Water Supply & Drainage Board",
      dsDivisionId: dsColombo.id,
    },
  });

  const ngoUser = await prisma.user.create({
    data: {
      email: "ngo.rotary@civicpulse.lk",
      name: "Rotary Community Sri Lanka",
      role: Role.NGO,
      preferredLanguage: "en",
      trustScore: 92.0,
      organization: "Rotary Sri Lanka District 3220",
      dsDivisionId: dsColombo.id,
    },
  });

  const volunteerUser = await prisma.user.create({
    data: {
      email: "volunteer.kasun@civicpulse.lk",
      name: "Kasun Jayawardena",
      role: Role.VOLUNTEER,
      preferredLanguage: "si",
      trustScore: 89.0,
      organization: "Civic Action Youth Volunteer Network",
      dsDivisionId: dsColombo.id,
    },
  });

  const verifierUser = await prisma.user.create({
    data: {
      email: "verifier.nimal@civicpulse.lk",
      name: "Nimal Silva",
      role: Role.COMMUNITY_VERIFIER,
      preferredLanguage: "en",
      trustScore: 88.0,
      dsDivisionId: dsColombo.id,
    },
  });

  const citizenUser = await prisma.user.create({
    data: {
      email: "citizen.anusha@civicpulse.lk",
      name: "Anusha Fernando",
      role: Role.CITIZEN,
      preferredLanguage: "en",
      trustScore: 82.0,
      dsDivisionId: dsColombo.id,
    },
  });

  console.log("✅ Users for 7 roles created");

  // 3. Create Sample Reports/Cases
  const case1 = await prisma.report.create({
    data: {
      caseNumber: "CP-2026-1042",
      title: "Hazardous Deep Potholes near Bambalapitiya Junction",
      description: "Severe road surface damage causing vehicle accidents and traffic congestion on A2 main corridor near Galle Road Bamba junction.",
      category: Category.ROADS,
      status: CaseStatus.VERIFIED,
      latitude: 6.8905,
      longitude: 79.8550,
      address: "Galle Road, Bambalapitiya, Colombo 04",
      priorityScore: 88.5,
      aiSummary: "High-priority urban arterial road hazard near major public transit junction. Immediate asphalt resurfacing recommended.",
      reporterId: citizenUser.id,
      dsDivisionId: dsColombo.id,
      verificationCount: 4,
      verificationThreshold: 3,
      media: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=800&q=80",
            caption: "Deep road depression on Galle Road north-bound lane",
          },
        ],
      },
      verifications: {
        create: [
          {
            verifierId: verifierUser.id,
            decision: VerificationDecision.CONFIRM,
            reason: "Verified on site. Hazardous depth over 15cm.",
          },
        ],
      },
    },
  });

  const case2 = await prisma.report.create({
    data: {
      caseNumber: "CP-2026-1043",
      title: "Blocked Main Canal Causing Pettah Market Flooding",
      description: "Polythene and debris blockages in the primary drainage channel adjacent to Central Bus Stand during heavy rains.",
      category: Category.DRAINAGE,
      status: CaseStatus.IN_PROGRESS,
      latitude: 6.9344,
      longitude: 79.8519,
      address: "Bodhiraja Mawatha, Pettah, Colombo 11",
      priorityScore: 76.0,
      aiSummary: "Commercial hub drainage obstruction posing urban flash flood risks to local vendors.",
      reporterId: citizenUser.id,
      dsDivisionId: dsColombo.id,
      assignedAgencyId: rdaAgencyUser.id,
      assignedInstructions: "Deploy RDA gully vacuum and drainage clearing squad immediately.",
      verificationCount: 3,
      verificationThreshold: 3,
      media: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80",
            caption: "Blocked drainage grate near Pettah bus stand",
          },
        ],
      },
    },
  });

  const case3 = await prisma.report.create({
    data: {
      caseNumber: "CP-2026-1044",
      title: "Non-Functional Streetlights on Kandy Peradeniya Corridor",
      description: "Five consecutive solar streetlights have gone dark along the main university access road, compromising safety at night.",
      category: Category.STREETLIGHTS,
      status: CaseStatus.UNDER_VERIFICATION,
      latitude: 7.2625,
      longitude: 80.5972,
      address: "Gatembe, Peradeniya Road, Kandy",
      priorityScore: 62.0,
      aiSummary: "Night safety hazard on arterial university connector road requiring battery unit replacements.",
      reporterId: citizenUser.id,
      dsDivisionId: dsKandy.id,
      verificationCount: 2,
      verificationThreshold: 3,
      media: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80",
            caption: "Unlit street light poles near Gatembe junction",
          },
        ],
      },
    },
  });

  const case4 = await prisma.report.create({
    data: {
      caseNumber: "CP-2026-1045",
      title: "Burst Main Water Pipe at Galle Fort Pedestrian Walkway",
      description: "Clean water leak under high pressure washing away paved heritage stones near Rampart Street.",
      category: Category.WATER,
      status: CaseStatus.RESOLVED,
      latitude: 6.0268,
      longitude: 80.2170,
      address: "Rampart Street, Galle Fort, Galle",
      priorityScore: 91.0,
      aiSummary: "High urgency potable water distribution leak threatening UNESCO heritage pavement stability.",
      reporterId: citizenUser.id,
      dsDivisionId: dsGalle.id,
      assignedAgencyId: nwsdbAgencyUser.id,
      resolutionNotes: "NWSDB emergency crew replaced damaged 110mm PVC line and restored cobblestones on 12th Aug 2026.",
      resolutionDate: new Date(),
      verificationCount: 5,
      verificationThreshold: 3,
      media: {
        create: [
          {
            url: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=800&q=80",
            caption: "Water leakage repaired and area resurfaced by NWSDB",
            mediaType: "AFTER",
          },
        ],
      },
    },
  });

  console.log("✅ Seed reports created");

  // 4. Create NGO Commitment & Volunteer Field Task
  await prisma.ngoCommitment.create({
    data: {
      reportId: case2.id,
      ngoId: ngoUser.id,
      pledgeType: PledgeType.VOLUNTEERS,
      description: "Providing 15 volunteer team members for community canal cleanup and trash removal.",
      status: "FULFILLED",
    },
  });

  await prisma.fieldTask.create({
    data: {
      reportId: case1.id,
      volunteerId: volunteerUser.id,
      taskType: "INSPECTION",
      status: "COMPLETED",
      evidences: {
        create: [
          {
            reportId: case1.id,
            volunteerId: volunteerUser.id,
            observedCondition: "Pothole measures 2.1m wide, 18cm deep. Water accumulating during rains.",
            notes: "Verified physical hazard. Guard rails added temporarily by local vendors.",
            latitude: 6.8905,
            longitude: 79.8550,
          },
        ],
      },
    },
  });

  // 5. Create Platform Settings & Audit Logs
  await prisma.platformSetting.createMany({
    data: [
      { key: "VERIFICATION_THRESHOLD", value: "3", description: "Minimum community confirmations to reach DS Officer triage" },
      { key: "AUTO_AI_TRIAGE_ENABLED", value: "true", description: "Enable Gemini AI scoring and advisory summaries" },
      { key: "SUPPORTED_LANGUAGES", value: "en,si,ta", description: "Platform supported UI languages" },
    ],
  });

  await prisma.auditLog.create({
    data: {
      userId: dsOfficerUser.id,
      userRole: Role.DS_OFFICER,
      action: "CASE_ASSIGNED",
      entityType: "Report",
      entityId: case2.id,
      details: JSON.stringify({ agency: "RDA Western Province", urgency: "HIGH" }),
    },
  });

  console.log("🎉 Seed finished successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
