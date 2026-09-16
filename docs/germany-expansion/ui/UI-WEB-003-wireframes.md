# UI-WEB-003 — Wireframes & Page Architecture

## 1. Desktop Hero Concept (SPLIT HERO - LTR)
```text
┌────────────────────────────────────────────────────────────────────────┐
│ [Logo]                Services   Teachers   FAQ              [Trial]   │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│  Find Your Perfect                What would you like help with?       │
│  1-to-1 Tutor                     ┌─────────────┐  ┌─────────────┐     │
│                                   │ German      │  │ English     │     │
│  Personalized learning for        └─────────────┘  └─────────────┘     │
│  students and adults.             ┌─────────────┐  ┌─────────────┐     │
│                                   │ Arabic      │  │ French      │     │
│  ✓ Verified teachers              └─────────────┘  └─────────────┘     │
│  ✓ Flexible scheduling                            [ Continue ]         │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

## 2. Arabic RTL Hero Concept (SPLIT HERO - Mirrored)
```text
┌────────────────────────────────────────────────────────────────────────┐
│  [Trial]              FAQ   Teachers   Services                 [Logo] │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│       بماذا تود أن نساعدك؟                 ابحث عن مدرسك الخاص         │
│  ┌─────────────┐  ┌─────────────┐                                      │
│  │ اللغة الإنجليزية│  │ اللغة الألمانية│           تعليم مخصص للطلاب         │
│  └─────────────┘  └─────────────┘                        والبالغين.    │
│  ┌─────────────┐  ┌─────────────┐                                      │
│  │ اللغة الفرنسية  │  │ اللغة العربية  │                معلمون معتمدون ✓   │
│  └─────────────┘  └─────────────┘               جداول زمنية مرنة ✓   │
│       [ متابعة ]                                                        │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

## 3. Mobile Hero Concept
```text
┌────────────────────────┐
│ [Logo]              [≡]│
├────────────────────────┤
│                        │
│ Find Your Perfect      │
│ 1-to-1 Tutor           │
│                        │
│ What would you like    │
│ help with?             │
│                        │
│ ┌────────────────────┐ │
│ │ German             │ │
│ └────────────────────┘ │
│ ┌────────────────────┐ │
│ │ English            │ │
│ └────────────────────┘ │
│ ┌────────────────────┐ │
│ │ Arabic             │ │
│ └────────────────────┘ │
│ ┌────────────────────┐ │
│ │ French             │ │
│ └────────────────────┘ │
│                        │
│ [     Continue       ] │
└────────────────────────┘
```

## 4. Dedicated Lead Flow (Desktop)
```text
┌────────────────────────────────────────────────────────────────────────┐
│ [Logo]                                               🔒 Secure Request │
├────────────────────────────────────────────────────────────────────────┤
│ ▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │
│                                                                        │
│                  Who is the tutoring for?                              │
│                                                                        │
│                  ┌────────────────────────────────┐                    │
│                  │  Child (Under 18)              │                    │
│                  └────────────────────────────────┘                    │
│                  ┌────────────────────────────────┐                    │
│                  │  Adult                         │                    │
│                  └────────────────────────────────┘                    │
│                                                                        │
│                  < Back                 [ Next ]                       │
└────────────────────────────────────────────────────────────────────────┘
```

## 5. Full Page Architecture (Germany)
1. **Header** (Sticky, Logo, Nav, Trial CTA, Lang Selector)
2. **Hero + Service Selection** (Intent capture)
3. **Trust Strip** (Verified claims: 1-to-1, Human Coordination)
4. **Four Core Language Services** (DE, EN, AR, FR equally weighted cards)
5. **Use Cases** (Arab family in DE context, adult learner context)
6. **Teacher Quality** (Vetting process, qualifications)
7. **How It Works** (3 steps: Tell Us → Coordinate → Learn)
8. **Social Proof / Testimonials** (Canonical quote format)
9. **Free Trial / Lead Journey CTA** (Secondary funnel entry)
10. **FAQ** (Accordion list)
11. **WhatsApp / Contact** (Contextual block with `+49 1512 3974353`)
12. **Footer** (Legal, privacy, market context)

## 6. Implementation Acceptance Criteria
- Hero first interaction is visible without excessive scrolling.
- All four Germany services possess equal visual priority.
- "Free Trial" remains the primary CTA across the site layout.
- WhatsApp is offered as a secondary contact vector.
- No unsupported/unverified marketing claims or statistics are displayed.
- Layout remains usable and robust at a 375px mobile viewport.
- Proper Arabic RTL alignment is enforced (layout mirroring without mechanical DOM reversal).
- German compound labels do not overflow their containers.
- Comprehensive keyboard navigation support.
- Visible and consistent focus states.
- Minimal 44px touch targets on mobile devices.
- No duplicated/forked testimonial systems.
- No competing floating controls (e.g., overlapping WhatsApp widgets and cookie banners).
