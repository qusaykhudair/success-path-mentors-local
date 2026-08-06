import type {
  ScienceStrandDefinition,
} from '@/types/science-overview';

export const physicsStrands:
  ScienceStrandDefinition[] = [
    {
      subjectKey: 'physics',
      slug: 'dynamics-forces',
      title: {
        en: "Dynamics and Forces",
        ar: "الديناميكا والقوى",
      },
      description: {
        en: "Forces, Newton’s laws, free-body diagrams, friction, gravitation, circular motion, and connected systems.",
        ar: "القوى وقوانين نيوتن ومخططات الجسم الحر والاحتكاك والجاذبية والحركة الدائرية والأنظمة المترابطة.",
      },
      iconKey: 'force',
      status: 'approved',
    },
    {
      subjectKey: 'physics',
      slug: 'electricity-circuits',
      title: {
        en: "Electricity and Circuits",
        ar: "الكهرباء والدوائر",
      },
      description: {
        en: "Charge, current, voltage, resistance, Ohm’s law, series and parallel circuits, circuit analysis, and power.",
        ar: "الشحنة والتيار والجهد والمقاومة وقانون أوم والدوائر على التوالي والتوازي وتحليل الدوائر والقدرة الكهربائية.",
      },
      iconKey: 'circuit',
      status: 'approved',
    },
    {
      subjectKey: 'physics',
      slug: 'electrostatics-electromagnetism',
      title: {
        en: "Electrostatics and Electromagnetism",
        ar: "الكهرباء الساكنة والكهرومغناطيسية",
      },
      description: {
        en: "Electric charge, fields, potential, Coulomb’s law, magnetism, electromagnetic induction, and applications.",
        ar: "الشحنة والمجالات والجهد وقانون كولوم والمغناطيسية والحث الكهرومغناطيسي وتطبيقاته.",
      },
      iconKey: 'magnet',
      status: 'approved',
    },
    {
      subjectKey: 'physics',
      slug: 'integrated-physics',
      title: {
        en: "Integrated Physics",
        ar: "الفيزياء المتكاملة",
      },
      description: {
        en: "Mixed-concept physics review connecting the main ideas of mechanics, electricity, waves, energy, and modern physics.",
        ar: "مراجعة مترابطة لمفاهيم الفيزياء في الميكانيكا والكهرباء والموجات والطاقة والفيزياء الحديثة.",
      },
      iconKey: 'physics',
      status: 'approved',
    },
    {
      subjectKey: 'physics',
      slug: 'kinematics',
      title: {
        en: "Kinematics",
        ar: "الحركة",
      },
      description: {
        en: "Displacement, speed, velocity, acceleration, motion graphs, kinematic equations, projectiles, relative motion, and free fall.",
        ar: "الإزاحة والسرعة والتسارع ورسوم الحركة والمعادلات الحركية والمقذوفات والحركة النسبية والسقوط الحر.",
      },
      iconKey: 'motion',
      status: 'approved',
    },
    {
      subjectKey: 'physics',
      slug: 'measurement-vectors-modeling',
      title: {
        en: "Measurement, Vectors, and Modeling",
        ar: "القياس والمتجهات والنمذجة",
      },
      description: {
        en: "Vector components, resultants, quantitative representation, and mathematical modeling used in physics.",
        ar: "مركبات المتجهات والمحصلات والتمثيل الكمي والنمذجة الرياضية المستخدمة في الفيزياء.",
      },
      iconKey: 'vector',
      status: 'approved',
    },
    {
      subjectKey: 'physics',
      slug: 'modern-physics',
      title: {
        en: "Modern Physics",
        ar: "الفيزياء الحديثة",
      },
      description: {
        en: "Electromagnetic radiation, quantum theory, the photoelectric effect, particle and nuclear physics, and special relativity.",
        ar: "الإشعاع الكهرومغناطيسي ونظرية الكم والتأثير الكهروضوئي وفيزياء الجسيمات والنووية والنسبية الخاصة.",
      },
      iconKey: 'quantum',
      status: 'approved',
    },
    {
      subjectKey: 'physics',
      slug: 'momentum-collisions',
      title: {
        en: "Momentum and Collisions",
        ar: "الزخم والتصادمات",
      },
      description: {
        en: "Linear momentum, impulse, conservation of momentum, and the analysis of collisions.",
        ar: "الزخم الخطي والدفع وحفظ الزخم وتحليل التصادمات.",
      },
      iconKey: 'momentum',
      status: 'approved',
    },
    {
      subjectKey: 'physics',
      slug: 'optics',
      title: {
        en: "Optics",
        ar: "البصريات",
      },
      description: {
        en: "Light behavior, reflection, mirrors, refraction, total internal reflection, lenses, image formation, interference, and diffraction.",
        ar: "سلوك الضوء والانعكاس والمرايا والانكسار والانعكاس الكلي والعدسات وتكوين الصور والتداخل والحيود.",
      },
      iconKey: 'optics',
      status: 'approved',
    },
    {
      subjectKey: 'physics',
      slug: 'oscillations',
      title: {
        en: "Oscillations",
        ar: "الاهتزازات",
      },
      description: {
        en: "Simple harmonic motion with springs and pendulums, including periodic behavior and restoring forces.",
        ar: "الحركة التوافقية البسيطة في النوابض والبندولات والسلوك الدوري وقوى الإرجاع.",
      },
      iconKey: 'oscillation',
      status: 'approved',
    },
    {
      subjectKey: 'physics',
      slug: 'thermal-physics',
      title: {
        en: "Thermal Physics",
        ar: "الفيزياء الحرارية",
      },
      description: {
        en: "Heat, temperature, heat capacity, thermal transfer, heating curves, and phase changes.",
        ar: "الحرارة ودرجة الحرارة والسعة الحرارية وانتقال الطاقة ومنحنيات التسخين وتغيرات الحالة.",
      },
      iconKey: 'thermometer',
      status: 'approved',
    },
    {
      subjectKey: 'physics',
      slug: 'waves-sound',
      title: {
        en: "Waves and Sound",
        ar: "الموجات والصوت",
      },
      description: {
        en: "Wave speed, frequency, wavelength, sound, resonance, harmonics, Doppler effect, superposition, and interference.",
        ar: "سرعة الموجة والتردد والطول الموجي والصوت والرنين والتوافقيات وتأثير دوبلر والتراكب والتداخل.",
      },
      iconKey: 'wave',
      status: 'approved',
    },
    {
      subjectKey: 'physics',
      slug: 'work-energy-power',
      title: {
        en: "Work, Energy, and Power",
        ar: "الشغل والطاقة والقدرة",
      },
      description: {
        en: "Work, kinetic and potential energy, mechanical energy, energy conservation, power, efficiency, and energy cost.",
        ar: "الشغل وطاقة الحركة والوضع والطاقة الميكانيكية وحفظ الطاقة والقدرة والكفاءة وتكلفة الطاقة.",
      },
      iconKey: 'energy',
      status: 'approved',
    },
  ];

export const approvedPhysicsStrands =
  physicsStrands.filter(
    (strand) =>
      strand.status === 'approved'
  );
