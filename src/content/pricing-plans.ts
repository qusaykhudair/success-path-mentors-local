export interface PricingPlan { name:string; description:string; lessons:number; price:number; features:string[]; recommended?:boolean }
export const pricingPlans = {
 en:[
  {name:'Starter',description:'A focused four-lesson plan for a clear short-term goal.',lessons:4,price:100,features:['One-to-one online lessons','Tutor matching by subject and grade','Progress follow-up']},
  {name:'Progress',description:'Eight lessons for steady support and stronger continuity.',lessons:8,price:190,recommended:true,features:['One-to-one online lessons','Tutor matching by subject and grade','Progress follow-up']},
  {name:'Momentum',description:'Twelve lessons for ongoing academic support.',lessons:12,price:260,features:['One-to-one online lessons','Tutor matching by subject and grade','Progress follow-up']},
 ],
 ar:[
  {name:'البداية',description:'أربع حصص لهدف دراسي واضح وقصير المدى.',lessons:4,price:100,features:['حصص فردية أونلاين','اختيار المدرس حسب المادة والصف','متابعة التقدم']},
  {name:'التقدم',description:'ثماني حصص لدعم منتظم واستمرارية أفضل.',lessons:8,price:190,recommended:true,features:['حصص فردية أونلاين','اختيار المدرس حسب المادة والصف','متابعة التقدم']},
  {name:'الاستمرارية',description:'اثنتا عشرة حصة لدعم أكاديمي مستمر.',lessons:12,price:260,features:['حصص فردية أونلاين','اختيار المدرس حسب المادة والصف','متابعة التقدم']},
 ]
} as const;
